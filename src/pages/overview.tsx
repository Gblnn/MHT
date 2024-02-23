import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
            <ChevronLeft width="1rem" /> Back

          </Link>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem", justifyContent:"flex-start" }}>
            
                <table style={{width:"100%", textAlign:"center", tableLayout:"fixed", marginTop:"6rem", fontSize:"0.8rem"}}>
                <tr style={{background:"#3a3a3a"}}>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Site</th>
                </tr>
                {posts.map((post=>(
                    <tr style={{background:"#1a1a1a", overflowY:"scroll", fontSize:"0.8rem", color:"white"}}>
                    <td>{post.date}</td>
                    <td>{post.ename}</td>
                    <td>{post.site}</td>
                </tr>
                )))}
                
                </table>
            
            
            
        </div>
        </motion.div>
      </div>
    </div>
  );
}
