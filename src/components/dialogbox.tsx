import { ConfigProvider } from "antd";
import SiteComboBox from "./site-combobox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import TimeComboBox from "./time-combobox";
import AMPMCombo from "./ampmcombo";
import WorkComboBox from "./workcombo";

interface Props {
  open: boolean;
  title?: string;
  desc?: string;
  desc2?: string;
  style?: any;
  onCancel?: any;
  onConfirm?: any;
  okText:string;
  action?: string;
  onChange:any
  time?:any
  ampm?:any
  work?:any
}

export default function DialogBox(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"#1a1a1a", border:"none"}}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {props.title}
            </DialogTitle>

            <h3 style={{fontSize:"1.25rem"}}>{props.desc}</h3>
            
            <h2 style={{ fontWeight: "600" }}>{props.desc2}</h2>
            
            <SiteComboBox placeholder="Select site" items onChange={props.onChange} />
            <WorkComboBox placeholder="Work Type" items onChange={props.work} />
            <div style={{display:"flex", gap:"0.5rem"}}>
            {/* <Input style={{background:"#1a1a1a", fontSize:"1rem", outline:"none"}} placeholder="Start Time"/> */}
            <TimeComboBox placeholder="Select Time" items onChange={props.time}/>
            <AMPMCombo items placeholder="AM/PM" onChange={props.ampm}/>
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
