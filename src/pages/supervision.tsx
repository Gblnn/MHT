import ActivityItem from "@/components/activity-item";
import { ChevronLeft, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "crimson",
              fontWeight: 500,
              paddingLeft: "0.5rem",
              paddingRight:"0.5rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
              background:"#1a1a1a",
              borderRadius:"0.5rem",
              boxShadow:"1px 1px 20px rgba(0 0 0/ 70%)"
            }}
            to="/supervision-index"
          >
            <ChevronLeft width="1rem" /> <p>Back</p>

          </Link>

          <div className="page-content" style={{}}>
          
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center", paddingTop:"14rem",paddingBottom:"4rem", justifyContent:"center"}}>
            {posts.map((posts) => (
              <ActivityItem
                id={posts.id}
                key={posts.id}
                to=""
                icon={<User width="1rem" color="salmon" />}
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