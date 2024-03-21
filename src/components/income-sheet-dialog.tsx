import { ConfigProvider } from "antd";
import { useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "./ui/dialog";
import CompanyCombo from "./company-combo";
import PaymentCombo from "./payment-combo";
import {LoadingOutlined} from '@ant-design/icons'
import { DatePicker } from "./date-picker";


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
  company:any
  payment:any
  amount:any
  loading?:boolean
}

export default function IncomeSheetDialog(props: Props) {

  useEffect(()=>{
    
  },[])

  return (
    <>
      <Dialog open={props.open}>
        <DialogContent style={{background:"var(--clr-bg)", border:"none"}}>
          <DialogHeader>
            <DialogTitle style={{ fontSize: "1.5rem" }}>
              {props.title}
            </DialogTitle>

            <h3 style={{fontSize:"1.25rem"}}>{props.desc}</h3>
            
            <h2 style={{ fontWeight: "600" }}>{props.desc2}</h2>
            
            
            <></>
            <DatePicker />
            <CompanyCombo items onChange={props.company}/>
            <PaymentCombo onChange={props.payment}/>
            <input type="number" placeholder="Enter Amount" style={{fontSize:"1.1rem"}} onChange={props.amount}/>
            
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
                  style={{display:"flex", alignItems:"center", gap:"0.5rem"}}
                  onClick={props.onConfirm}
                  className={props.postable ? "red" : "disabled-btn"}
                >
                    {
                        props.loading?
                        <LoadingOutlined/>
                        :null
                    }
                    
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
