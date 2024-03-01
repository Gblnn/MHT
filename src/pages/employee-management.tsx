import Back from "@/components/back";
import DBItem from "@/components/db-item";
import InputDialog from "@/components/input-dialog";
import { PlusOutlined } from '@ant-design/icons';
import { FloatButton, message } from "antd";
import { File } from "lucide-react";
import { useEffect, useState } from "react";

export default function EmployeeManagement(){

  const [posts, setPosts] = useState<any>([])

  const [addDialog, setAddDialog] = useState(false)

  const [name, setName] = useState("")
  const status = false

  const [loading,  setLoading] = useState(false)

  useEffect(() => {
    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        // posts.map((post:any)=>{
        //   console.log(post)

        // })
      })
      
  }, [setPosts])

  const AddEmployee = async () => {
    setLoading(true)
    const obj = {name:name, status}
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
      </div>
      </div>
      
    </div>
    <FloatButton onClick={()=>setAddDialog(true)} className="float" icon={<PlusOutlined style={{color:"crimson"}}/>} shape="square"/>
    <InputDialog title="Add Employee" inputPlaceholder="Enter Name" inputOnChange={(e:any)=>setName(e.target.value)} open={addDialog} okText="Add" onCancel={()=>setAddDialog(false)} onConfirm={AddEmployee} loading={loading}/>

    
    </>
  )
}