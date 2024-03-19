import Back from "@/components/back"
import InventoryItem from "@/components/inventory-item"
import { Package } from "lucide-react"



export default function ProductList(){
    return(
        <>
        <div className="page">
            <Back/>
            <div className="page-content">
                <div className="page-canvas">
                    <h1 style={{marginTop:"2.5rem"}} className="page-title"><Package width="1.1rem"/>Product List</h1>
                    
                        <div style={{ width:"95%", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>

                        <InventoryItem image="https://www.gwgvalvesandpoly.com.au/images/com_hikashop/upload/electrofusion_reducer.jpg" title="REDUCER CONCENTRIC" subtitle="Electro Fusion"/>

                        <InventoryItem image="https://promains.co.nz/wp-content/uploads/2021/09/110OD-EF-Elbow-45-deg-SDR1117.webp" title="Elbow 45 deg" subtitle="Electro Fusion"/>
                        </div>

                        
                        
                    
                    
                </div>
            </div>

        </div>
        </>
    )
}