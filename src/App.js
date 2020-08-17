import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import InputOTP from "./components/InputOTP";
import GetLocation from "./components/GetLoation";
import InputBox from "./components/InputBox";
import NetBankingDetails from "./components/NetBankingDetails";
import CityDetails from "./components/CityDetails";
export default function App() {
  return (
    <div class="container position-relative">
      <div className="row d-lg-flex justify-content-around">
        <span
          className="position-absolute"
          style={{ top: "0px", right: "0px", color: "red", marginRight: "3px" }}
        >
          X
        </span>
        <div className="col-lg-4">
          <Header />
          <InputOTP />
          <InputBox />
          <GetLocation />
          <CityDetails />
        </div>
        <div className="col-lg-8">
          <NetBankingDetails />
        </div>
      </div>
    </div>
  );
}
