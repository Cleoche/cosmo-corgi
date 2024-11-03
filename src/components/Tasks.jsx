import React from "react";
import rectangle6 from "./rectangle-6.svg";
import rectangle9 from "./rectangle-9.svg";
import rectangle10 from "./rectangle-10.svg";
import rectangle11 from "./rectangle-11.svg";
import rectangle12 from "./rectangle-12.svg";
import rectangle13 from "./rectangle-13.svg";
import "./stylesheets/tasks.css";

export default function Tasks () {
    return (
        <div className="macbook-air">
            <div className="div">
                <div className="text-wrapper">Today’s Tasks</div>

                <div className="overlap">
                    <div className="text-wrapper-2">X</div>
                </div>

                <div className="overlap-group">
                    <img className="rectangle" alt="Rectangle" src={rectangle6} />

                    <img className="rectangle" alt="Rectangle" src={rectangle9} />

                    <div className="text-wrapper-3">placeholder task</div>
                </div>

                <div className="login">
                    <button className="button">Complete</button>
                </div>

                <div className="overlap-group-2">
                    <img className="rectangle" alt="Rectangle" src={rectangle12} />

                    <img className="rectangle" alt="Rectangle" src={rectangle13} />

                    <div className="text-wrapper-3">placeholder task</div>
                </div>

                <div className="button-wrapper">
                    <button className="button">Complete</button>
                </div>

                <div className="overlap-2">
                    <img className="rectangle" alt="Rectangle" src={rectangle10} />

                    <img className="rectangle" alt="Rectangle" src={rectangle11} />

                    <div className="text-wrapper-3">placeholder task</div>
                </div>

                <div className="div-wrapper">
                    <button className="button">Complete</button>
                </div>
            </div>
        </div>
    );
};