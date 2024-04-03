import { Checkbox, ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import AMPMCombo from "./ampmcombo";
import SiteCombo from "./site-combo";
import TimeComboBox from "./time-combobox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import WorkCombo from "./work-combo";


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
  onChange?:any
  time?:any
  ampm?:any
  work?:any
  postable?:boolean
  tag?:string
  prefetch?:boolean
  sitevisit?:any
  sitedetails?:any
  oncheckboxchange?:any
}

export default function DialogBox(props: Props) {

  const [checked, setChecked] = useState(false)

  useEffect(()=>{
  
    
  },[])

  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"var(--clr-bg)", border:"none"}}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.5rem"}}>
              {props.title}
              {
                props.tag?
                <p style={{background:"var(--clr-accent)", padding:"0.25rem", paddingLeft:"0.5rem", paddingRight:"0.5rem", borderRadius:"1rem"}}>{props.tag}</p>
                :null
              }
              
            </DialogTitle>

            <h3 style={{fontSize:"1.25rem"}}>{props.desc}</h3>
            
            <h2 style={{ fontWeight: "600" }}>{props.desc2}</h2>
            
            {checked?
            null
            :
            <>
            <SiteCombo onChange={props.onChange} disabled={checked}/>
            <WorkCombo onChange={props.work} disabled={checked}/>
            </>
            
            }
            
            
            <div style={{display:"flex", gap:"0.5rem"}}>
      
              <TimeComboBox placeholder="Select Time" items onChange={props.time}/>
              <AMPMCombo items placeholder="AM/PM" onChange={props.ampm}/>
      
            </div>

            <div style={{display:"flex", border:"", marginTop:"0.5rem", justifyContent:"space-between", gap:"0.5rem"}}>
              <div style={{display:"flex", gap:"0.5rem", alignItems:"center", width:"fit-content", paddingLeft:"1rem", paddingRight:"1rem", borderRadius:"0.5rem", cursor:"pointer", fontWeight:"500",fontSize:"1rem", color:"var(--text)"}} onClick={()=>setChecked(!checked)} className="opacity" >
                <Checkbox checked={checked} />
                <p style={{userSelect:"none"}}>Site Visit</p>
              </div>
              <input placeholder={checked?"Site Name":"N/A"} disabled={!checked} onChange={props.sitedetails} style={{flex:1, fontSize:"1.1rem"}}/>
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
                  style={{ background: "var(--clr-opacity)", fontSize: "1rem", flex:1 }}
                  onClick={props.onCancel}
                >
                  Cancel
                </button>
                <button
                  style={{flex:1}}
                  onClick={props.onConfirm}
                  className={props.postable ? "red" : "disabled-btn"}
                  disabled={!props.postable}
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
