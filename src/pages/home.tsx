import { Globe, Users } from "lucide-react";
import DirItem from "../components/dir-item";
import Header from "../components/header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Home(){
    const usenavigate = useNavigate()

  useEffect(()=>{
    if(window.name == ""){
      usenavigate("/login")
    }
  },[window.name])
    return(
        <>
        <Header/>
    
        <div className="page">
            <div style={{paddingTop:"4rem"}}>
                <div className="page-content" style={{padding:"1.75rem"}}>
                    <DirItem icon={<Users width="1rem" color="salmon"/>} title="Employee Supervision"/>
                    <DirItem classname="disabled" icon={<Globe width="1rem" color="#6a6a6a"/>} title="Unavailable"/>
                </div>
            
            </div>
            
        </div>
        
        </>
    )
}