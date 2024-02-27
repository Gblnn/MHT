import { Globe2 } from "lucide-react"
import UserButton from "./user-button"


export default function Header(){

    
    return(
        <div className="header" style={{boxShadow:"1px 1px 20px rgba(0 0 0/ 70%)"}}>
            <div className="header-title" style={{paddingRight:"1.5rem", paddingLeft:"1.5rem", display:"flex", alignItems:"center", gap:"0.25rem"}}>
                <Globe2/>
                <h1 style={{fontSize:"1.75rem", fontWeight:800}}>MHT</h1>
            </div>

            {/* <div style={{paddingLeft:"1.5rem", paddingRight:"1.5rem"}}>
                <a>
                    <button className="white">LOGIN <LogIn width="1rem"/></button>
                </a>
            </div> */}

            <UserButton/>
            
            
            
            
        </div>
    )
}