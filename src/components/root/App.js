import React from 'react'
import Navi from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'
import Content from '../content/Content'

import "antd/dist/antd.css";
import './App.css'
function App() {
  return (
    <div class="container">
      <Sidebar/>
      <div class="dashboard">
      <Navi />
      <Content/>
      </div>
    </div>
  );
}

export default App;
