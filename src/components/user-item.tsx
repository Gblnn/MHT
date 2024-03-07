import { LoadingOutlined } from '@ant-design/icons'
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import DefaultDialog from "./default-dialog"

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    status?:boolean
    id:number
    rid?:string
}

export default function UserItem(props: Props){

    const [ename, setEname] = useState("")
    // const [passport, setPassport] = useState("")
    // const [resident, setResident] = useState("")

    const [uploading, setUploading] = useState(false)
    const [overviewdialog, setOverviewDialog] = useState(false)

    const [loading, setLoading] = useState(false)


    // useEffect(()=>{
    //     console.log(moment(start, "hh:mm A").format("hh:mm A"))
    // },[start])

    



    const getData = async () => {
        setUploading(true)
        await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/users/"+props.id)
        .then((res) => res.json())
        .then((data) => {
            setEname(data.username)
            // setPassport(data.passport_id)
            // setResident(data.resident_id)
      })
        setOverviewDialog(true)
        setUploading(false)
        
    }

    const deleteData = async () => {
        setLoading(true)
        await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/users/"+props.id, {
        method: 'DELETE',
        })
        setLoading(false)
        setOverviewDialog(false)
        window.location.reload()
    }

      


    return(
        <>
        <Link onClick={getData} to={props.to} className={props.classname}>
            <div className="dir-item fixed-length">
                <div style={{display:"flex", alignItems:'center', gap:"0.75rem"}}>
                {uploading?<LoadingOutlined width="1.5rem"/>:props.icon}
            <p style={{fontSize:"1.1rem"}}>{props.title}</p>
            {
                props.status?
                <p style={{color:"lime", fontSize:"1rem", fontWeight:"bolder"}}>•</p>
                :null
            }
            
            <p style={{fontSize:"0.8rem", background:"var(--clr-accent)", color:"white", borderRadius:"1rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontWeight:"500"}}>{props.tag}</p>
                </div>
            
            <div style={{display:"flex"}}>
            <ChevronRight width="1rem"/>
            </div>
            
        </div>
        </Link>

        <DefaultDialog title={ename} open={overviewdialog} okText="Delete User" onCancel={()=>setOverviewDialog(false)} onConfirm={deleteData} loading={loading}/>
        
        </>
        
    )
}