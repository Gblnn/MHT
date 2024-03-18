
interface Props {
    image:string
    title:string
    subtitle:string
}

export default function InventoryItem(props:Props){
    return(
        <div className="inventory-item" style={{background:"rgba(220 220 220)", width:"28ch", height:"32ch", margin:"1rem", borderRadius:"1rem"}}>
            <div style={{ width:"100%", height:"100%", padding:"0.75rem"}}>
                <div id="picture-grid" style={{width:"100%", height:"75%", background:"rgba(100 100 100/ 25%)", borderRadius:"0.5rem", display:"flex"}}>
                    {/* <h1 style={{background:"var(--clr-accent)", borderRadius:"0.5rem", width:"fit-content", color:"white", padding:"0.25rem", paddingRight:"0.5rem", paddingLeft:"0.5rem", margin:"0.5rem", position:"relative", zIndex:1}}>HDPE</h1> */}

                    {/* <h1 style={{background:"var(--clr-accent)", borderRadius:"0.5rem", width:"fit-content", color:"white", padding:"0.25rem", paddingRight:"0.5rem", paddingLeft:"0.5rem", margin:"0.5rem", right:0}}>HDPE</h1> */}
                    
                    <img src={props.image} style={{objectFit:"cover", width:"100%", height:"100%", borderRadius:"0.5rem"}}/>
                </div>

                <div style={{ marginTop:"1rem"}}>
                <h1 style={{fontWeight:"600", fontSize:"1.1rem"}}>{props.title}</h1>
                <p>{props.subtitle}</p>
                </div>
                
            </div>

        </div>
        
    )
}