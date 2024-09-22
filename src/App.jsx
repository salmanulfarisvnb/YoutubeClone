import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { useState } from "react";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Home sidebar={sidebar} />
      <Video />
    </>
  );
};

export default App;
