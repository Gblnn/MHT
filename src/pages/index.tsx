import { Globe, Users } from "lucide-react";
import DirItem from "../components/dir-item";

export default function Index() {
  return (
    <div className="page">
      <div style={{}}>
        <div className="page-content" style={{ padding: "1.75rem" }}>

          <DirItem
            to="/supervision-index"
            icon={<Users width="1rem" color="salmon" />}
            title="Employee Supervision"
          />

          <DirItem
            to=""
            classname="disabled"
            icon={<Globe width="1rem" color="#6a6a6a" />}
            title="Unavailable"
          />
        </div>
      </div>
    </div>
  );
}
