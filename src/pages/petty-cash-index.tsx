import AddButton from "@/components/add-button";
import Back from "@/components/back";
import HolderItem from "@/components/holder-item";
import SingleInputDialog from "@/components/single-input-dialog";
import { db } from "@/firebase";
import { LoadingOutlined } from '@ant-design/icons';
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { Notebook, Package } from "lucide-react";
import { useEffect, useState } from "react";

type Record = {
  id:string,
  sitename:string
}

export default function PettyCashIndex(){
  
    const [dialog, setDialog] = useState(false)
    const [sites, setSites] = useState<any>([])
    const [holder, setHolder] = useState("")
    const [pageload, setPageLoad] = useState(false)
    const [dialogloading, setDialogLoading] = useState(false)

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async () => {
        setPageLoad(true)
        const RecordCollection = collection(db, "petty-cash-holders")
        const recordQuery = query(RecordCollection, orderBy("name", "desc"))
        const querySnapshot = await getDocs(recordQuery)
        const fetchedData: Array<Record> = [];

        querySnapshot.forEach((doc)=>{
          fetchedData.push({id: doc.id, ...doc.data()} as Record)
        })
        setPageLoad(false)
        setSites(fetchedData)
        
    }


    const addSite = async () => {
      setDialogLoading(true)
      await addDoc(collection(db, "petty-cash-holders"), {name:holder})
      setDialogLoading(false)
      setDialog(false)
      setTimeout(()=>{
        window.location.reload()
      },100)
      

    }

    return(
        <>
        <div className="page">
            <Back/>
            
            <div className="page-content">
              
      <div className={"snap-center"} style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", marginTop:"4rem"}}>
        {/* <div style={{width:"50%"}}>
        <DbCombo/>
        </div> */}
      
        {
          sites.map((post:any)=>(
            <HolderItem dialogtitle="Delete Site?" id={post.id} to="/petty-cash" icon={<Notebook color="var(--clr-accent)" width="1rem"/>} key={post.id} title={post.name} password={post.password}/>
          ))
        }
        {sites.length<1?
              <div style={{ width:"100%",height:"100%", background:"", display:"flex", justifyContent:"center",alignItems:"flex-start",fontSize:"1rem", marginTop:"25svh"}}>
                {pageload?<LoadingOutlined style={{fontSize:"2rem", color:"var(--clr-accent)"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, userSelect:"none", position:"absolute" }}><Package width="1.1rem"/> Record Empty</p>}
              
              </div>
              :null
              }
      </div>
      </div>
        </div>
        <AddButton onClick={()=>setDialog(true)}/>

      <SingleInputDialog title="Add Petty Cash Holder" open={dialog} okText="Add" onCancel={()=>setDialog(false)} inputPlaceholder="Enter Name" inputOnChange={(e:any)=>{setHolder(e.target.value)}} loading={dialogloading} onConfirm={addSite}/>
        </>
    )
}