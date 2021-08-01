import React, { Component } from "react";
import { Progress } from "antd";
export default class ProgressBar extends Component {
  render() {
    return (
      <div class="progressbody">
        <span class="progressname">lorem</span>
        <Progress
          strokeColor={{
            "0%": "#9554a3",
            "100%": "#C66DAB",
          }}
          percent={30}
        />
        <span class="progressname">lorem</span>
        <Progress
          strokeColor={{
            "0%": "#9554a3",
            "100%": "#C66DAB",
          }}
          percent={70}
        />
        <span class="progressname">lorem</span>
        <Progress
          strokeColor={{
            "0%": "#9554a3",
            "100%": "#C66DAB",
          }}
          percent={100}
        />
        <span class="progressname">lorem</span>
        <Progress
          strokeColor={{
            "0%": "#9554a3",
            "100%": "#C66DAB",
          }}
          percent={50}
          showInfo={false}
        />
      </div>
    );
  }
}
