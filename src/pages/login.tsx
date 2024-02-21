import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [posts, setPosts] = useState<any[]>([])
    const [postable, setPostable] = useState(false)


    const usenavigate = useNavigate()

    useEffect(()=>{
        if(username==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }
        if(password==""){
            setPostable(false)
        }
        else{
            setPostable(true)
        }   
    },[username, password])

    //Fetching Login Details from MockAPI
    useEffect(()=>{
        setTimeout(()=>{ 
            fetch("https://6586a271468ef171392e80df.mockapi.io/users?username="+username)
        .then(res => res.json())
        .then(data => {
            setPosts(data) 
            console.log(data)
        })  
        },3000)
        
    },[username, password])

    window.name = username

    const Validate = () =>{

        setUsername(username.toLowerCase())
        

        setTimeout(() => {
            // message.success("Logged in")
    
            posts.map((post)=>{
           
                if(post.username === username && post.password === password){
                    // message.success("Logged In")
                    usenavigate('/index')
                
                }
                
            })
            

        },1000);
            
    }    

    return(

        
        
        <div className="page">
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100svh"}}>
                <div style={{display:"flex",flexFlow:"column", background:"", width:"32ch", borderRadius:"1rem"}}>
                    <div style={{margin:"1.5rem", display:"flex", flexFlow:"column"}}>
                    <h1 style={{fontSize:"2rem", fontWeight:"600"}}>LOGIN</h1>
                    <br/><br/>
                    <div style={{display:"flex", flexFlow:"column", gap:"0.75rem"}}>
                        <input style={{padding:"0.25rem", paddingLeft:"0.5rem"}} onChange={e=>setUsername(e.target.value.toLowerCase())} placeholder="Username"/>
                        <input style={{padding:"0.25rem", paddingLeft:"0.5rem"}} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password"/>
                    </div>
                    <br/><br/>
                    <button style={{padding:"0.25rem"}} color="linear-gradient(90deg, crimson, darkslateblue)" onClick={Validate} className={postable?"red":"disabled-btn"}>LOGIN <ChevronRight width="1rem"/></button>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
    