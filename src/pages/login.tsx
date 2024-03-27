import { LoadingOutlined } from '@ant-design/icons';
import { message } from "antd";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [postable, setPostable] = useState(false);

  const [loading, setLoading] = useState(false)

  const usenavigate = useNavigate();

  useEffect(()=>{
    if(window.name!=""){
      usenavigate("/index")
    }
  },[])

  useEffect(() => {
    if (username == "") {
      setPostable(false);
    } else {
      setPostable(true);
    }
    if (password == "") {
      setPostable(false);
    } else {
      setPostable(true);
    }
  }, [username, password]);

  window.name = username;

  const Validate = async () => {
    setUsername(username.toLowerCase());
    setLoading(true)
    try {
      await fetch(
        "https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/users?username=" +username,)
        .then((res) => res.json())
        .then((data) => {
          data.map((data:any)=>{
            if(data.username== username && data.password == password){
              usenavigate("/index")
            }
            else{
              setLoading(false)
              message.info("Invalid Password")
            }
          })
          
        });
      
    } catch (error) {
      message.info("Invalid Username")
      setLoading(false)
    }
    
  };

  return (
    <div className="page">
      <div
        style={{
          position: "absolute",
          margin: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
        }}
      >
        {/* <Globe2 color="var(--clr-accent)" /> */}
        <img src="/logo.png" width={2.25} height={2.25} alt='Logo' style={{width:"2.25rem"}}/>
        <h1 style={{ fontSize: "2rem", fontWeight: "800", color: "var(--clr-accent)" }}>
          MHT
        </h1>
      </div>
      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100svh",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            background: "",
            width: "34ch",
            borderRadius: "1rem",
          }}
        >
          <div
            style={{ margin: "1.5rem", display: "flex", flexFlow: "column" }}
          >
            <h1 style={{ fontSize: "2rem", fontWeight: "600" }}>LOGIN</h1>
            <br/>
            <div
              style={{ display: "flex", flexFlow: "column", gap: "0.75rem" }}
            >
              
              <input
              autoComplete="username"
              id="username"
                style={{}}
                onChange={(e) => setUsername(e.target.value.toLowerCase())}
                placeholder="Username"
              />
              <input
              id="password"
                style={{}}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
              />
              <br />
            
            <button
              style={{ padding: "0.5rem", display:"flex", gap:"0.5rem" }}
              color="crimson"
              onClick={postable?Validate:()=>{}}
              accessKey="enter"
              className={postable ? "red" : "disabled-btn"}
            >
              {loading?<LoadingOutlined width="1rem" style={{scale:1.75}}/>:null}
              
              LOGIN
            </button>
                
              
              
            </div>
            
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
