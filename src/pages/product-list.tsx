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
                    <h1 className="page-title"><Package width="1.1rem"/>Product List</h1>
                    
                        <div style={{ width:"95%", display:"flex", flexWrap:"wrap", justifyContent:"center"}}>
                        <InventoryItem image="https://lh3.googleusercontent.com/proxy/P-1LoeVQZ8VdTAF8TEJOWMPdeEKO5BWj-uY7bp_7xvs_oRrR24sRPjEDAJ-hKmEKd5HiKZNu0HAuxSy44fWQmdv0nF4RWuPlOtjuC5Q" title="COUPLER" subtitle="Electro Fusion"/>
                        <InventoryItem image="https://cdn.shopify.com/s/files/1/0645/5672/8550/files/Electrofusion-Reducers-Fox-Fittings-reducing-coupling_700x_4a34dc59-ec04-4135-bbdb-d549cadc2a08_600x.jpg?v=1684410908" title="REDUCER CONCENTRIC" subtitle="Electro Fusion"/>
                        </div>
                        
                    
                    
                </div>
            </div>

        </div>
        </>
    )
}