import React from "react";
import  createRoot  from "react-dom";
import Home from '../src/containers/Home/index.js'


 import GlobalStyle from "./containers/styles/globalStyle";

 createRoot.render( <> <Home/> <GlobalStyle /> </>, document.getElementById("root"));

