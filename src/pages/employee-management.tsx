import ThreeInputDialog from "@/components/3input-dialog";
import Back from "@/components/back";
import DBItem from "@/components/db-item";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { FloatButton, message } from "antd";
import { File } from "lucide-react";
import { useEffect, useState } from "react";

export default function EmployeeManagement(){

  const [posts, setPosts] = useState<any>([])

  const [addDialog, setAddDialog] = useState(false)

  const [name, setName] = useState("")
  const [passport, setPassport] = useState("")
  const [resident, setResident] = useState("")
  const status = false

  const [loading,  setLoading] = useState(false)
  const [pageload,  setPageLoad] = useState(false)
  const [postable, setPostable] = useState(false)

  useEffect(() => {
      getData()
  },[])

  useEffect(() => {
    if(name==""){
      setPostable(false)
    }
    else{
      setPostable(true)
    }
},[name])

  const getData = async () => {
    setPageLoad(true)
    await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      })
      setPageLoad(false)
  }

  const AddEmployee = async () => {
    setLoading(true)
    const obj = {name:name, passport:passport, resident:resident, status}
    await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees",
          {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
          }
          )
    setLoading(false)
    setAddDialog(false)
    message.success("Added to Database")
    setTimeout(()=>{
      window.location.reload()
    },1000)
    
  }

  return(
    <>
    <div className="page">
    
      <Back/>
      
      
      <div className="page-content">
      <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", justifyContent:"flex-start", marginTop:"4rem", paddingTop:"4rem"}}>
        
        {
          posts.map((post:any)=>(
            <DBItem id={post.id} to="" icon={<File color="var(--clr-accent)" width="1rem"/>} key={post.id} title={post.name}/>
          ))
        }
        {pageload?<LoadingOutlined style={{scale:"1.75", color:"var(--clr-accent)", marginTop:"1.5rem"}} width="2rem" color="var(--clr-accent)"/>:null}
      </div>
      </div>
      
    </div>
    <FloatButton onClick={()=>setAddDialog(true)} className="float" icon={<PlusOutlined style={{color:"crimson"}}/>} shape="square"/>

    <ThreeInputDialog title="Add Employee" inputPlaceholder="Enter Full Name" inputOnChange={(e:any)=>setName(e.target.value)} input2Placeholder="Enter Passport (Optional)" input2OnChange={(e:any)=>setPassport(e.target.value)} input3Placeholder="Enter Resident (Optional)" input3OnChange={(e:any)=>setResident(e.target.value)} open={addDialog} okText="Add" onCancel={()=>setAddDialog(false)} onConfirm={postable?AddEmployee:null} loading={loading} confirmClass={postable?"red":"disabled"}/>

    
    </>
  )
}