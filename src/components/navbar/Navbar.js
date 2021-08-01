import React, { Component } from "react";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <div class="user"><i class="userphoto fas fa-user-circle fa-2x"></i>
        <h3 class="username" >Lorem Ipsum</h3>
        <span class="status"></span></div>
        
        
      </div>
    );
  }
}
