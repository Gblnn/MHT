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
            onClick={()=>usenavigate(-1)}
            to=""
          >
            <ChevronLeft width="1rem" /> Back

          </Link>
        </>
    )
}