import { PlusSquare } from "lucide-react";
import { Link } from "react-router-dom";

interface Props{
    onClick:any
    classname:any
}

export default function Select(props:Props) {


  
    return(
        <>
        <Link
            style={{
              display: "flex",
              right:0,
              alignItems: "center",
              backdropFilter:"blur(15px)",
              fontWeight: 500,
              paddingLeft: "0.75rem",
              paddingRight:"0.75rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
              marginRight:"1.75rem",
              gap:"0.25rem",
              borderRadius:"0.5rem",
              boxShadow:"1px 1px 20px rgba(0 0 0/ 25%)",
              zIndex:5,
              
            }}
            className={props.classname}
            
            onClick={props.onClick}
            to=""
          >
            <PlusSquare width="1rem"/>
            Select

          </Link>
        </>
    )
}