import { useEffect, useState } from "react";
import Test from "./Test";



const Test2 = () => {
    return <div className="container">
        <h1>Design</h1>
        <style jsx>{`
            .container {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #ffe3fe;
            }
            h1 {
                font-size: calc(1em + 20vw) ;  
	            font-weight: 900;
                    color: #f7c0fc; /* Reemplaza con el color generado con la mezcla de #fff y #e91e63 */
                    text-shadow:
                        -0.0075em 0.0075em 0 #fde6fe, /* Reemplaza con el color generado con la mezcla de #fff y #e91e63 y una opacidad del 94% */
                        0.005em 0.005em 0 #f7c0fc,
                        0.01em 0.01em 0 #f7c0fc,
                        0.015em 0.015em #f7c0fc,
                        0.02em 0.02em 0 #f7c0fc,
                        0.025em 0.025em 0 #f7c0fc,
                        0.03em 0.03em 0 #f7c0fc,
                        0.035em 0.035em 0 #f7c0fc; /* Reemplaza con el color generado con la mezcla de #fff y #e91e63 y una opacidad del 72% */
            }
        `}</style>
    </div>
}
export default Test2