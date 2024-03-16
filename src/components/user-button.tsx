import { LogOut } from "lucide-react";
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

  // const items: MenuProps["items"] = [
    
  //   window.name=="admin"?
  //   {
    
  //     key: "2",
  //     label:(
  //       <a
  //         style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize:"1rem" }}
  //         onClick={() => usenavigate("/admin")}
  //       >
  //         <Eye color="crimson" width="1rem" />
  //         Admin
  //       </a>
  //     ),
  //   }:null,
  //   {
  //     key: "1",
  //     label: (
        
  //       <a
  //         style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize:"1rem" }}
  //         onClick={() => setDialog(true)}
  //       >
  //         <LogOut color="crimson" width="1rem" />
  //         Logout
  //       </a>
  //     ),
  //   }
  // ];
  return (
    <>
      {/* <Dropdown placement="bottom" menu={{ items }} trigger={["click"]}> */}
        <button style={{ padding: 0, background: "none", marginRight:"1.5rem" }} onClick={()=>setDialog(true)}>
          <div
          
            style={{
              padding: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              background: "var(--clr-opacity)",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              overflow: "hidden",
              userSelect: "none",
              width: "fit-content",
              justifyContent: "center",
            }}
          >
            <LogOut color="var(--clr-accent)" width="1rem" />
          </div>
        </button>
      {/* </Dropdown> */}

      <DefaultDialog
        open={dialog}
        title="Logout?"
        desc="Confirm logging out of current session"
        onCancel={() => setDialog(false)}
        onConfirm={handleLogout}
        okText="Logout"

      />
    </>
  );
}
