import ActivityItem from "@/components/activity-item";
import Back from "@/components/back";
import { User } from "lucide-react";
import { useEffect, useState } from "react";

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
          <Back to="/supervision-index"/>

          <div className="page-content" style={{}}>
          
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center", paddingTop:"14rem",paddingBottom:"4rem", justifyContent:"center"}}>
            {posts.map((posts) => (
              <ActivityItem
                id={posts.id}
                key={posts.id}
                to=""
                icon={<User width="1.1rem" color="salmon" />}
                title={posts.name}
                status={posts.status}
              />
              
            ))}
            
            
            </div>
            
        
            
            
          </div>
        </div>
      </div>
      
    </>
  );
}