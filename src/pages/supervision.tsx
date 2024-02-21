import DialogBox from "@/components/dialogbox";
import { ChevronLeft, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DirItem from "../components/dir-item";
import { format } from "date-fns";

export default function Supervision() {
  const date = format(new Date(), "dd-MM-yyyy");

  const [dialog, setDialog] = useState(false);

  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://658c3fd2859b3491d3f5c978.mockapi.io/employees")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, [setPosts]);

  const handleClick = () => {
    setDialog(true);
  };
  return (
    <>
      <div className="page">
        <div style={{ paddingTop: "4rem" }}>
          <Link
            style={{
              display: "flex",
              alignItems: "center",
              color: "crimson",
              fontWeight: 500,
              padding: "0.5rem",
              width: "fit-content",
              margin: "1rem",
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
        desc={date}
        desc2="name"
      />
    </>
  );
}
