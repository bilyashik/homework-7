import React from "react";
import { Route, Routes, Outlet, Link } from "react-router-dom"
import About from "./pages/aboutPage"
import Home from "./pages/homePage"
import Dashboard from "./pages/dashboardPage";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  )
}

function Layout() {
  return (
    <div className="nav-bar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">First Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Second Page</Link>
          </li>
        </ul>
      <hr></hr>
      <Outlet />
    </div>
  )
}

