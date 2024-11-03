import React from "react";
import ellipse3 from "./assets/Ellipse 3.svg";
import ellipse12 from "./assets/Ellipse 12.svg";
import polygon1 from "./assets/Polygon 1.svg";
import polygon2 from "./assets/Polygon 2.svg";
import polygon3 from "./assets/Polygon 3.svg";
import polygon4 from "./assets/Polygon 4.svg";
import "./stylesheets/signup.css";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";

export default function Signup() {
const dimensions = useWindowDimensions();
    return (
        <div className="sign-in" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-wrapper">
                <Background/>
                <div className="overlap">

                    <div className="overlap-2">

                        <div className="text-wrapper-4">Sign in</div>
                    </div>

                    <div className="overlap-group">


                        <div className="rectangle"/>



                        <button className="login">
                            <span className="button">Sign up</span>
                        </button>

                        <input className="text-wrapper" placeholder={`email`}></input>

                        <input className="text-wrapper-2" placeholder={`username`}></input>

                        <input className="text-wrapper-3" placeholder={`password`}></input>
                    </div>
                </div>
            </div>
        </div>
    );
};