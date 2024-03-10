import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./pages/Navbar.jsx";
import { BrowserRouter, Route, Link ,Routes, Router} from "react-router-dom";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import Accordian from "./pages/accordian.jsx";

// Navbar component


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Navbar />
        {/* Routes should be directly under BrowserRouter */}
        <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/accordian" element={<Accordian/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
