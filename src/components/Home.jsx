import ellipse3 from "./assets/Ellipse 3.svg";
import ellipse12 from "./assets/Ellipse 12.svg";
import polygon1 from "./assets/Polygon 1.svg";
import polygon2 from "./assets/Polygon 2.svg";
import polygon3 from "./assets/Polygon 3.svg";
import polygon4 from "./assets/Polygon 4.svg";
import "./stylesheets/home.css";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "./WindowDimensions.jsx";
import Background from "./Background.jsx";

export default function Home () {
    const navigate = useNavigate();
    const dimensions = useWindowDimensions();
    return (
        <div className="homepage" style={{zoom: Math.min((dimensions.width / 1280), (dimensions.height / 832))}}>
            <div className="overlap-group-wrapper">
                <div className="overlap-group">
                    <Background/>
                    <p className="text-wrapper">a pet from outer space</p>

                    <div className="div">Cosmic Corgi</div>

                    <button className="login" onClick={() => navigate('/login')}>
                        <span className="button">Login</span>
                    </button>

                    <button className="button-wrapper" onClick={() => navigate('/signup')}>
                        <span className="button">Sign up</span>
                    </button>

                    <p className="text-wrapper">a pet from outer space</p>

                    <div className="div">Cosmic Corgi</div>


                </div>
            </div>
        </div>
    );
};