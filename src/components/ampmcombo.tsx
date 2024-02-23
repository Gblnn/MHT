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
  
  export default function AMPMCombo(props: Props) {
    return (
      <Select required onValueChange={props.onChange} defaultValue="AM">
        <SelectTrigger
          style={{
            background: "#1a1a1a",
            border: "1px solid #4a4a4a",
            fontSize: "1rem",
            flex:0.5
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent defaultChecked style={{ background: "#1a1a1a", color: "white" }}>
          <SelectItem value="AM">AM</SelectItem>
          <SelectItem value="PM">PM</SelectItem>
          
          
        </SelectContent>
      </Select>
    );
  }
  