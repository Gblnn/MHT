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
            fontSize: "1rem",
            flex:1.5
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color: "white" }}>
          <SelectItem value="8:00">8:00</SelectItem>
          <SelectItem value="8:30">8:30</SelectItem>
          <SelectItem value="9:00">9:00</SelectItem>
          
        </SelectContent>
      </Select>
    );
  }
  