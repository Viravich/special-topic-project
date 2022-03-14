import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="app-home">
      <div className="display-frame">
        <img src="/images/temperature.png" alt="temperature-icon" />
        <br />
        <h3>อุณหภูมิ</h3>
        <div className="temperature-value">
          <p>0 %</p>
        </div>
      </div>
      <div className="display-frame">
        <img src="/images/humidity.png" alt="humidity-icon" />
        <br />
        <h3>ความชื้น</h3>
        <div className="humidity-value">
          <p>0 %</p>
        </div>
      </div>
      <div className="display-frame">
        <img src="/images/humidity.png" alt="humidity-icon" />
        <br />
        <h3>ความชื้นดิน</h3>
        <div className="soil-humidity-value">
          <p>0 %</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
