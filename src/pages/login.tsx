import { Globe2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {LoadingOutlined} from '@ant-design/icons'
import { message } from "antd";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
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

  //Fetching Login Details from MockAPI
  useEffect(() => {
    setTimeout(() => {
      fetch(
        "https://6586a271468ef171392e80df.mockapi.io/users?username=" +
          username,
      )
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          console.log(data);
        });
    }, 3000);
  }, [username, password]);

  window.name = username;

  const Validate = () => {
    setUsername(username.toLowerCase());
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      // message.success("Logged in")
      posts.map((post) => {
        if (post.username === username && post.password === password) {
          // message.success("Logged In")
          usenavigate("/index");
        }
        else{
           message.info("Invalid Credentials")
        }
      });
    }, 1000);
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
        <Globe2 color="crimson" />
        <h1 style={{ fontSize: "1.5rem", fontWeight: "600", color: "crimson" }}>
          MHT
        </h1>
      </div>
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
              {loading?<LoadingOutlined width="1rem"/>:null}
              
              LOGIN
            </button>
                
              
              
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
