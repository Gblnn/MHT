import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    onclick?:any
}

export default function DirItem(props: Props){
    return(
        <Link onClick={props.onclick} to={props.to} className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {props.icon}
            <p>{props.title}</p>
            <p style={{fontSize:"0.85rem", background:"salmon", color:"black", borderRadius:"1rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontWeight:"500"}}>{props.tag}</p>
                </div>
            
            <ChevronRight width="1rem"/>
        </div>
        </Link>
        
    )
}