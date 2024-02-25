import Back from "@/components/back";
import DirItem from "@/components/dir-item";
import InputDialog from "@/components/input-dialog";
import { FloatButton } from "antd";
import { File } from "lucide-react";
import { useEffect, useState } from "react";


export default function EmployeeManagement() {

  const [dialog, setDialog] = useState(false);

  const [name, setName] = useState("")
  const status = false

  const [records, setRecords] = useState<any[]>([])

    useEffect(() =>{
        const getData = async () => {
            await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
            .then((res) => res.json())
            .then((data) => {
                setRecords(data)
            })
        }
        getData()
    },[])



  const addEmployee = () => {
    setDialog(false)

    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees",
    {
        method:"POST",
        headers:{'content-type':'application/json'},
        body:JSON.stringify({name:name, status:status})
    }
    )   
  }


  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"auto", gap:"1rem", alignItems:"center", justifyContent:"flex-start", marginTop:"4rem", padding:"1.5rem", paddingTop:"4rem"}}>
          {
            records.map((record)=>(
                <DirItem key={record.id} to="" icon={<File color="salmon" width="1.1rem"/>} title={record.name}/>
            ))
          
            }
              
            
          </div>
            
          </div>
        </div>
      </div>
      <FloatButton shape="square" onClick={()=>setDialog(true)} style={{}}/>
      <InputDialog title="Add Employee" open={dialog} okText="Add" onCancel={()=>setDialog(false)} inputPlaceholder="Name" inputOnChange={setName} onConfirm={addEmployee}/>
      
    </>
  );
}
