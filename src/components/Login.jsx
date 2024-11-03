import "./stylesheets/login.css";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";
import {useNavigate} from "react-router-dom";

export default function Login () {
    const dimensions = useWindowDimensions();
    const navigate = useNavigate();
    return (
        <div className="login" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-wrapper">
                <div className="overlap">
                    <Background/>
                    <div className="overlap-2">

                        <div className="text-wrapper-3">Login</div>
                    </div>
                    <div className="overlap-group">

                        <div className="rectangle"/>

                        <button className="button-wrapper" onClick={() => navigate("/pet")}>
                            <span className="button">Login</span>
                        </button>

                        <input className="text-wrapper" placeholder={`username / email`}></input>

                        <input className="text-wrapper-2" placeholder={`password`}></input>
                    </div>


                </div>
            </div>
        </div>
    );
};