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
  
  export default function EndComboBox(props: Props) {
    return (
      <Select value={props.value} required onValueChange={props.onChange}>
        <SelectTrigger
        
          style={{
            background: "#1a1a1a",
            border: "1px solid #4a4a4a",
            fontSize: "1rem",
            flex:1.5
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color: "white" }}>
          <SelectItem value="10:00">10:00</SelectItem>
          <SelectItem value="10:30">10:30</SelectItem>
          <SelectItem value="11:00">11:00</SelectItem>
          <SelectItem value="11:30">11:30</SelectItem>
          <SelectItem value="12:00">12:00</SelectItem>
          <SelectItem value="12:30">12:30</SelectItem>
          
          
          
        </SelectContent>
      </Select>
    );
  }
  