import { Globe, Users } from "lucide-react";
import DirItem from "../components/dir-item";
import Header from "../components/header";


export default function Home(){
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