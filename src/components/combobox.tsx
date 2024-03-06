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

export default function ComboBox(props: Props) {
  return (
    <Select required onValueChange={props.onChange}>
      <SelectTrigger
        style={{
          background: "rgba(50 50 50/25%)",
          border: "1px solid #4a4a4a",
          fontSize: "1rem",
          zIndex:"5"
        }}
      >
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent style={{ background: "#1a1a1a", color: "white", zIndex:"5", height:"5ch" }}>
        <SelectItem value="OSRW">OSRW</SelectItem>
        <SelectItem value="JNDL">JNDL</SelectItem>
        <SelectItem value="OSRC">OSRC</SelectItem>
        
      </SelectContent>
    </Select>
  );
}
