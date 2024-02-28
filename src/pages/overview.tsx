import AMPMCombo from "@/components/ampmcombo";
import Back from "@/components/back";
import ComboDialog from "@/components/combo-dialog";
import SiteComboBox from "@/components/site-combobox";
import TimeComboBox from "@/components/time-combobox";
import WorkComboBox from "@/components/workcombo";
import { db } from "@/firebase";
import { collection, doc, getDocs, orderBy, query, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

type Record = {
  id:string,
  date:string,
  ename:string,
  site:string,
  work:string,
  start:string,
  end:string
}

export default function Supervision() {

  const [sitedialog, setSiteDialog] = useState(false);
  const [workdialog, setWorkDialog] = useState(false);
  const [startdialog, setStartDialog] = useState(false);
  const [enddialog, setEndDialog] = useState(false);

  const [records, setRecords] = useState<Array<Record>>([])
  const firestore = db

  const [doc_id, setDoc_id] = useState("")

  const [time, setTime] = useState("")

  const [site, setSite] = useState("")
  const[work, setWork] = useState("")
  const [start, setStart] = useState("")
  const [end, setEnd] = useState("")

  const[loading, setLoading] = useState(false)

  useEffect(()=>{
    async function fetchData(){

      const RecordCollection = collection(firestore, "records")
      const recordQuery = query(RecordCollection, orderBy("rid", "asc"))
      const querySnapshot = await getDocs(recordQuery)
      const fetchedData: Array<Record> = [];

      querySnapshot.forEach((doc)=>{
        fetchedData.push({id: doc.id, ...doc.data()} as Record)
      })
      setRecords(fetchedData)
    }
    fetchData();
  },[])

  // const [date, setDate] = useState("")

  // const [posts, setPosts] = useState<any[]>([]);


  // useEffect(() => {
  //   fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setPosts(data)
  //       data.map((data:any)=>{
  //         setDate(data.date)
  //       })
  //     });
  // }, [setPosts]);

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

  // const handleClick = () => {
  //   setDialog(true);
  // };
  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"auto", gap:"1rem", alignItems:"center", justifyContent:"flex-start", marginTop:"6rem", padding:"1.5rem"}}>
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
                    {/* <th>Hours</th> */}
                  </tr>
                </thead>
                <tbody>
                  {
                    records.map((record)=>(
                      <tr key={record.id}>
                        <td>{record.date}</td>
                        <td>{record.ename}</td>
                        <td onClick={()=>{setSiteDialog(true);setDoc_id(record.id)}}>{record.site}</td>
                        <td onClick={()=>{setWorkDialog(true);setDoc_id(record.id)}}>{record.work}</td>
                        <td onClick={()=>{setStartDialog(true);setDoc_id(record.id)}}>{record.start}</td>
                        <td onClick={()=>{setEndDialog(true);setDoc_id(record.id);console.log(typeof(doc_id))}}>{record.end}</td>
                        {/* <td>{record.end==""?"-":String(
                          
                          moment.duration(moment(record.end, "h:mm A").diff(moment(record.start, "h:mm A"))).get("hours")
                          
                      )}
                      </td> */}
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            
          </div>
            
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
      
    </>
  );
}
