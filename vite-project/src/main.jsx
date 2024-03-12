import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import { BrowserRouter, Route, Link ,Routes, Router} from "react-router-dom";
import "./index.css";
import LoadMore from "./pages/LoadMore.jsx";
import Slider from "./pages/Slider.jsx";
import RandomColor from "./pages/RandomColor.jsx";
import { ThemeProvider } from "@/components/theme-provider";
import Accordian from "./pages/accordian.jsx";
import Tree from "./pages/Tree.jsx";
import Qrcode from "./pages/Qrcode.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        {/* Routes should be directly under BrowserRouter */}
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/accordian" element={<Accordian/>} />
        <Route path="/randomcolor" element={<RandomColor/>} />
        <Route  path="/slider" element={<Slider/>} /> 
        <Route path="/loader" element={<LoadMore/>}/>
        <Route path="/tree" element={<Tree/>}/>
        <Route path="/qrcode" element={<Qrcode/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
