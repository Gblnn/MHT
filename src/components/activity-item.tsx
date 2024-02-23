import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DialogBox from "./dialogbox"
import { format } from "date-fns"

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    status?:boolean
    id:number
}


export default function ActivityItem(props: Props){

    const date = format(new Date(), "dd-MM-yyyy");
    const [ename, setEname] = useState("")
    const [site, setSite] = useState("")

    const [dialog, setDialog] = useState(false)

    

    const handleClick = () => {

        setDialog(true)
        
            fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id)
            .then(res => res.json())
            .then(data => {
                console.log(data.name)
                setEname(data.name)
            })
    
        
      }

      const Assign = () => {
        setDialog(false)
        const obj = {date, ename, site}
        fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records",
                {
                    method:"POST",
                    headers:{'content-type':'application/json'},
                    body:JSON.stringify(obj)
                }
                )
      }

    return(
        <>
        <Link onClick={handleClick} to={props.to} className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {props.icon}
            <p>{props.title}</p>
            {
                props.status?
                <p style={{color:"salmon", fontSize:"1rem"}}>•</p>
                :null
            }
            
            <p style={{fontSize:"0.8rem", background:"salmon", color:"black", borderRadius:"1rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontWeight:"500"}}>{props.tag}</p>
                </div>
            
            <div style={{display:"flex"}}>
            {/* <CheckCircle color="green" width="1rem"/> */}
            <ChevronRight width="1rem"/>
            </div>
            
        </div>
        </Link>
        <DialogBox onChange={setSite} title="Assign work" desc={ename} open={dialog} okText="Assign" onCancel={()=>setDialog(false)} onConfirm={Assign}/>
        </>
        
    )
}