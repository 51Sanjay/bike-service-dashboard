import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import Service from "./pages/Service";
import Booking from "./pages/Booking";
import LiveServiceTracking from "./pages/LiveServiceTracking";
import Payment from "./pages/Payment";
import Navbar from "./pages/Navbar";
import Profile from "./pages/Profile";
import Footer from "./pages/Footer";
import GeneralService from "./service/GeneralService";
import BreakdownService from "./service/BikeBreakdown";
import BikeEngine from "./service/BikeEngine";
import WaterService from "./service/Waterservice";
import Puncture from "./service/Puncture"
import Offer from "./service/Offer"
import ScrollToTop from "./pages/ScrollToTop";

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/live-service" element={<LiveServiceTracking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/generalservice" element={<GeneralService/>} />
        <Route path="/bikebreakdown" element={<BreakdownService />} />
        <Route path="/bike-engine" element={<BikeEngine />} />
        <Route path="/WaterService" element={<WaterService />} />
        <Route path="/Puncture" element={<Puncture />} />
        <Route path="/Offer" element={<Offer />} />
        
      </Routes>
      {shouldShowFooter && <Footer />}{" "}
    </>
  );
}

export default App;
