import { Dropdown, MenuProps } from "antd";
import { User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DialogBox from "./dialogbox";


export default function UserButton(){

    const [dialog, setDialog] = useState(false)

    const usenavigate = useNavigate()

    const handleLogout = () => {
        usenavigate("/login")
        window.name=""
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
            <a onClick={()=>setDialog(true)}>
              Logout
            </a>
          ),
        },
        
    ];
    return(
        <>
        <Dropdown placement="bottom" menu={{items}} trigger={['click']}>
            <button style={{padding:0, background:"none"}}>
            <div style={{padding:"0.5rem", paddingLeft:"1rem", paddingRight:"1rem", background:"#1a1a1a", borderRadius:"1rem", display:"flex", alignItems:"center", gap:"0.5rem", marginRight:"1.5rem", overflow:"hidden", userSelect:"none", width:"fit-content", justifyContent:"center"}}>
                <User color="crimson" width="1rem"/>
                <p>User</p>
            </div>
            </button>
            </Dropdown>

            <DialogBox style={{background:"#1a1a1a", border:"none"}} open={dialog} title="Logout?" desc="Log out of current seesion?" onCancel={()=>setDialog(false)} onConfirm={handleLogout}/>
        </>
    )
}