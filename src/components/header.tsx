import { Globe2 } from "lucide-react"


export default function Header(){
    return(
        <div className="header">
            <div className="header-title" style={{paddingRight:"1.5rem", paddingLeft:"1.5rem", display:"flex", alignItems:"center", gap:"0.25rem"}}>
                <Globe2/>
                <h1>MHT</h1>
            </div>

            {/* <div style={{paddingLeft:"1.5rem", paddingRight:"1.5rem"}}>
                <a>
                    <button className="white">LOGIN <LogIn width="1rem"/></button>
                </a>
            </div> */}
            
            
        </div>
    )
}