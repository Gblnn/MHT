import { motion } from "framer-motion";
import { Book, Package2, Sparkles, Users } from "lucide-react";
import DirItem from "../components/dir-item";

export default function Index() {

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
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} >
        <div className="page-content" style={{ padding: "1.75rem" }}>


        

          {window.name=="admin"||window.name=="super"?
          <DirItem
          to="/supervision-index"
          icon={<Users width="1.1rem" color="var(--clr-accent)" />}
          title="Employee Supervision"
        />
          :null}
          
          {window.name=="admin"?
          <DirItem
            to="/inventory-index"
            icon={<Package2 width="1.1rem" color="var(--clr-accent)" />}
            title="Inventory"
            
          />
          :null}

          

          {window.name=="admin"?
          <DirItem
            to="/accounting"
            icon={<Book width="1.1rem" color="var(--clr-accent)" />}
            title="Accounting"
            
          />
          :null}
          
          {window.name=="admin"?
          <DirItem
            to="/admin"
            icon={<Sparkles width="1.1rem" color="var(--clr-accent)" />}
            title="Admin Access"
          />
          :null}

        

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
