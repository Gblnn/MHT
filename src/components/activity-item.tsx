import { message } from "antd"
import { format } from "date-fns"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DialogBox from "./dialogbox"
import EndWorkDialog from "./endwork-dialog"

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
    const [start, setStart] = useState("")
    const [end, setEnd] = useState("")
    const [siteinfo, setSiteinfo] = useState("")
    

    const [dialog, setDialog] = useState(false)
    const [summarydialog, setSummaryDialog] = useState(false)


    const handleClick = () => {

        // setDialog(true)
        
            fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id)
            .then(res => res.json())
            .then(data => {
                console.log(data.name)
                setEname(data.name)
                if(data.status==false){
                    setDialog(true)
                }
                else{
                    setSummaryDialog(true)
                    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records/"+props.id)
                    .then(res => res.json())
                    .then(data => {
                        setSiteinfo(data.site)
                        console.log(data.site)
                    })
                }
            }) 
      }

      const Assign = () => {
        setDialog(false)
        const obj = {date, ename, site, start, end}
        fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records",
            {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
            }
        )

        fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:true})
            })

        message.loading("Updating")
        setTimeout(()=>{
            window.location.reload()
        },2000)
      }

      const endWork = () => {
        setSummaryDialog(false)
        fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:false})
            })

            fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records/', {
                method: 'PUT',
                headers: {'content-type':'application/json'},
                body: JSON.stringify({end:end})
                })

            message.loading("Updating")
        setTimeout(()=>{
            window.location.reload()
        },2000)
      }

    return(
        <>
        <Link onClick={handleClick} to={props.to} className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {props.icon}
            <p style={{fontSize:"1.1rem"}}>{props.title}</p>
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
        <DialogBox time={setStart} onChange={setSite} title="Assign work" desc={ename} open={dialog} okText="Assign" onCancel={()=>setDialog(false)} onConfirm={Assign}/>

        <EndWorkDialog time={setEnd} title="End Work" open={summarydialog} okText="End Work" onCancel={()=>setSummaryDialog(false)} onConfirm={endWork} desc={ename} desc2={"on Site : "+siteinfo}/>
        </>
        
    )
}