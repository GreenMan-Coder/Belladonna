import Nav from "../components/depilation/Nav"
import { useState } from "react"
import DescriptionCard from "../components/depilation/DescriptionCard"

const Test = () => {

    const [cardSelected, SetcardSelected] = useState([]);
    
    return <div className="container" >
        
        <Nav pos="" text="bikini" id={2} setcardSelected={SetcardSelected}/>
        <DescriptionCard cardSelected={cardSelected}/>

        <style jsx>{`
            .container {
                
            }

        `}</style>
    </div>
}
export default Test