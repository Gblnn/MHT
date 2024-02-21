import { User } from "lucide-react";
import DirItem from "../components/dir-item";
import { useEffect, useState } from "react";
import { DialogBox } from "@/components/dialogbox";


export default function Supervision() {

    const date = new Date().toLocaleDateString()

    const [dialog, setDialog] = useState(false)

    const [posts, setPosts] = useState<any[]>([])
    useEffect(()=>{
        fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/employees")
            .then(res => res.json())
            .then(data => {
                setPosts(data)
            })
    },[setPosts])

    const handleClick = () => {
        setDialog(true)
    }
    return(
        <>
        
        <div className="page">
            <div style={{paddingTop:"4rem"}}>
                <div className="page-content" style={{padding:"1.75rem"}}>
                    {posts.map((posts)=>(
                        <DirItem onclick={handleClick} key={posts.id} to="" icon={<User width="1rem" color="salmon"/>} title={posts.name}/>
                    ))}
                    
                    
                </div>
            
            </div>
            
        </div>
        <DialogBox open={dialog} title={date} onClose={()=>setDialog(false)}/>
        </>
    )
}