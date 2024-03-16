import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";
  
  interface Props {
    placeholder?: string;
    items: any
    onChange?:any
  }
  
  export default function CompanyCombo(props: Props) {
    return (
      <Select required onValueChange={props.onChange}>
        <SelectTrigger
          style={{
            background: "var(--clr-bg)",
            border: "1px solid rgba(100 100 100/ 50%)",
            fontSize: "1.1rem",
          }}
        >
          <SelectValue placeholder="Select Company" />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color:"white", border:"2px solid rgba(100 100 100/ 50%)"}}>
          <SelectItem style={{fontSize:"1rem"}} value="MHT">MHT</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="MHW">MHW</SelectItem>
          
          
        </SelectContent>
      </Select>
    );
  }
  