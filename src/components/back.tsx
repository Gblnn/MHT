import { ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

// interface Props{
//     to:string
// }

export default function Back() {
  const usenavigate = useNavigate()
    return(
        <>
        <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "var(--clr-accent)",
              backdropFilter:"blur(16px)",
              fontWeight: 500,
              paddingLeft: "0.5rem",
              paddingRight:"0.5rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
              userSelect:"none",
              borderRadius:"0.5rem",
              boxShadow:"1px 1px 10px rgba(100 100 100/ 75%)",
              zIndex:5
            }}
            className="opacity"
            onClick={()=>usenavigate(-1)}
            to=""
          >
            <ChevronLeft width="1rem" /> Back

          </Link>

          
        
        
        </>
    )
}