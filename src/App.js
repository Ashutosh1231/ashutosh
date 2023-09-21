import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Home from "./pages/Home";
import Skills from "./pages/Skills";


function App() {

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    
    </div>
    );
}

export default App;
