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
  
  export default function SiteComboBox(props: Props) {
    return (
      <Select required onValueChange={props.onChange}>
        <SelectTrigger
          style={{
            background: "#1a1a1a",
            border: "1px solid #4a4a4a",
            fontSize: "1.1rem",
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "var(--clr-bg)", color:"white"}}>
          <SelectItem style={{fontSize:"1rem"}} value="JNDL">JNDL</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="OSRC">OSRC</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="OARC">OARC</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="OSWS">OSWS</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="OMC">OMC</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="BARKA IWP">BARKA IWP</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="AL JAZEERA">AL JAZEERA</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="MHT Workshop">MHT Workshop</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="MHW Workshop">MHW Workshop</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="OMAN MINING">OMAN MINING</SelectItem>
          
        </SelectContent>
      </Select>
    );
  }
  