import Back from "@/components/back";
import { motion } from "framer-motion";
import { Package } from "lucide-react";
import DirItem from "../components/dir-item";

export default function InventoryIndex() {

  return (
    <>
    {/* <Link
            style={{
              display: "flex",
              gap:"0.25rem",
              alignItems: "center",
              justifyContent:"center",
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
            to=""
          >
            <LucideHome width="1rem" /> <p style={{paddingTop:"0.2rem"}}>Home</p>

          </Link> */}
    <div className="page">
      <div style={{}}>
        <Back/>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} >
        <div className="page-content" style={{ padding: "1.75rem" }}>


        

          {window.name=="admin"||window.name=="super"?
          <DirItem
          to=""
          icon={<Package width="1.1rem" color="var(--clr-accent)" />}
          title="Product List"
        />
          :null}
          
          {window.name=="admin"?
          <DirItem
            to=""
            icon={<Package width="1.1rem" color="var(--clr-accent)" />}
            title="Product Overview"
            
          />
          :null}

          {/* {window.name=="admin"?
          <DirItem
            to="/admin"
            icon={<LockKeyhole width="1.1rem" color="var(--clr-accent)" />}
            title="Admin Access"
          />
          :null} */}

        

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
    </>
  );
}
