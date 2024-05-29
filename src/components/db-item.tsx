import { LoadingOutlined } from '@ant-design/icons'
import { ChevronRight, CircleUser } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ConfirmDialog from './confirm-dialog'
import DeleteUpdateDialog from './delete-update-dialog'
import SingleInputDialog from './single-input-dialog'
import InputDialog from './input-dialog'

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    status?:boolean
    id?:number
    rid?:string
    onUpdate:any
}

export default function DBItem(props: Props){

    const [ename, setEname] = useState("")
    const [passport, setPassport] = useState("")
    const [resident, setResident] = useState("")

    const [uploading, setUploading] = useState(false)
    const [deleting, setDeleting] = useState(false)
    const [loading, setLoading] = useState(false)
    const [overviewdialog, setOverviewDialog] = useState(false)
    const [renamedialog, setRenameDialog] = useState(false)
    const [updateIdDialog, setUpdateIdDialog] = useState(false)
    const [confirmDialog, setConfirmDialog] = useState(false)
    const [postable, setPostable] = useState(false)
    const [renamed, setRenamed] = useState("")


    // useEffect(()=>{
    //     console.log(moment(start, "hh:mm A").format("hh:mm A"))
    // },[start])

    useEffect(()=>{
        if(renamed==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
    },[renamed])



    const getData = async () => {
        setUploading(true)
    //     await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id)
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setEname(data.name)
    //         setPassport(data.passport)
    //         setResident(data.resident)
    //   })
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

    const updateData = async () => {
        setLoading(true)
        await fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({name:renamed})
            })
        setLoading(false)
        setRenameDialog(false)
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

        <DeleteUpdateDialog title={ename} open={overviewdialog} desc={passport} desc2={resident} okText="Delete" onCancel={()=>setOverviewDialog(false)} onConfirm={()=>{setConfirmDialog(true);setOverviewDialog(false)}} loading={deleting} updateBtnText='Rename' titleicon={<CircleUser/>} updateBtnConfirm={()=>{setOverviewDialog(false);setRenameDialog(true)}} updateIdText='Update IDs' updateIdConfirm={()=>{setUpdateIdDialog(true);setOverviewDialog(false)}} />

        <InputDialog open={updateIdDialog} desc='Fields left empty will retain previous values' okText='Update' title='Update IDs' inputPlaceholder='Update Passport' input2Placeholder='Update Resident ID' onCancel={()=>{setUpdateIdDialog(false)}}/>

        <SingleInputDialog title='Rename Entry' open={renamedialog} okText='Update' onCancel={()=>{setRenameDialog(false); setOverviewDialog(true)}} postable={postable} inputOnChange={(e:any)=>setRenamed(e.target.value)} onConfirm={updateData} loading={loading} inputPlaceholder={ename}/>

        <ConfirmDialog title='Confirm Delete?' desc='This record will be permanently deleted from the servers' open={confirmDialog} okText='Confirm' onConfirm={deleteData} onCancel={()=>setConfirmDialog(false)} loading={deleting}/>
        
        </>
        
    )
}