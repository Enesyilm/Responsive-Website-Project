import React, { Component } from "react";
import { Timeline } from "antd";
export default class Timelines extends Component {
  render() {
    return (
      <Timeline id="chart3">
        <Timeline.Item color="green">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolorent amour</p>
        </Timeline.Item>
        <Timeline.Item color="green">
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolorent amour</p>

        </Timeline.Item>
        <Timeline.Item color="red">

          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolorent amour</p>

        </Timeline.Item>
        <Timeline.Item>
          <h4>Lorem Ipsum</h4>
          <p>Lorem ipsum dolorent amour</p>

        </Timeline.Item>
      </Timeline>
    );
  }
}
