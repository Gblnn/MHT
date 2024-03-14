import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"


export default function DbCombo(){
    const [sites, setSites] = useState<any[]>([])

    const getSites = () => {
        setSites
        getSites
    }
    return(
        <>
    
            <Select required>
            <SelectTrigger
              style={{
                background: "rgba(50 50 50/25%)",
                border: "1px solid #4a4a4a",
                fontSize: "1rem",
                zIndex:"5"
              }}
            >
              <SelectValue placeholder="Select Site" />
            </SelectTrigger>
            <SelectContent style={{ background: "#1a1a1a", color: "white", zIndex:"5", height:"5ch" }}>
                {sites.map((site)=>(
                    <SelectItem value={site.name}>{site.name}</SelectItem>
                ))}
              
              
              
            </SelectContent>
          </Select>
        

        </>
    )
}