import ActivityItem from "@/components/activity-item";
import Back from "@/components/back";
import Select from "@/components/select";
import { LoadingOutlined } from '@ant-design/icons';
import { ConfigProvider, FloatButton } from "antd";
import { motion } from 'framer-motion';
import { Eye, User } from "lucide-react";
import { useEffect, useState } from "react";
import {PlusOutlined} from '@ant-design/icons'
import DefaultDialog from "@/components/default-dialog";

export default function Supervision() {
  
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false)
  const [selectable, setSelectable] = useState(false)

  const [groupaddDialog, setGroupaddDialog] = useState(false)

  const eref:any = []

  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    setLoading(true)
    await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        posts.map((post)=>{
          console.log(post)
        })
      });
      setLoading(false)

  }

  // const onPost = () => {
  //   setDialog(false)
  //   const obj = {name, date, site}
  //   fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments",
  //         {
  //               method:"POST",
  //               headers:{'content-type':'application/json'},
  //               body:JSON.stringify(obj)
  //         }
  //         )
  // }

  const handleToggle = () => {
    if(!selectable){
      setSelectable(true)
    }
    else{
      setSelectable(false)
    }
  }

  
  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>
          <Select onClick={handleToggle} classname={selectable?"red":"opacity"}/>
          <motion.div initial={{opacity:0, scale:0.99}} whileInView={{opacity:1,scale:1}}>
          <div className="page-content" style={{}}>
          
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", justifyContent:"flex-start", marginTop:"4rem", paddingTop:"4rem"}}>
          
            {
              
            posts.map((posts) => (
              <ActivityItem
              rid={posts.id}
                id={posts.id}
                key={posts.id}
                to=""
                icon={posts.clearance=="supervisor"?<Eye width="1rem" color="var(--clr-accent)"/>:<User width="1rem" color="var(--clr-accent)" />}
                title={posts.name}
                status={posts.status}
                selectable={selectable}
                tag={posts.clearance=="supervisor"?"Supervisor":""}
              />
              
            ))
            
          }
          
          {loading?<LoadingOutlined style={{scale:"2", color:"var(--clr-accent)"}} width="2rem" color="var(--clr-accent)"/>:null}
          
            
            </div>
            
        
            
            
          </div>
          </motion.div>
        </div>
        
      </div>
      {
      selectable?
      <ConfigProvider theme={{token:{colorPrimary:"blue"}}}>
        <FloatButton onClick={()=>setGroupaddDialog(true)} className="float" icon={<PlusOutlined/>} shape="square" type="primary" style={{}}/>
      </ConfigProvider>
      
      :null
    }
      
      <DefaultDialog title="Group Assign" open={groupaddDialog} okText="Assign" onCancel={()=>setGroupaddDialog(false)} desc={String(eref)}/>
      
    </>
  );
}