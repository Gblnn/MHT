import AddButton from "@/components/add-button";
import Back from "@/components/back";
import DefaultDialog from "@/components/default-dialog";
import MDPettyDialog from "@/components/md-petty-dialog";
import { db } from "@/firebase";
import { LoadingOutlined } from '@ant-design/icons';
import { format } from "date-fns";
import { addDoc, collection, deleteDoc, doc, getAggregateFromServer, getDocs, orderBy, query, sum } from "firebase/firestore";
import { motion } from 'framer-motion';
import { Package } from "lucide-react";
import { useEffect, useState } from "react";

type Record = {
  id:string,
  date:string,
  desc:string
  cash:number,
  bank:number,
  petty:number,
  direct:number
}

export default function MDAccount() {

  const [records, setRecords] = useState<Array<Record>>([])
  const firestore = db
  const [id, setId] = useState("")
  const date = format(new Date(), "dd-MM-yyyy");
  const [amount, setAmount] = useState(0)

  const [loading, setLoading] = useState(false)
  const [mdpettydialog, setMdPettyDialog] = useState(false)
  const [deleteDialog, setdeleteDialog] = useState(false)

  const [uploading, setUploading] = useState(false)

  const RecordCollection = collection(firestore, "md-account")

//   const [total, setTotal] = useState(0)
//   const [table, setTable] = useState(false)
  const [tableData, setTableData] = useState(false)
  const [paidbycombo, setPaidbyCombo] = useState("")

  useEffect(()=>{
    fetchData()
    calculation()
  },[])

  async function fetchData(){
    try {
      setLoading(true)
    
    const recordQuery = query(RecordCollection, orderBy("desc", "asc"))
    const querySnapshot = await getDocs(recordQuery)
    const fetchedData:any = [];

    querySnapshot.forEach((doc)=>{
      fetchedData.push({id: doc.id, ...doc.data()})
    })
    setLoading(false)
    setRecords(fetchedData)
    setTableData(true)
      
    } catch (error) {
      setTableData(false)
    }
    
    
  }

  const calculation = async () => {
    const snapshot = await getAggregateFromServer(RecordCollection, {
      total: sum('amount')
    });
    
    console.log('total => ', snapshot.data().total);
    // setTotal(snapshot.data().total)
    // setTable(true)

  }

  const addPetty = async () => {
    const obj = {date,desc:paidbycombo,cash:0,bank:0,petty:amount, direct:0}
    setUploading(true)
    await addDoc(collection(db, "md-account"), obj)
    if(paidbycombo=="Nitheesh"){
      await addDoc(collection(db, "petty-cash"), {date, name:paidbycombo, added:amount, expense:"", balance:""})
    }
    if(paidbycombo=="Girishlal"){
      await addDoc(collection(db, "petty-cash"), {date, name:paidbycombo, added:amount, expense:"", balance:""})
    }
    if(paidbycombo=="Kumar"){
      await addDoc(collection(db, "petty-cash"), {date, name:paidbycombo, added:amount, expense:"", balance:""})
    }
    setUploading(false)
    setMdPettyDialog(false)
    setTimeout(()=>{
      window.location.reload()
    },100)
  }

  const deleteEntry = async () => {
    setUploading(true)
    await deleteDoc(doc(db, "md-account", id))
    setUploading(false)
    setdeleteDialog(false)
    setTimeout(()=>{
      window.location.reload()
    },100)
  }

  

  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>
          <motion.div initial={{opacity:0, scale:0.99}} whileInView={{opacity:1,scale:1}}>
          <div className="page-content">
            
          <div className="page-canvas">
          {/* {records.map((posts) => (
              <DirItem
                onclick={handleClick}
                key={posts.id}
                to=""
                icon={<File width="1rem" color="salmon" />}
                title={posts.date}
                
              />
            ))} */}
            <h1 style={{fontWeight:600, fontSize:"1.25rem", padding:"0.05rem", background:"var(--clr-opacity)", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem", marginTop:"1.5rem"}}>MD Account</h1>
            

            {
              tableData?
              <table style={{tableLayout:"fixed", width:"100%", textAlign:"center"}} className="">
                <thead>
                  <tr >
                    
                  
                    <th rowSpan={2} style={{border:"1px solid"}}>Date</th>
                    <th rowSpan={2} style={{border:"1px solid"}}>Desc</th>
                    <th colSpan={2} style={{border:"1px solid"}}>Income</th>
                    <th colSpan={2} style={{border:"1px solid"}}>Expenses</th>
                    
            
                    {/* <th>Hours</th> */}
                  </tr>
                  <tr>
                    <th style={{border:"1px solid"}}>Cash</th>
                    <th style={{border:"1px solid"}}>Bank</th>
                    <th style={{border:"1px solid"}}>Petty</th>
                    <th style={{border:"1px solid"}}>Direct</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    records.map((record)=>(
              
                      <tr onClick={()=>{setdeleteDialog(true);setId(record.id)}} key={record.id} >
                       
                        <td >{record.date}</td>
                        <td>{record.desc==""?"--":record.desc}</td>
                        <td>{record.cash==0?"--":record.cash}</td>
                        <td>{record.bank==0?"--":record.bank}</td>
                        <td>{record.petty==0?"--":record.petty}</td>
                        
                        <td>{record.direct==0?"--":record.direct}</td>
                        
                        {/* <td>{record.end==""?"-":String(
                          
                          moment.duration(moment(record.end, "h:mm A").diff(moment(record.start, "h:mm A"))).get("hours")
                          
                      )}
                      </td> */}
                      </tr>
                    ))
                  }
                </tbody>
                
              {/* {
                tableData?
                <tfoot>
                  <tr style={{background:"rgba(100 100 100/ 20%)"}}>
                    <td style={{fontWeight:"bold"}}>Total</td>
                    <td></td>
                    <td></td>
                    {
                      table?
                      <td style={{fontWeight:"bold"}}>{total}</td>
                      :<td><LoadingOutlined/></td>
                    }
                    
                  </tr>
                </tfoot>
                :null
              } */}
                
                
              
                
              </table>
              :null
            }
              
              {records.length<1?
              <div style={{ width:"100%",height:"90%", background:"", display:"flex", justifyContent:"center",alignItems:"center",fontSize:"1rem", position:"absolute"}}>
                {loading?<LoadingOutlined style={{fontSize:"2rem", color:"var(--clr-accent)"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, userSelect:"none" }}><Package width="1.1rem"/> Record Empty</p>}
              
              </div>
              :null
              }
            
          </div>
            
          </div>
          </motion.div>
        </div>
      </div>
      {/* <ConfigProvider theme={{token:{colorPrimary:"blue"}}}>
        <FloatButton className="float" icon={<PlusOutlined/>} shape="square" type="primary" onClick={()=>setDialog(true)}/>
      </ConfigProvider> */}

      {/* <IncomeSheetDialog postable={true} title="Add Income" open={dialog} okText="Confirm" onCancel={()=>setDialog(false)} company={setCompany} payment={setPayment} amount={(e:any)=>setAmount(Number(e.target.value))} onConfirm={addIncome} loading={uploading}/> */}

      <DefaultDialog title="Delete Entry?" open={deleteDialog} okText="Delete" onCancel={()=>setdeleteDialog(false)} onConfirm={deleteEntry} desc={id} loading={uploading}/>
      

      <AddButton onClick={()=>setMdPettyDialog(true)}/>

      <MDPettyDialog title="Add Petty Cash" open={mdpettydialog} okText="Add" onCancel={()=>setMdPettyDialog(false)} amount={(e:any)=>setAmount(Number(e.target.value))} paidbycombo={setPaidbyCombo} onConfirm={addPetty}/>

      {/* <DefaultDialog
        open={dialog}
        title="Summary"
        okText="Done"
        desc={date}
        onCancel={() => setDialog(false)}
      /> */}
      {/* <EditDialog title="Update entry" open={dialog} okText="Update" onChange="" onCancel={()=>setDialog(false)}/> */}
      {/* <ComboDialog loading={loading} combo={<SiteComboBox items placeholder="Select Site" onChange={setSite}/>} title="Update site" inputPlaceholder="Site Name" open={sitedialog} okText="Update" onCancel={()=>setSiteDialog(false)} onConfirm={()=>handleSite(doc_id)}/>

      <ComboDialog loading={loading} combo={<WorkComboBox items placeholder="Select work" onChange={setWork}/>} title="Update work" inputPlaceholder="Select Work" open={workdialog} okText="Update" onCancel={()=>setWorkDialog(false)} onConfirm={()=>handleWork(doc_id)}/>

      <ComboDialog loading={loading} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setStart(time+" "+value);console.log(time+value)}}/>
      </div>} title="Update Start time" open={startdialog} okText="Update" onCancel={()=>setStartDialog(false)} onConfirm={()=>handleStart(doc_id)}/>

      <ComboDialog loading={loading} combo={<div style={{display:"flex", gap:"0.5rem"}}>
        <TimeComboBox placeholder="Select Time" items onChange={setTime}/>
        <AMPMCombo items placeholder="AM/PM" onChange={(value:any)=>{setEnd(time+" "+value);console.log(time+value)}}/>
      </div>} title="Update End time" open={enddialog} okText="Update" onCancel={()=>setEndDialog(false)} onConfirm={()=>handleEnd(doc_id)} /> */}
      
    </>
  );
}
