import Back from "@/components/back";
import { ConfigProvider, FloatButton } from "antd";
import {PlusOutlined, LoadingOutlined} from '@ant-design/icons'
import { useEffect, useState } from "react";
import UserItem from "@/components/user-item";
import { File, Package } from "lucide-react";

export default function SiteManagement(){
    const [sites, setSites] = useState<any>([])
    const [pageload, setPageLoad] = useState(false)
    let count = 0

    useEffect(()=>{
        fetchData
    },[])

    const fetchData = async () => {
        setPageLoad
        setSites
    }
    return(
        <>
        <div className="page">
            <Back/>
            <div className="page-content">
      <div className={count>8?"snap-top":"snap-center"} style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column", overflowY:"scroll", gap:"1rem", alignItems:"center",paddingBottom:"4rem", marginTop:"4rem"}}>
        {
          sites.map((post:any)=>(
            <UserItem id={post.id} to="" icon={<File color="var(--clr-accent)" width="1rem"/>} key={post.id} title={post.username} tag={post.access=="admin"?"admin":""||post.access=="supervisor"?"supervisor":""} password={post.password}/>
          ))
        }
        {sites.length<1?
              <div style={{ width:"100%",height:"90%", background:"", display:"flex", justifyContent:"center",alignItems:"center",fontSize:"1rem", position:"absolute"}}>
                {pageload?<LoadingOutlined style={{fontSize:"2rem", color:"var(--clr-accent)"}}/>
                :<p style={{background:"var(--clr-opacity)", padding:"0.5rem", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem",display:"flex", gap:"0.4rem", alignItems:"center", opacity:0.75, userSelect:"none" }}><Package width="1.1rem"/> Record Empty</p>}
              
              </div>
              :null
              }
      </div>
      </div>
        </div>
        <ConfigProvider theme={{token:{colorPrimary:"blue"}}}>
        <FloatButton className="float" icon={<PlusOutlined/>} shape="square" type="primary" style={{}}/>
      </ConfigProvider>
        </>
    )
}