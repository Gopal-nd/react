import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Create from "./pages/Create.jsx";
import Saved from "./pages/Saved.jsx";
import Navbar from "./pages/Navbar.jsx";
import Register from "./pages/Register.jsx";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "./components/theme-provider.jsx"
 


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  

    <Router>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<Create />} />
        <Route path="/saved" element={<Saved />} />
      </Routes>
    </Router>
    </ThemeProvider>

  </React.StrictMode>
);
