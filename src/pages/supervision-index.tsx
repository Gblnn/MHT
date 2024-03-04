import Back from "@/components/back";
import { motion } from "framer-motion";
import { File, User } from "lucide-react";
import DirItem from "../components/dir-item";

export default function SupervisionIndex() {
  return (
    <div className="page">
      <div style={{}}>
        <Back/>
          <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

          <DirItem
            to="/supervision"
            icon={<User width="1.1rem" color="var(--clr-accent)" />}
            title="Employees"
          />

            {/* <DirItem
            to="/records"
            icon={<File width="1.1rem" color="var(--clr-accent)" />}
            title="Records"
            tag="Not Ready"
          /> */}

            <DirItem
            to="/overview"
            icon={<File width="1.1rem" color="var(--clr-accent)" />}
            title="Daily Time Sheet"
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
