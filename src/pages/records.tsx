import Back from "@/components/back";
import DefaultDialog from "@/components/default-dialog";
import { File } from "lucide-react";
import { useEffect, useState } from "react";
import DirItem from "../components/dir-item";

export default function Supervision() {

  const [dialog, setDialog] = useState(false);

  const [date, setDate] = useState("")

  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch("https://65d73a6d27d9a3bc1d7a7e03.mockapi.io/records")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data)
        data.map((data:any)=>{
          setDate(data.date)
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
          <Back to="/supervision-index"/>
          <div className="page-content">
          <div style={{display:"flex", width:"100%", height:"100svh", flexFlow:"column-reverse", overflowY:"scroll", gap:"1rem", alignItems:"center", justifyContent:"center"}}>
          {posts.map((posts) => (
              <DirItem
                onclick={handleClick}
                key={posts.id}
                to=""
                icon={<File width="1rem" color="salmon" />}
                title={posts.date}
                
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
        onCancel={() => setDialog(false)}
      />
    </>
  );
}
