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
  
  export default function WorkComboBox(props: Props) {
    return (
      <Select required onValueChange={props.onChange}>
        <SelectTrigger
          style={{
            background: "#1a1a1a",
            border: "1px solid #4a4a4a",
            fontSize: "1rem",
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color: "white" }}>
          <SelectItem value="HDPE Piping">HDPE Piping</SelectItem>
          <SelectItem value="GRP Piping">GRP Piping</SelectItem>
    
          
        </SelectContent>
      </Select>
    );
  }
  