import { ConfigProvider } from "antd";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

interface Props {
  open: boolean;
  title?: string;
  desc?: string;
  desc2?: string;
  onCancel?: any;
  onConfirm?: any;
  okText:string
  action?: string;
}

export default function DefaultDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"#1a1a1a", border:"none"}}>
          <DialogHeader style={{display:"flex", alignItems:"center"}}>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {props.title}
            </DialogTitle>

            <h3 style={{opacity:0.5}}>{props.desc}</h3>
            <h3 style={{opacity:0.5}}>{props.desc2}</h3>
          </DialogHeader>

          <DialogFooter>
            <div
              style={{
                border: "",
                width: "100%",
                display: "flex",
                gap: "0.5rem",
                justifyContent: "center",
                flexFlow:"column-reverse"
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
                  style={{ background: "var(--clr-opacity)", fontSize: "1rem", color:"crimson", fontWeight:600 }}
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
