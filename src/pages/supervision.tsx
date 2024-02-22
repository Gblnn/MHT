import DialogBox from "@/components/dialogbox";
import { ChevronLeft, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DirItem from "../components/dir-item";
import { format } from "date-fns";

export default function Supervision() {
  
  const date = format(new Date(), "dd-MM-yyyy");
  const [name, setName] = useState("")
  const [site, setSite] = useState("")

  const [dialog, setDialog] = useState(false);

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        posts.map((post)=>{
          setName(post.name)
        })
      });
  }, [setPosts]);

  const onPost = () => {
    setDialog(false)
    const obj = {name, date, site}
    fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/comments",
          {
                method:"POST",
                headers:{'content-type':'application/json'},
                body:JSON.stringify(obj)
          }
          )
  }

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
              padding: "0.5rem",
              width: "fit-content",
              margin: "1rem",
              position: "fixed",
              marginTop: "5rem",
            }}
            to="/index"
          >
            <ChevronLeft width="1rem" /> Back

          </Link>

          <div className="page-content" style={{ padding: "1.75rem" }}>
            {posts.map((posts) => (
              <DirItem
                onclick={handleClick}
                key={posts.id}
                to=""
                icon={<User width="1rem" color="salmon" />}
                title={posts.name}
              />
            ))}
          </div>
        </div>
      </div>
      <DialogBox
        style={{ background: "#1a1a1a", border: "none" }}
        open={dialog}
        title="Log details"
        onCancel={() => setDialog(false)}
        onConfirm={onPost}
        desc={date}
        desc2={name}

      />
    </>
  );
}
