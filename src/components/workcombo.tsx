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
            background: "var(--clr-bg)",
            border: "1px solid rgba(100 100 100/ 50%)",
            fontSize: "1.1rem",
          }}
        >
          <SelectValue placeholder={props.placeholder} />
        </SelectTrigger>
        <SelectContent style={{ background: "#1a1a1a", color: "white", height:"16rem", border:"2px solid rgba(100 100 100/ 50%)" }}>
          <SelectItem style={{fontSize:"1rem"}} value="GRP/GRE/GRP Piping">GRP/GRE/GRV Piping</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="GRP Tank Repair/Modification">GRP Tank Repair/Modification</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="GRP Pipe Repair/Modification">GRP Pipe Repair/Modification</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="Roof GRP Lamination">Roof GRP Lamination</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="RCC Tank - GRP Lamination">RCC Tank - GRP Lamination</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="HDPE Piping">HDPE Piping</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="HDPE Tank Repair/Modification">HDPE Tank Repair/Modification</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="HDPE Sheet Welding">Roof GRP Lamination</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="HDPE Pipe Repair/Modification">HDPE Pipe Repair/Modification</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="PP-H Piping">PP-H Piping</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="PP-H Pipe Repair/Modification">PP-H Pipe Repair/Modification</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="PP-H Tank Welding">PP-H Tank Welding</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="PP-R Piping">PP-R Piping</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="PP-R Pipe Repair/Modification">PP-R Pipe Repair/Modification</SelectItem>
        </SelectContent>
      </Select>
    );
  }
  