import { ConfigProvider } from "antd";
import AMPMCombo from "./ampmcombo";
import TimeComboBox from "./time-combobox";
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
  desc3?:string
  onCancel?: any;
  onConfirm?: any;
  okText:string
  action?: string;
  time?:any
  ampm?:any
  postable?:boolean
  working?:boolean
  cancelWork?:any
}

export default function EndWorkDialog(props: Props) {
  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"var(--clr-bg)", border:"none"}}>
          <DialogHeader style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {props.title}
            </DialogTitle>
            <div style={{display:"flex", alignItems:"center", gap:"0.5rem"}}>
            
            <h3 style={{fontWeight:"normal", fontSize:"1.1rem"}}>{props.desc}</h3>
            <p style={{color:props.working?"lime":"goldenrod", fontSize:"1.25rem", fontWeight:"bolder"}}>•</p>
            
            </div>
            
          {props.working?
          <>
          <div style={{display:"flex", alignItems:"center", gap:"0.5rem", flexFlow:""}}>
            
            
          <h3 style={{border:"", width:"fit-content", padding:"0.25rem",paddingLeft:"1rem",paddingRight:"1rem", background:"var(--clr-opacity)", borderRadius:"1rem"}}>{props.desc3}</h3>

          <h3 style={{border:"", width:"fit-content", padding:"0.25rem",paddingLeft:"1rem",paddingRight:"1rem", background:"var(--clr-opacity)", borderRadius:"1rem"}}>{props.desc2}</h3>

          </div>

          <div style={{display:"flex", gap:"0.5rem", width:"100%"}}>
            <TimeComboBox placeholder="Ending time" onChange={props.time} items/>
            <AMPMCombo placeholder="AM/PM" items onChange={props.ampm}/>
            </div>
          </>
          :null
          }
            
            

            
            
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

                {props.working?
                <button
                style={{}}
                onClick={props.onConfirm}
                className={props.postable ? "red" : "disabled-btn"}
              >
                {props.okText}
              </button>
              :
              <button className="red" onClick={props.cancelWork}>End</button>
                }
                


              </ConfigProvider>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
