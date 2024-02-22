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
  style?: any;
  onCancel?: any;
  onConfirm?: any;
  okText:string;
  action?: string;
}

export default function DialogBox(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={props.style}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.25rem" }}>
              {props.title}
            </DialogTitle>

            <h3>{props.desc}</h3>
            
            <h2 style={{ fontWeight: "600" }}>{props.desc2}</h2>
            
            {/* <ComboBox placeholder="Select site" items /> */}
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
