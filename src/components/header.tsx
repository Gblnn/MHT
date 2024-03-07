import { Globe2 } from "lucide-react"
import UserButton from "./user-button"


export default function Header(){

    
    return(
        <div className="header" style={{zIndex:10}}>
            <div className="header-title" style={{paddingRight:"1.5rem", paddingLeft:"1.5rem", display:"flex", alignItems:"center", gap:"0.25rem",color:"var(--clr-accent)"}}>
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