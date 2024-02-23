import { ConfigProvider } from "antd";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import TimeComboBox from "./time-combobox";
import AMPMCombo from "./ampmcombo";

interface Props {
  open: boolean;
  title?: string;
  desc?: string;
  desc2?: string;
  onCancel?: any;
  onConfirm?: any;
  okText:string
  action?: string;
  time?:any
}

export default function EndWorkDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"#1a1a1a", border:"none"}}>
          <DialogHeader style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {props.title}
            </DialogTitle>

            <h3 style={{fontWeight:"normal", fontSize:"1.1rem"}}>{props.desc}</h3>
            <h3 style={{border:"2px solid salmon", width:"fit-content", padding:"0.25rem",paddingLeft:"1rem",paddingRight:"1rem", background:"#3a3a3a", borderRadius:"1rem"}}>{props.desc2}</h3>
            <div style={{display:"flex", gap:"0.5rem", width:"100%"}}>
            <TimeComboBox placeholder="Select time" onChange={props.time} items/>
            <AMPMCombo placeholder="AM/PM" items/>
            </div>
            
          </DialogHeader>

          <DialogFooter>
            <div
              style={{
                border: "",
                width: "100%",
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
              }}
            >
              <ConfigProvider
                theme={{ token: { colorPrimary: "var(--color)" } }}
              >
                <button
                  style={{ background: "var(--clr-opacity)", fontSize: "1rem" }}
                  onClick={props.onCancel}
                >
                  Cancel
                </button>
                <button
                  style={{ background: "crimson", fontSize: "1rem" }}
                  onClick={props.onConfirm}
                >
                  {props.okText}
                </button>
              </ConfigProvider>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
