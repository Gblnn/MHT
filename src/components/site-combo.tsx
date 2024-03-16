import { db } from "@/firebase"
import { collection, getDocs, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"


interface Props{
  onChange:any
}

type Record = {
  id:string,
  sitename:string
}

export default function SiteCombo(props:Props){
    const [sites, setSites] = useState<any[]>([])

    useEffect(()=>{
      getSites()
    },[])

    const getSites = async () => {
        const RecordCollection = collection(db, "sites")
        const recordQuery = query(RecordCollection)
        const querySnapshot = await getDocs(recordQuery)
        const fetchedData: Array<Record> = [];

        querySnapshot.forEach((doc)=>{
          fetchedData.push({id: doc.id, ...doc.data()} as Record)
        })
        setSites(fetchedData)
    }
    return(
        <>
    
            <Select required onValueChange={props.onChange}>
            <SelectTrigger
              style={{
                background: "var(--clr-bg)",
                border: "1px solid rgba(100 100 100/ 50%)",
                fontSize: "1.1rem",
                zIndex:"15"
              }}
            >
              <SelectValue placeholder="Select Site" />
            </SelectTrigger>
            <SelectContent style={{ background: "#1a1a1a", color: "white", border:"2px solid rgba(100 100 100/ 50%)" }}>
                {sites.map((site)=>(
                    <SelectItem style={{fontSize:"1rem"}} key={site.id} value={site.sitename}>{site.sitename}</SelectItem>
                ))}
              
              
              
            </SelectContent>
          </Select>

          
        

        </>
    )
}