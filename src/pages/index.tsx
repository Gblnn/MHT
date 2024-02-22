import { Globe, Users } from "lucide-react";
import DirItem from "../components/dir-item";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <div className="page">
      <div style={{}}>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

          <DirItem
            to="/supervision-index"
            icon={<Users width="1rem" color="salmon" />}
            title="Employee Supervision"
          />

          <DirItem
            to=""
            classname="disabled"
            icon={<Globe width="1rem" color="#6a6a6a" />}
            title="Unavailable"
          />
        </div>
        </motion.div>
      </div>
    </div>
  );
}
