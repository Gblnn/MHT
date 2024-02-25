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
    value?:string
  }
  
  export default function TimeComboBox(props: Props) {
    return (
      <Select value={props.value} required onValueChange={props.onChange}>
        <SelectTrigger
        
          style={{
            background: "#1a1a1a",
            border: "1px solid #4a4a4a",
            fontSize: "1.1rem",
            flex:1.5,
            
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color: "white", height:"10rem", fontSize:"1.25rem" }}>
          <SelectItem style={{fontSize:"1.25rem"}} value="5:30">5:30</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="6:00">6:00</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="6:30">6:30</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="7:00">7:00</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="7:30">7:30</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="8:00">8:00</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="8:30">8:30</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="8:30">8:30</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="9:00">9:00</SelectItem>
          <SelectItem style={{fontSize:"1.25rem"}} value="9:30">9:30</SelectItem>
          
          
          
        </SelectContent>
      </Select>
    );
  }
  