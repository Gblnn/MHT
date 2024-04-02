import { LoadingOutlined } from '@ant-design/icons'
import { ChevronRight, CircleUser } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"
import ConfirmDialog from './confirm-dialog'
import DeleteUpdateDialog from './delete-update-dialog'

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    status?:boolean
    id:number
    rid?:string
    onUpdate:any
}

export default function DBItem(props: Props){

    const [ename, setEname] = useState("")
    const [passport, setPassport] = useState("")
    const [resident, setResident] = useState("")

    const [uploading, setUploading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [overviewdialog, setOverviewDialog] = useState(false)

    const [confirmDialog, setConfirmDialog] = useState(false)


    // useEffect(()=>{
    //     console.log(moment(start, "hh:mm A").format("hh:mm A"))
    // },[start])

    



    const getData = async () => {
        setUploading(true)
        await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id)
        .then((res) => res.json())
        .then((data) => {
            setEname(data.name)
            setPassport(data.passport)
            setResident(data.resident)
      })
        setOverviewDialog(true)
        setUploading(false)
        
    }

    const deleteData = async () => {
        setDeleting(true)
        await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id, {
        method: 'DELETE',
        })
        setDeleting(false)
        setOverviewDialog(false)
        setConfirmDialog(false)
        props.onUpdate()
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
            
            <p style={{fontSize:"0.8rem", background:"salmon", color:"black", borderRadius:"1rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", fontWeight:"500"}}>{props.tag}</p>
                </div>
            
            <div style={{display:"flex"}}>
            <ChevronRight width="1rem"/>
            </div>
            
        </div>
        </Link>

        <DeleteUpdateDialog title={ename} open={overviewdialog} desc={passport} desc2={resident} okText="Delete Record" onCancel={()=>setOverviewDialog(false)} onConfirm={()=>{setConfirmDialog(true);setOverviewDialog(false)}} loading={deleting} updateBtnText='Update Details' titleicon={<CircleUser/>}/>

        <ConfirmDialog title='Confirm Delete?' desc='This record will be permanently deleted from the servers' open={confirmDialog} okText='Confirm' onConfirm={deleteData} onCancel={()=>setConfirmDialog(false)} loading={deleting}/>
        
        </>
        
    )
}