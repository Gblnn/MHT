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
          <div className="page-content" style={{ padding: "1.75rem", display:"flex", flexFlow:"column-reverse" }}>
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
      <DefaultDialog
        style={{ background: "#1a1a1a", border: "none" }}
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
