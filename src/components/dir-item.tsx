import { ChevronRight } from "lucide-react"

interface Props{
    title:string
    icon:any
    classname?:string
}

export default function DirItem(props: Props){
    return(
        <a className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {props.icon}
            <p>{props.title}</p>
                </div>
            
            <ChevronRight width="1rem"/>
        </div>
        </a>
        
    )
}