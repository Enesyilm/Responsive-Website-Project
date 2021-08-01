import React, { Component } from "react";
import "./Sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar">
        <h2 id="sidebar-title">Statics</h2>

        <ul class="option-list">
          <li class="list-item search ">
            <a className="test" href="#">
              <i class="icon fas fa-search fa"></i>
              <span class="list-item-text">Search</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon fas fa-home"></i>
              <span class="list-item-text">DashBoard</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon fas fa-chart-bar"></i>
              <span class="list-item-text">Chart</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon far fa-comment-alt"></i>
              <span class="list-item-text">Chat</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon far fa-envelope"></i>
              <span class="list-item-text">Message</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon fas fa-star"></i>
              <span class="list-item-text">App</span>
            </a>
          </li>
          <li class="list-item">
            <a className="test" href="#">
              <i class="icon fas fa-sliders-h"></i>
              <span class="list-item-text">Setting</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
