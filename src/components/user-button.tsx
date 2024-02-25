import { Dropdown, MenuProps } from "antd";
import { Eye, LogOut, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultDialog from "./default-dialog";

export default function UserButton() {
  const [dialog, setDialog] = useState(false);

  const usenavigate = useNavigate();

  const handleLogout = () => {
    usenavigate("/login");
    window.name = "";
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        
        <a
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          onClick={() => setDialog(true)}
        >
          <LogOut color="crimson" width="0.75rem" />
          Logout
        </a>
      ),
    },
    window.name=="admin"?
    {
    
      key: "2",
      label:(
        <a
          style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          onClick={() => usenavigate("/admin")}
        >
          <Eye color="crimson" width="0.75rem" />
          Admin
        </a>
      ),
    }:null
  ];
  return (
    <>
      <Dropdown placement="bottom" menu={{ items }} trigger={["click"]}>
        <button style={{ padding: 0, background: "none" }}>
          <div
            style={{
              padding: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              background: "#1a1a1a",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginRight: "1.5rem",
              overflow: "hidden",
              userSelect: "none",
              width: "fit-content",
              justifyContent: "center",
            }}
          >
            <User color="crimson" width="1rem" />
          </div>
        </button>
      </Dropdown>

      <DefaultDialog
        open={dialog}
        title="Logout?"
        onCancel={() => setDialog(false)}
        onConfirm={handleLogout}
        okText="Logout"

      />
    </>
  );
}
