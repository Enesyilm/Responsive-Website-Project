import React, { Component } from "react";

export default class InfoBar extends Component {
  render() {
    return (
      <div>
        <div class="info-box">
          <h4 class="info-box-title">Lorem Ipsum</h4>
          <span class="info-box-text">lorem ipsum buraya</span>
          <span class="info-box-value">10.000$</span>
        </div>
        <div class="info-box">
        <h4 class="info-box-title">Lorem Ipsum</h4>
          <span class="info-box-text">lorem ipsum buraya</span>
          <span class="info-box-value">30%</span>
        </div>
        <div class="info-box">
        <h4 class="info-box-title">Lorem Ipsum</h4>
          <span class="info-box-text">lorem ipsum buraya</span>
          <span class="info-box-value">1,250</span>
        </div>
      </div>
    );
  }
}
