import Back from "@/components/back";
import { motion } from "framer-motion";
import { File } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DirItem from "../components/dir-item";

export default function AccountingIndex() {

    const usenavigate = useNavigate()

    useEffect(()=>{
        if(window.name!="admin"){
            usenavigate("/login")
        }
    },[])
  return (
    <div className="page">
      <div style={{}}>
        <Back/>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

        <DirItem
            to="/income-sheet"
            icon={<File width="1.1rem" color="var(--clr-accent)" />}
            title="Income Sheet"
          />

          {/* <DirItem
            to="/employee-management"
            icon={<Users width="1.1rem" color="var(--clr-accent)" />}
            title="Manage Employees"
          /> */}


            

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
