import Back from "@/components/back";


export default function AccessControl() {
    return(
        <>
        <div className="page">
        <Back/>
        <div className="page-content">
            
            <div className="page-canvas">
            <h1 style={{fontWeight:600, fontSize:"1.25rem", padding:"0.05rem", background:"var(--clr-opacity)", borderRadius:"1rem", paddingLeft:"1rem", paddingRight:"1rem", marginTop:"1.5rem"}}>Access Control</h1>
            </div>
        
        </div>
            
        </div>
        </>
    )
}