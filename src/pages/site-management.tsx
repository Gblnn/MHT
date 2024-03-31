import AddButton from "@/components/add-button";
import Back from "@/components/back";
import SingleInputDialog from "@/components/single-input-dialog";
import SiteItem from "@/components/site-item";
import { db } from "@/firebase";
import { LoadingOutlined } from '@ant-design/icons';
import { addDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { Factory, Package } from "lucide-react";
import { useEffect, useState } from "react";

type Record = {
  id:string,
  sitename:string
}

export default function SiteManagement(){
  
    const [dialog, setDialog] = useState(false)
    const [sites, setSites] = useState<any>([])
    const [sitename, setSitename] = useState("")
    const [pageload, setPageLoad] = useState(false)
    const [dialogloading, setDialogLoading] = useState(false)
    const [update, setUpdate] = useState(false)

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(()=>{
      fetchData()
  },[update])

    const fetchData = async () => {
        setPageLoad(true)
        const RecordCollection = collection(db, "sites")
        const recordQuery = query(RecordCollection, orderBy("sitename", "desc"))
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
      await addDoc(collection(db, "sites"), {sitename:sitename})
      setDialogLoading(false)
      setDialog(false)
      setUpdate(!update)
      

    }

    return(
        <>
        <div className="page">
            <Back/>
            
            <div className="page-content">
              
      <div className={"snap-top"} style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", marginTop:"4rem"}}>
        {/* <div style={{width:"50%"}}>
        <DbCombo/>
        </div> */}
      
        {
          sites.map((post:any)=>(
            <SiteItem dialogtitle="Update Site" id={post.id} to="" icon={<Factory   color="var(--clr-accent)" width="1rem"/>} key={post.id} title={post.sitename} password={post.password} onDelete={()=>setUpdate(!update)}/>
          ))
        }
        {sites.length<1?
              <div style={{ width:"100%",height:"90%", background:"", display:"flex", justifyContent:"center",alignItems:"flex-start",fontSize:"1rem", marginTop:"25svh"}}>
                {pageload?<LoadingOutlined style={{fontSize:"2rem", color:"var(--clr-accent)"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, userSelect:"none", position:"absolute" }}><Package width="1.1rem"/> Record Empty</p>}
              
              </div>
              :null
              }
      </div>
      </div>
        </div>
        <AddButton onClick={()=>setDialog(true)}/>

      <SingleInputDialog title="Add Site" open={dialog} okText="Add" onCancel={()=>setDialog(false)} inputPlaceholder="Enter Site" inputOnChange={(e:any)=>{setSitename(e.target.value)}} loading={dialogloading} onConfirm={addSite}/>
        </>
    )
}