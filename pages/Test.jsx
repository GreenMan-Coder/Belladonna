import React, { useState } from "react";

const Test = ({ zone }) => {

    return (
        <div className="container">
            <nav className="navMenu">
                <a href="#">Home</a>
                <a href="#">Blog</a>
                <a href="#">Work</a>
                <a href="#">About</a>
                <div className="dot"></div>
            </nav> 

            <style jsx>{`   
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                overflow: hidden;
                background: #272727;
            }
            * {
                margin: 0;
                padding: 0;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
            }

            .navMenu {
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
            }

            .navMenu a {
                color: #f6f4e6;
                text-decoration: none;
                font-size: 1.2em;
                text-transform: uppercase;
                font-weight: 500;
                display: inline-block;
                width: 80px;
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }

            .navMenu a:hover {
                color: #fddb3a;
            }

            .navMenu .dot {
                width: 6px;
                height: 6px;
                background: #fddb3a;
                border-radius: 50%;
                opacity: 0;
                -webkit-transform: translateX(30px);
                transform: translateX(30px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
            }

            .navMenu a:nth-child(1):hover ~ .dot {
                -webkit-transform: translateX(30px);
                transform: translateX(30px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }

            .navMenu a:nth-child(2):hover ~ .dot {
                -webkit-transform: translateX(110px);
                transform: translateX(110px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }

            .navMenu a:nth-child(3):hover ~ .dot {
                -webkit-transform: translateX(200px);
                transform: translateX(200px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }

            .navMenu a:nth-child(4):hover ~ .dot {
                -webkit-transform: translateX(285px);
                transform: translateX(285px);
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
                opacity: 1;
            }

            
            `}</style>
        </div>
    );
};

export default Test;