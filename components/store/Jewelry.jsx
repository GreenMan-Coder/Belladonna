import { useEffect, useState } from "react";
import Galery from "./Galery"

const Jewelry = ({row}) => {
  const [jewelry, setJewelry] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/v1/bisuteria')
      .then((response) => response.json())
      .then((data) => setJewelry(data));
  }, []);

    return <section className="container">

        <h1>Joyas</h1>
        <Galery items={jewelry}/>

        <style jsx>{`
            .container {
                width: 100%;
                height: 100%;
            }

        `}</style>
    </section>
}
export default Jewelry
