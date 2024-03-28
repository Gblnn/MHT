import { PenLine } from "lucide-react";
import { Link } from "react-router-dom";

interface Props{
    onClick?:any
    classname?:any
    editable:boolean
}

export default function EditMode(props:Props) {


  
    return(
        <>
        <Link
            style={{
              display: "flex",
              right:0,
              alignItems: "center",
              fontWeight: 500,
              paddingLeft: "0.75rem",
              paddingRight:"0.75rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
              marginRight:"1rem",
              gap:"0.25rem",
              borderRadius:"0.5rem",
              userSelect:"none",
              zIndex:5,
          
            }}
            className={props.editable?"red":"opacity"}
            
            onClick={props.onClick}
            to=""
          >
            <PenLine width="0.75rem"/>
            Edit
            

          </Link>
        </>
    )
}