import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Video from "./pages/Video";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={<Home />} />
        <Route path="/video/:gatogaryId/:videoId" Component={<Video />} />
      </Routes>
    </>
  );
};

export default App;
