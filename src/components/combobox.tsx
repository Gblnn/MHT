import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface Props {
  placeholder: string;
}

export default function ComboBox(props: Props) {
  return (
    <Select>
      <SelectTrigger
        style={{ background: "#1a1a1a", border: "1px solid #4a4a4a" }}
      >
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent style={{ background: "#1a1a1a", color: "white" }}>
        <SelectItem value="light">OSRW</SelectItem>
        <SelectItem value="dark">JNDL</SelectItem>
        <SelectItem value="system">OSRC</SelectItem>
      </SelectContent>
    </Select>
  );
}
