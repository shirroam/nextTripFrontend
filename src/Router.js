import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./webPages/Homepage/Homepage";
import Header from "./webComponents/Header/Header";

//This Router file will contain references to all webpages and accompanying routes within the project
export default function Router() {
    return (
      <BrowserRouter>
      <Header />
        <Routes>
          {/* <Route path="" element={<Login />} /> */}
          <Route path="/homePage" element={<Homepage />} />
          {/* <Route path="/Trainer" element={<HomepageTrainer />} /> */}
        </Routes>
      </BrowserRouter>
    );
  }