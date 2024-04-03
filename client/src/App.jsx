import React from "react";
import Navbar from './shared/Navbar/Navbar'
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
