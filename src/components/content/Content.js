import React, { Component } from "react";
import Chart1 from "./chart1/Chart1";
import Chart2 from "./chart2/Chart2";
import Timelines from "./timeline/Timelines";
import ProgressBar from "./progressBar/ProgressBar";
import "./Content.css";
import "./Charts.css";
import Survey from "./survey/Survey";
import InfoBar from "./infos/InfoBar";
export default class Content extends Component {
  render() {
    return (
      <div class="widgets">
        <div class="decor-div"></div>
        <div class="first-row">
          <div class="box-1">
            <h4 class="box-1-header">Progress</h4>
            <div class="percent">
              <svg>
                <circle cx="70" cy="70" r="60"></circle>
                <circle cx="70" cy="70" r="60"></circle>
              </svg>
              <div class="number">
                <h2>
                  25<span>%</span>
                </h2>
              </div>
            </div>
            <span class="note">Bak burayada lorem</span>
          </div>
          <div class="box-2">
            <h4 class="box-2-header">Progress</h4>
            <span class="note">Bak burayada lorem</span>

            <h4 class="box-2-amount">10.000$</h4>
            <span class="note">Bak burayada lorem</span>

            <Chart1 />
          </div>
          <div class="box-3">
            <h4 class="box-2-header">Progress</h4>

            <Chart2 />
          </div>
        </div>
        <div class="second-row">
          <div class="box-4">
            <Timelines />
          </div>
          <div class="box-5-6">
          <div class="box-5">
            <Survey />
          </div>
          <div class="box-6">
            <ProgressBar />
          </div>
          </div>
          <div class="box-7">
            <InfoBar />
          </div>
          
        </div>
      </div>
    );
  }
}
