import { Dropdown, MenuProps, Modal } from "antd"
import { Globe2, User } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function Header(){

    const usenavigate = useNavigate()

    const handleLogout = () => {
        usenavigate("/login")
        window.name=""
    }

    const Prompt = () => {
        
        Modal.confirm({
            centered:true,
            title:"Confirm Logout?",
            content:"Logging out of current session",
            okText:"Logout",
            cancelText:"Cancel",
            onOk:handleLogout
        })
    }

    const items: MenuProps['items'] = [
        {
          key: '1',
          label: (
            <a>
              Profile
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a onClick={Prompt}>
              Logout
            </a>
          ),
        },
        
    ];
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

            <Dropdown placement="bottom" menu={{items}} trigger={['click']}>
            <button style={{padding:0, background:"none"}}>
            <div style={{padding:"0.5rem", paddingLeft:"1rem", paddingRight:"1rem", background:"#1a1a1a", borderRadius:"1rem", display:"flex", alignItems:"center", gap:"0.5rem", marginRight:"1.5rem", maxWidth:"8rem", overflow:"hidden", userSelect:"none"}}>
                <User color="crimson" width="1rem"/>
                <p>User</p>
            </div>
            </button>
            </Dropdown>
            
            
            
            
        </div>
    )
}