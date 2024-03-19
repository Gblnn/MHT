import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "./ui/select";
  
  interface Props {
    placeholder?: string
    onChange?:any
  }
  
  export default function PaidByCombo(props: Props) {
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
        <SelectContent style={{ background: "#1a1a1a", color:"white", border:"2px solid rgba(100 100 100/ 50%)"}}>
          <SelectItem style={{fontSize:"1rem"}} value="MD Account">MD Account</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="Bank Account">Bank Account</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="Nitheesh">Nitheesh</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="Girishlal">Girishlal</SelectItem>
          <SelectItem style={{fontSize:"1rem"}} value="Kumar">Kumar</SelectItem>
        </SelectContent>
      </Select>
    );
  }
  