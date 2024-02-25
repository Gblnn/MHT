import Back from "@/components/back";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import DirItem from "../components/dir-item";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    
    const usenavigate = useNavigate()

    useEffect(()=>{
        if(window.name!="admin"){
            usenavigate("/login")
        }
    },[])
  return (
    <div className="page">
      <div style={{}}>
        <Back to="/index"/>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

          <DirItem
            to="/supervision"
            icon={<User width="1.1rem" color="salmon" />}
            title="Add Employees"
          />

            

          {/* <DirItem
            to=""
            classname="disabled"
            icon={<Globe width="1rem" color="#6a6a6a" />}
            title="Unavailable"
          /> */}
        </div>
        </motion.div>
      </div>
    </div>
  );
}
