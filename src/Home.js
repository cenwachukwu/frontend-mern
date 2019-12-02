import React, { Component } from 'react';
// import img from "./src/drawing-stethoscope-medicine-stethescope.jpg";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <h1>this is home</h1>
                <img src="./src/drawing-stethoscope-medicine-stethescope.jpg" alt="" width="100px" />
            </div>
        )
    }
}
export default Home;