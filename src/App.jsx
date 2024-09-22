import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path="YoutubeClone" element={<Home sidebar={sidebar} />} />
        <Route
          path="YoutubeClone/video/:categoryId/:videoId"
          element={<Video />}
        />
      </Routes>
    </>
  );
};

export default App;
