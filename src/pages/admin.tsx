import Back from "@/components/back";
import { motion } from "framer-motion";
import { BaggageClaim, Factory, File, UserCheck, Users } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DirItem from "../components/dir-item";

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
        <Back/>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

        <DirItem
            to="/admin-records"
            icon={<File width="1.1rem" color="var(--clr-accent)" />}
            title="Detailed Time Sheet"
          />

          <DirItem
            to="/employee-management"
            icon={<Users width="1.1rem" color="var(--clr-accent)" />}
            title="Manage Employees"
          />

          <DirItem
            to="/user-management"
            icon={<UserCheck width="1.1rem" color="var(--clr-accent)" />}
            title="Manage Users"
          />

            

            <DirItem
            to="/site-management"
            icon={<Factory width="1.1rem" color="var(--clr-accent)" />}
            title="Manage Sites"
          />

          <DirItem
            to="/site-management"
            icon={<BaggageClaim width="1.1rem" color="var(--clr-accent)" />}
            title="Manage Works"
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
