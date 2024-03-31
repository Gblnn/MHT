import AMPMCombo from "@/components/ampmcombo";
import Back from "@/components/back";
import ComboDialog from "@/components/combo-dialog";
import ConfirmDialog from "@/components/confirm-dialog";
import DefaultDialog from "@/components/default-dialog";
import EditMode from "@/components/edit-mode";
import SiteCombo from "@/components/site-combo";
import TimeComboBox from "@/components/time-combobox";
import WorkCombo from "@/components/work-combo";
import { db } from "@/firebase";
import { LoadingOutlined } from '@ant-design/icons';
import { message } from "antd";
import { collection, deleteDoc, doc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { motion } from 'framer-motion';
import { PackageX } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";

type Record = {
  id:string,
  date:string,
  ename:string,
  site:string,
  work:string,
  start:string,
  end:string
  rid:string
  status:boolean
}

export default function Supervision() {

  const [sitedialog, setSiteDialog] = useState(false);
  const [workdialog, setWorkDialog] = useState(false);
  const [startdialog, setStartDialog] = useState(false);
  const [enddialog, setEndDialog] = useState(false);

  const [records, setRecords] = useState<Array<Record>>([])
  const firestore = db
  const [dialog, setDialog] = useState(false)

  const [doc_id, setDoc_id] = useState("")

  const [time, setTime] = useState("")

  const [site, setSite] = useState("")
  const [rid, setRid] = useState("")
  const[work, setWork] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const [loading, setLoading] = useState(false)
  const [editable, setEditable] = useState(false)
  const [update, setUpdate] = useState(false)
  const [status, setStatus] = useState(false)
  const [postable, setPostable] = useState(false)

  const [confirmAction, setConfirmAction] = useState(false)

  async function fetchData(){
    setLoading(true)
    const RecordCollection = collection(firestore, "records")
    const recordQuery = query(RecordCollection, orderBy("rid", "asc"), where("date", "==", moment().format("DD-MM-YYYY")))
    const querySnapshot = await getDocs(recordQuery)
    const fetchedData: Array<Record> = [];

    querySnapshot.forEach((doc)=>{
      fetchedData.push({id: doc.id, ...doc.data()} as Record)
    })
    setLoading(false)
    setRecords(fetchedData)
    
  }

  useEffect(()=>{
    fetchData();
  },[])

  useEffect(()=>{
    if(site==""||work==""||start==""||end==""){
      setPostable(false)
    }
    else{
      setPostable(true)
    }
  },[site, work, start, end])

  useEffect(()=>{
    fetchData();
  },[update])

  useEffect(()=>{
  
  },[])

  const handleDeleteDoc = async () => {
    setLoading(true)
    try {
      await deleteDoc(doc(db, "records", doc_id))
      if(status==true){
        await fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+rid, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:false})
            })
      }
      
      setUpdate(!update)
      setDialog(false)
      setConfirmAction(false)
      
    } catch (error) {
      message.error(String(error))
    }
    
    
  }

  const handleSite = async () => {
    setLoading(true)
    await updateDoc(doc(db, "records", doc_id),{site:site})
    setLoading(false)
    setSiteDialog(false)
    setUpdate(!update)
  }

  const handleWork = async () => {
    setLoading(true)
    await updateDoc(doc(db, "records", doc_id),{work:work})
    setLoading(false)
    setWorkDialog(false)
    setUpdate(!update)
  }

  const handleStart = async () => {
    setLoading(true)
    await updateDoc(doc(db, "records", doc_id),{start:start})
    setLoading(false)
    setStartDialog(false)
    setUpdate(!update)
  }

  const handleEnd = async () => {
    setLoading(true)
    await updateDoc(doc(db, "records", doc_id),{end:end, status:false})
    if(status==true){
      await fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+rid, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:false})
            })
    }
    
    setLoading(false)
    setEndDialog(false)
    setUpdate(!update)
  }

  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>
          <EditMode onClick={()=>setEditable(!editable)} editable={editable}/>
          <motion.div initial={{opacity:0, scale:0.99}} whileInView={{opacity:1,scale:1}}>
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"auto", gap:"1rem", alignItems:"center", justifyContent:"flex-start", marginTop:"1.3rem", padding:"0.85rem", paddingTop:"3.5rem",}}>
          
            <h1 style={{fontWeight:600, fontSize:"1.25rem", padding:"0.05rem", background:"var(--clr-opacity)", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem"}}>{moment().format("LL")}</h1>
            
              <table style={{tableLayout:"fixed", width:"100%", textAlign:"center"}}>
                <thead>
                  <tr>
                  
                    <th>Name</th>
                    <th>Site</th>
                    <th>Work</th>
                    <th>Start</th>
                    <th>End</th>

                    {/* <th>Status</th> */}
                    {/* <th>Hours</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    records.map((record)=>(
              
                      <tr key={record.id} onClick={()=>{!editable?setDialog(true):null;setDoc_id(record.id);setSite(record.site);setRid(record.rid);setStatus(record.status)}}>
                       
                        <td>{record.ename}</td>
                        <td onClick={()=>{editable?setSiteDialog(true):null;setDoc_id(record.id)}}>{record.site}</td>
                        <td onClick={()=>{editable?setWorkDialog(true):null;setDoc_id(record.id)}}>{record.work}</td>
                        <td onClick={()=>{editable?setStartDialog(true):null;setDoc_id(record.id)}}>{record.start}</td>
                        <td onClick={()=>{editable?setEndDialog(true):null;setDoc_id(record.id)}}>{record.end}</td>

                        {/* <td>{String(record.status)}</td> */}
                        {/* <td>{record.end==""?"-":String(
                          moment.duration(moment(record.end, "h:mm A").diff(moment(record.start, "h:mm A"))).get("hours")    
                        )}
                        </td> 
                        */}

                      </tr>
                    ))
                  }
                </tbody>
              </table>
              {records.length<1?
              <div style={{ width:"100%",height:"85%", background:"", display:"flex", justifyContent:"center",alignItems:"center",fontSize:"1rem", position:"absolute"}}>

                {
                loading?<LoadingOutlined style={{fontSize:"2rem", color:"var(--clr-accent)"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, userSelect:"none" }}><PackageX width="1.1rem"/> Record Empty</p>}
              
              </div>
              :null
              }
            
          </div>
            
          </div>
          </motion.div>
        </div>
      </div>

      <DefaultDialog title="Delete Entry?" okText="Delete" open={dialog} onCancel={()=>setDialog(false)} onConfirm={()=>{setConfirmAction(true);setDialog(false)}} loading={loading} desc={site}/>

      <ConfirmDialog title="Confirm Delete?" open={confirmAction} okText="Confirm" onCancel={()=>setConfirmAction(false)} onConfirm={handleDeleteDoc} loading={loading}/>

      <ComboDialog title="Update Site" combo={<SiteCombo onChange={setSite}/>} open={sitedialog} okText="Update" onCancel={()=>setSiteDialog(false)} onConfirm={handleSite} loading={loading} postable={false}/>

      <ComboDialog title="Update Work" combo={<WorkCombo onChange={setWork}/>} open={workdialog} okText="Update" onCancel={()=>setWorkDialog(false)} onConfirm={handleWork} loading={loading} postable={postable}/>

      <ComboDialog title="Update Start" open={startdialog} okText="Update" onCancel={()=>setStartDialog(false)} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setStart(time+" "+value)}}/>
      </div>} onConfirm={handleStart} loading={loading} postable={postable}/>

      <ComboDialog title="Update End" open={enddialog} okText="Update" onCancel={()=>setEndDialog(false)} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setEnd(time+" "+value)}}/>
      </div>} onConfirm={handleEnd} loading={loading} postable={postable}/>
      
    </>
  );
}
