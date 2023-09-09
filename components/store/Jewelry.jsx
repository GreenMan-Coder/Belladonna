import { useEffect, useState } from "react";
import GaleryOroPlata from "./GaleryOroplata"

const Jewelry = ({row}) => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/bisuteria')
      .then((response) => response.json())
      .then((data) => setJewelry(data));
  }, []);


    return <section className="container">

        <h1>Joyas</h1>
        {console.log("joyas:::::  ",jewelry)}
        <GaleryOroPlata items={jewelry}/>

        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
            }

        `}</style>
    </section>
}
export default Jewelry
