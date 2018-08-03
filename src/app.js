import React from "react";
import ReactDOM from 'react-dom';
import Greeting from "./greeting";

const mountPoint = document.getElementById('app');

ReactDOM.render(
  <Greeting name="World"/>,
  mountPoint
);
