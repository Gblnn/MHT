import Back from "@/components/back";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Overview() {

    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records")
        .then((res) => res.json())
        .then((data) => {
            setPosts(data);
            
        });
    }, [setPosts]);

  return (
    <div className="page">
      <div style={{}}>

      

      <Back to="/supervision-index"/>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem", justifyContent:"flex-start" }}>
            
                <table style={{width:"100%", textAlign:"center", tableLayout:"fixed", marginTop:"6rem", fontSize:"1rem"}}>
                <tr style={{background:"#3a3a3a"}}>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Site</th>
                    <th>Start</th>
                    <th>End</th>
                </tr>
                {posts.map((post=>(
                    <tr key={post.id} style={{ overflowY:"scroll", fontSize:"0.9rem", color:"white"}}>
                    <td>{post.date}</td>
                    <td>{post.ename}</td>
                    <td>{post.site}</td>
                    <td>{post.start}</td>
                    <td>{post.end}</td>
                </tr>
                )))}
                
                </table>
            
            
            
        </div>
        </motion.div>
      </div>
    </div>
  );
}
