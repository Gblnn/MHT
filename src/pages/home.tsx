import { Users } from "lucide-react";
import DirItem from "../components/dir-item";
import Header from "../components/header";


export default function Home(){
    return(
        <>
        <Header/>
    
        <div className="page">
            <div style={{paddingTop:"4rem"}}>
                <div style={{padding:"1.5rem"}}>
                <DirItem icon={<Users width="1rem" color="salmon"/>} title="Employee Supervision"/>
                </div>
            
            </div>
            
        </div>
        
        </>
    )
}