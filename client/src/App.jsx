import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import BikeDetails from "./pages/BikeDetails";
import Service from "./pages/Service";
import Booking from "./pages/Booking";
import LiveServiceTracking from "./pages/LiveServiceTracking";
import Payment from "./pages/Payment";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";

function App() {
  const location = useLocation(); // Get the current route

  // Hide Navbar on login and signup pages
  const hideRoutes = ["/"];
  const shouldShowNavbar = !hideRoutes.includes(location.pathname);
  const shouldShowFooter = !hideRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}{" "}
      {/* Show Navbar only when not on Login/Signup */}
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-bike" element={<BikeDetails />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/live-service" element={<LiveServiceTracking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {shouldShowFooter && <Footer />}{" "}
    </>
  );
}

export default App;
