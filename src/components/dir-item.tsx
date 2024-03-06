import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    onclick?:any
    status?:boolean
}

export default function DirItem(props: Props){
    return(
        <Link onClick={props.onclick} to={props.to} className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {props.icon}
            <p style={{fontSize:"1.1rem"}}>{props.title}</p>
            {
                props.status?
                <p style={{color:"salmon", fontSize:"1rem"}}>•</p>
                :null
            }
            
            <p style={{fontSize:"0.85rem", background:"var(--clr-accent)", color:"white ", borderRadius:"1rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontWeight:"500"}}>{props.tag}</p>
                </div>
            
            <div style={{display:"flex"}}>
            {/* <CheckCircle color="green" width="1rem"/> */}
            <ChevronRight width="1rem"/>
            </div>
            
        </div>
        </Link>
        
    )
}