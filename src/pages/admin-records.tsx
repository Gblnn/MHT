import AMPMCombo from "@/components/ampmcombo";
import Back from "@/components/back";
import ComboDialog from "@/components/combo-dialog";
import SiteComboBox from "@/components/site-combobox";
import TimeComboBox from "@/components/time-combobox";
import WorkComboBox from "@/components/workcombo";
import { db } from "@/firebase";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import {LoadingOutlined} from '@ant-design/icons'
import { Package } from "lucide-react";
import DefaultDialog from "@/components/default-dialog";
import { message } from "antd";

type Record = {
  id:string,
  date:string,
  ename:string,
  site:string,
  work:string,
  start:string,
  end:string
}

export default function AdminRecords() {

  const [sitedialog, setSiteDialog] = useState(false);
  const [workdialog, setWorkDialog] = useState(false);
  const [startdialog, setStartDialog] = useState(false);
  const [enddialog, setEndDialog] = useState(false);
  const [deletedialog, setDeleteDialog] = useState(false)
  const [deleteconfirm, setDeleteConfirm] = useState(false)

  const [records, setRecords] = useState<any[]>([])
  const firestore = db

  const [ename, setEname] = useState("")
  const [doc_id, setDoc_id] = useState("")
  const [date, setDate] = useState("")

  const [time, setTime] = useState("")

  const [site, setSite] = useState("")
  const[work, setWork] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const[loading, setLoading] = useState(false)
  let [search, setSearch] = useState('')

  useEffect(()=>{
    async function fetchData(){
      setLoading(true)
      const RecordCollection = collection(firestore, "records")
      const recordQuery = query(RecordCollection, orderBy("rid", "asc"))
      const querySnapshot = await getDocs(recordQuery)
      const fetchedData: Array<Record> = [];

      querySnapshot.forEach((doc)=>{
        fetchedData.push({id: doc.id, ...doc.data()} as Record)
      })
      setLoading(false)
      setRecords(fetchedData)
    }
    fetchData();
  },[])

  useEffect(()=>{
  
  },[])

  const handleSite = async (p:any) => {
    setLoading(true)
    await updateDoc(doc(db, "records", p),{site:site})
    setLoading(false)
    setSiteDialog(false)
    window.location.reload()
  }

  const handleWork = async (p:any) => {
    setLoading(true)
    await updateDoc(doc(db, "records", p),{work:work})
    setLoading(false)
    setWorkDialog(false)
    window.location.reload()
  }

  const handleStart = async (p:any) => {
    setLoading(true)
    await updateDoc(doc(db, "records", p),{start:start})
    setLoading(false)
    setStartDialog(false)
    window.location.reload()
  }

  const handleEnd = async (p:any) => {
    setLoading(true)
    await updateDoc(doc(db, "records", p),{end:end})
    setLoading(false)
    setEndDialog(false)
    window.location.reload()
  }

  const handleDeleteDoc = async () => {
    setLoading(true)
    console.log(doc_id)
    try {
      await deleteDoc(doc(db, "records", doc_id))
      message.info("Record Deleted")  
      setDeleteConfirm(false)
    } catch (error) {
      message.error(String(error))
    }
    window.location.reload()
    
  }

  // const handleClick = () => {
  //   setDialog(true);
  // };
  return (
    <>
      <div className="page">
        <div>
        <Back/>
        </div>
          
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"auto", gap:"1rem", alignItems:"center", justifyContent:"flex-start", marginTop:"4rem", padding:"1.5rem", paddingTop:"3.5rem"}}>
            <div style={{width:"100%"}}>

            <input onChange={(e)=>{setSearch(e.target.value);console.log(search)}} placeholder="Search Records" style={{width:"100%", background:"var(--clr-opacity)"}}/>

            </div>
            
          {/* {posts.map((posts) => (
              <DirItem
                onclick={handleClick}
                key={posts.id}
                to=""
                icon={<File width="1rem" color="salmon" />}
                title={posts.date}
                
              />
            ))} */}
            
              <table style={{tableLayout:"fixed", width:"100%", textAlign:"center"}}>
                <thead>
                  <tr>
                    
                    <th>Date</th>
                    <th>Name</th>
                    <th>Site</th>
                    <th>Work</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Hours</th>
                  </tr>
                  
                </thead>
                
                <tbody>
                
                  {
                    records
                  //   .filter((item)=>{
                  //     item.name.toLowerCase().includes(search)
                  // })
                  .map((record)=>(
                      <tr key={record.id}>
                        <td onClick={()=>{setDeleteDialog(true);setEname(record.ename);setDate(record.date);setDoc_id(record.id)}}>{record.date}</td>
                        <td>{record.ename}</td>
                        <td onClick={()=>{setSiteDialog(true);setDoc_id(record.id)}}>{record.site}</td>
                        <td onClick={()=>{setWorkDialog(true);setDoc_id(record.id)}}>{record.work}</td>
                        <td onClick={()=>{setStartDialog(true);setDoc_id(record.id)}}>{record.start}</td>
                        <td onClick={()=>{setEndDialog(true);setDoc_id(record.id);console.log(typeof(doc_id))}}>{record.end}</td>
                        <td>{record.end==""?"-":String(
                          
                          moment.duration(moment(record.end, "h:mm A").diff(moment(record.start, "h:mm A"))).get("hours")
                          
                      )}
                      </td>
                      </tr>
                    ))
                  }
                  
                </tbody>
                
              </table>
              {records.length<1?
              <div style={{ width:"100%",height:"75%", display:"flex", justifyContent:"center",alignItems:"center",fontSize:"0.85rem"}}>
              {loading?<LoadingOutlined style={{fontSize:"2rem", color:"crimson"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, fontSize:'1rem' }}><Package width="1.1rem"/> Record Empty</p>}
              </div>
              :null
              }
            

          </div>
            
          </div>
        
      </div>
      {/* <DefaultDialog
        open={dialog}
        title="Summary"
        okText="Done"
        desc={date}
        onCancel={() => setDialog(false)}
      /> */}
      {/* <EditDialog title="Update entry" open={dialog} okText="Update" onChange="" onCancel={()=>setDialog(false)}/> */}
      <ComboDialog loading={loading} combo={<SiteComboBox items placeholder="Select Site" onChange={setSite}/>} title="Update site" inputPlaceholder="Site Name" open={sitedialog} okText="Update" onCancel={()=>setSiteDialog(false)} onConfirm={()=>handleSite(doc_id)}/>

      <ComboDialog loading={loading} combo={<WorkComboBox items placeholder="Select work" onChange={setWork}/>} title="Update work" inputPlaceholder="Select Work" open={workdialog} okText="Update" onCancel={()=>setWorkDialog(false)} onConfirm={()=>handleWork(doc_id)}/>

      <ComboDialog loading={loading} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setStart(time+" "+value);console.log(time+value)}}/>
      </div>} title="Update Start time" open={startdialog} okText="Update" onCancel={()=>setStartDialog(false)} onConfirm={()=>handleStart(doc_id)}/>

      <ComboDialog loading={loading} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setEnd(time+" "+value);console.log(time+value)}}/>
      </div>} title="Update End time" open={enddialog} okText="Update" onCancel={()=>setEndDialog(false)} onConfirm={()=>handleEnd(doc_id)} />

      <DefaultDialog title={ename} open={deletedialog} okText="Delete Entry" desc={date} onCancel={()=>setDeleteDialog(false)} onConfirm={()=>{setDeleteDialog(false);setDeleteConfirm(true)}}/>

      <DefaultDialog title="Delete Entry?" open={deleteconfirm} okText="Delete" onCancel={()=>setDeleteConfirm(false)} onConfirm={handleDeleteDoc} loading={loading} desc={ename} desc2={date}/>
    </>
  );
}
