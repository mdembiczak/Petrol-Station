import React, { Component } from "react";
import "../../styles/worker/reportsView.css";

import cam1 from "../../images/cam1.jpg";
import cam2 from "../../images/cam2.jpg";
import cam3 from "../../images/cam3.jpg";
import cam4 from "../../images/cam4.jpg";

class camerasView extends Component {
    render() {
        return (
            <div>
                <h2>Kamery</h2>
                <div className="camerasContainer">
                <div className="cameraView"><img src={cam1} alt="Cam1" /></div><div className="cameraView"><img src={cam2} alt="Cam2" /></div>
                <div className="cameraView"><img src={cam3} alt="Cam3" /></div><div className="cameraView"><img src={cam4} alt="Cam4" /></div>
                </div>
            </div>
        );
    }
}

export default camerasView;
