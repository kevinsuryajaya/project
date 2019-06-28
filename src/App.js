//@flow
import React from "react";
import NavBar from "./components/navbar/navbar";
import { BrowserRouter } from "react-router-dom";
import MyRouter from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <MyRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
