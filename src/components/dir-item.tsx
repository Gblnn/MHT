import { ChevronRight } from "lucide-react"

interface Props{
    title:string
    icon:any
}

export default function DirItem(props: Props){
    return(
        <a href="#es">
            <div className="dir-item">
            {props.icon}
            <p>{props.title}</p>
            <ChevronRight width="1rem"/>
        </div>
        </a>
        
    )
}