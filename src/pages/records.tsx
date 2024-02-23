import DefaultDialog from "@/components/default-dialog";
import { ChevronLeft, File } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DirItem from "../components/dir-item";

export default function Supervision() {

  const [dialog, setDialog] = useState(false);

  const [date, setDate] = useState("")
  const [site, setSite]= useState("")

  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        posts.map((post)=>{
          setDate(post.date)
          setSite(post.site)
        })
      });
  }, [setPosts]);

  const handleClick = () => {
    setDialog(true);
  };
  return (
    <>
      <div className="page">
        <div style={{}}>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "crimson",
              fontWeight: 500,
              paddingLeft: "0.5rem",
              paddingRight:"0.5rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
              background:"#1a1a1a",
              borderRadius:"0.5rem",
              boxShadow:"1px 1px 20px rgba(0 0 0/ 70%)"
            }}
            to="/index"
          >
            <ChevronLeft width="1rem" /> Back
          </Link>
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column-reverse", overflowY:"scroll", gap:"1rem", alignItems:"center", justifyContent:"center"}}>
          {posts.map((posts) => (
              <DirItem
                onclick={handleClick}
                key={posts.id}
                to=""
                icon={<File width="1rem" color="salmon" />}
                title={posts.name}
                tag={posts.date}
              />
            ))}
          </div>
            
          </div>
        </div>
      </div>
      <DefaultDialog
        open={dialog}
        title="Summary"
        okText="Done"
        desc={date}
        desc2={site}
        onCancel={() => setDialog(false)}
      />
    </>
  );
}
