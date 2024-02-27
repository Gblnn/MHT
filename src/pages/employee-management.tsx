import Back from "@/components/back";
import DirItem from "@/components/dir-item";
import InputDialog from "@/components/input-dialog";
import { PlusOutlined } from '@ant-design/icons';
import { FloatButton } from "antd";
import { File } from "lucide-react";
import { useEffect, useState } from "react";

export default function EmployeeManagement(){

  const [posts, setPosts] = useState<any>([])

  const [addDialog, setAddDialog] = useState(false)

  const [name, setName] = useState("")
  const status = false

  useEffect(() => {
    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        posts.map((post:any)=>{
          console.log(post)
        })
      });
      
  }, [setPosts])

  const AddEmployee = () => {

    const obj = {name, status}
     fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments",
          {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
          }
          )
    setAddDialog(false)
  }

  return(
    <>
    <div className="page">
      <Back/>
      <div className="page-content">
      <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", justifyContent:"flex-start", marginTop:"4rem", paddingTop:"4rem"}}>
        {
          posts.map((post:any)=>(
            <DirItem to="" icon={<File color="salmon" width="1rem"/>} key={post.id} title={post.name}/>
          ))
        }
      </div>
      </div>
      
    </div>
    <FloatButton onClick={()=>setAddDialog(true)} className="float" icon={<PlusOutlined color="salmon"/>} shape="square"/>
    <InputDialog title="Add Employee" inputPlaceholder="Enter Name" inputOnChange={setName} open={addDialog} okText="Add" onCancel={()=>setAddDialog(false)} onConfirm={AddEmployee}/>
    </>
  )
}