import { db } from "@/firebase"
import { message } from "antd"
import { format } from "date-fns"
import { addDoc, collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore"
import { ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import DialogBox from "./dialogbox"
import EndWorkDialog from "./endwork-dialog"
import {LoadingOutlined} from '@ant-design/icons'
import moment from 'moment'

interface Props{
    title:string
    tag?:string
    icon:any
    classname?:string
    to:string
    status?:boolean
    id:number
    rid:string
}

export default function ActivityItem(props: Props){

    const date = format(new Date(), "dd-MM-yyyy");
    const rid = props.id
    const [ename, setEname] = useState("")
    const [site, setSite] = useState("")
    const [start, setStart] = useState<any>()
    const [end, setEnd] = useState("")
    const [siteinfo, setSiteinfo] = useState("")
    const [startinfo, setStartinfo] = useState("")
    const [work, setWork] = useState("")
    const [dialog, setDialog] = useState(false)
    const [summarydialog, setSummaryDialog] = useState(false)
    let docref = ""
    let doc_id = ""
    const [postable, setPostable] = useState(false)
    const [endable, setEndable] = useState(false)
    const [uploading, setUploading] = useState(false)
    const [time, setTime] = useState("")

    // useEffect(()=>{
    //     console.log(moment(start, "hh:mm A").format("hh:mm A"))
    // },[start])

    useEffect(()=>{
        if(site==""||work==""||start==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
        
    },[site, work, start])

    useEffect(()=>{
        if(end==""){
            setEndable(false)
        }   
        else{
            setEndable(true)
        }
    },[end])


    const getData = async () => {
        const RecordRef = collection(db, "records")
        const q = query(RecordRef, where("rid", "==", rid), where("status", "==", true))
        const records = await getDocs(q)
        records.forEach((doc)=>{
        console.log(doc.data().site)
        console.log(doc.data().start)
        setSiteinfo(doc.data().site)
        setStartinfo(doc.data().start)
        docref = doc.id
        console.log(docref)
        })
        setSummaryDialog(true)
        setUploading(false)
        
    }
    

    const handleClick = async () => {
            setUploading(true)
            await fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/"+props.id)
            .then(res => res.json())
            .then(data => {
                setEname(data.name)
                if(data.status==false){
                    setDialog(true)
                    console.log(moment())
                    setUploading(false)
                }
                else{
                    
                    getData()
                    
                    // fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records?rid="+rid)
                    // .then(res => res.json())
                    // .then(data => {
                    //     data.map((data:any)=>{
                    //         setSiteinfo(data.site)
                    //         console.log(data.rid)
                    //     })  
                    // })
                    
                    
                }
            }) 
      }

      const Assign = async () => {
        setDialog(false)
        setUploading(true)
        const obj = {rid, date, ename, site, work, start, end, status:true}

        await addDoc(collection(db, "records"), obj)
           
        // fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records",
        //     {
        //         method:"POST",
        //         headers:{'content-type':'application/json'},
        //         body:JSON.stringify(obj)
        //     }
        // )

        await fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:true})
            })

        message.success("Added Successfully")
        setUploading(false)
        setTimeout(()=>{
            window.location.reload()
        },500)
      }

      const endWork = async () => {
        setSummaryDialog(false)
        setUploading(true)

        const RecordReference = collection(db, "records")
        const q = query(RecordReference, where("status", "==", true), where("rid", "==", rid))
        const records = await getDocs(q)
        records.forEach((doc)=>{
            console.log(doc.id)
            doc_id = doc.id
        })
        
        try {
            await updateDoc(doc(db, "records", doc_id),{end:end,status:false})
            

            await fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/employees/'+props.id, {
            method: 'PUT',
            headers: {'content-type':'application/json'},
            body: JSON.stringify({status:false})
            
            })
            message.success("Records Updated")
            setTimeout(()=>{
            window.location.reload()
            },1000)

        } catch (error) {
            message.error("Updation failed")
            console.log(error)
        }
        
        
        

        //     fetch('https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records/'+refid, {
        //         method: 'PUT',
        //         headers: {'content-type':'application/json'},
        //         body: JSON.stringify({end:end})
                
        //         })
        //         console.log(end)

            
            
            // setTimeout(()=>{
            // window.location.reload()
            // },500)

            setUploading(false)
      }

    return(
        <>
        <Link onClick={handleClick} to={props.to} className={props.classname}>
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
        <DialogBox postable={postable} ampm={(value:any)=>{setStart(time+" "+value);console.log(time+value)}} time={setTime} onChange={setSite} work={setWork} title="Assign work" desc={ename} open={dialog} okText="Assign" onCancel={()=>setDialog(false)} onConfirm={Assign}/>

        <EndWorkDialog postable={endable} ampm={(value:any)=>{setEnd(time+" "+value);console.log(time+" "+value)}} time={setTime} title="End Work" open={summarydialog} okText="End Work" onCancel={()=>setSummaryDialog(false)} onConfirm={endWork} desc={ename} desc2={"on Site : "+siteinfo} desc3={"Started : "+startinfo}/>
        </>
        
    )
}