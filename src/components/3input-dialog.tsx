import { ConfigProvider } from "antd";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import {LoadingOutlined} from "@ant-design/icons"

interface Props {
  open: boolean;
  title?: string;
  desc?: string;
  desc2?: string;
  onCancel?: any;
  onConfirm?: any;
  okText:string
  action?: string;
  inputPlaceholder?:string
  inputOnChange?:any
  input2Placeholder?:string
  input2OnChange?:any
  input3Placeholder?:string
  input3OnChange?:any
  loading?:boolean
  confirmClass?:any
}

export default function ThreeInputDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"var(--clr-bg)", border:"none"}}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.5rem", display:"flex" }}>
              {props.title}
            </DialogTitle>

            <h3>{props.desc}</h3>

          
            <input placeholder={props.inputPlaceholder} onChange={props.inputOnChange}/>
            <input placeholder={props.input2Placeholder} onChange={props.input2OnChange}/>
            <input placeholder={props.input3Placeholder} onChange={props.input3OnChange}/>
            
            
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
                  style={{ background: "var(--clr-opacity)", flex:1 }}
                  onClick={props.onCancel}
                >
                  Cancel
                </button>
                <button
                style={{flex:1}}
                  className={props.confirmClass}
                  onClick={props.onConfirm}
                >
                  {props.loading?<LoadingOutlined/>:null}
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
