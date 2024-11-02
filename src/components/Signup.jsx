import React from "react";
import ellipse3 from "./assets/Ellipse 3.svg";
import ellipse12 from "./assets/Ellipse 12.svg";
import polygon1 from "./assets/Polygon 1.svg";
import polygon2 from "./assets/Polygon 2.svg";
import polygon3 from "./assets/Polygon 3.svg";
import polygon4 from "./assets/Polygon 4.svg";
import "./stylesheets/signup.css";
import useWindowDimensions from "./WindowDimensions.jsx";

export default function Signup() {
const dimensions = useWindowDimensions();
    return (
        <div className="sign-in" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-wrapper">
                <div className="overlap">
                    <div className="overlap-group">
                        <div className="ellipse" />

                        <div className="div" />

                        <img className="polygon" alt="Polygon" src={polygon1} />

                        <img className="img" alt="Polygon" src={polygon2} />

                        <div className="ellipse-2" />

                        <img className="ellipse-3" alt="Ellipse" src={ellipse3} />

                        <div className="ellipse-4" />

                        <div className="ellipse-5" />

                        <div className="ellipse-6" />

                        <div className="ellipse" />

                        <img className="polygon" alt="Polygon" src={polygon3} />

                        <img className="img" alt="Polygon" src={polygon4} />

                        <div className="ellipse-2" />

                        <img className="ellipse-3" alt="Ellipse" src={ellipse12} />

                        <div className="ellipse-4" />

                        <div className="ellipse-5" />

                        <div className="ellipse-6" />

                        <div className="rectangle" />

                        <div className="rectangle-2" />

                        <div className="rectangle-3" />

                        <div className="rectangle-4" />

                        <button className="login">
                            <span className="button">Sign up</span>
                        </button>

                        <div className="text-wrapper">email</div>

                        <div className="text-wrapper-2">username</div>

                        <div className="text-wrapper-3">password</div>
                    </div>

                    <div className="overlap-2">
                        <div className="ellipse-7" />

                        <div className="ellipse-8" />

                        <div className="ellipse-9" />

                        <div className="ellipse-7" />

                        <div className="ellipse-8" />

                        <div className="ellipse-9" />

                        <div className="text-wrapper-4">Sign in</div>
                    </div>
                </div>
            </div>
        </div>
    );
};