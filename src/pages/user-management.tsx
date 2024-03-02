import Back from "@/components/back";
import InputDialog from "@/components/input-dialog";
import UserItem from "@/components/user-item";
import { PlusOutlined } from '@ant-design/icons';
import { FloatButton, message } from "antd";
import { File } from "lucide-react";
import { useEffect, useState } from "react";

export default function UserManagement(){

  const [posts, setPosts] = useState<any>([])

  const [addDialog, setAddDialog] = useState(false)

  const [name, setName] = useState("")
  const status = false
  let count = 0

  const [loading,  setLoading] = useState(false)

  useEffect(() => {
    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        console.log(data.length)
        count = data.length
      })
      
  }, [setPosts])

  const AddEmployee = async () => {
    setLoading(true)
    const obj = {username:name, status}
    await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/users",
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
      <div className={count>8?"snap-top":"snap-center"} style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", marginTop:"4rem"}}>
        {
          posts.map((post:any)=>(
            <UserItem id={post.id} to="" icon={<File color="var(--clr-accent)" width="1rem"/>} key={post.id} title={post.username}/>
          ))
        }
      </div>
      </div>
      
    </div>
    <FloatButton onClick={()=>setAddDialog(true)} className="float" icon={<PlusOutlined style={{color:"crimson"}}/>} shape="square"/>
    <InputDialog title="Add User" inputPlaceholder="Enter Name" inputOnChange={(e:any)=>setName(e.target.value)} open={addDialog} okText="Add" onCancel={()=>setAddDialog(false)} onConfirm={AddEmployee} loading={loading}/>

    
    </>
  )
}