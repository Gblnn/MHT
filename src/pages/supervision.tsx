import ActivityItem from "@/components/activity-item";
import Back from "@/components/back";
import { User } from "lucide-react";
import { useEffect, useState } from "react";
import {LoadingOutlined} from '@ant-design/icons'

export default function Supervision() {
  
  // const date = format(new Date(), "dd-MM-yyyy");
  // const [site, setSite] = useState("")

  

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        posts.map((post)=>{
          console.log(post)
        })
      });
      
  }, [setPosts]);

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

  
  return (
    <>
      <div className="page">
        <div style={{}}>
          <Back/>

          <div className="page-content" style={{}}>
          
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", justifyContent:"flex-start", marginTop:"4rem", paddingTop:"4rem"}}>
            {
              
            posts.map((posts) => (
              <ActivityItem
              rid={posts.id}
                id={posts.id}
                key={posts.id}
                to=""
                icon={<User width="1.1rem" color="salmon" />}
                title={posts.name}
                status={posts.status}
              />
              
            ))
            
          }
          <LoadingOutlined style={{scale:"1.75", color:"salmon", marginTop:"1.5rem"}} width="2rem" color="salmon"/>
            
            </div>
            
        
            
            
          </div>
        </div>
      </div>
      
    </>
  );
}