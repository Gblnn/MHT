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
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.25rem" }}>
              {props.title}
            </DialogTitle>

            <h3>{props.desc}</h3>
            <div style={{display:"flex", gap:"0.5rem"}}>
            <TimeComboBox placeholder="Select time" onChange={props.time} items/>
            <AMPMCombo items/>
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
