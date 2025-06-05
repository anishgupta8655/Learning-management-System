import Dashboard from "./components/pages/Dashboard";
import HeroSection from "./components/pages/HeroSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Signin from "./components/pages/Signin";
import Addcards from "./components/pages/Addcards";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import UpdateCard from "./components/pages/UpdateCard";
import AdminPanel from "./components/pages/AdminPanel";
import UpdateAdmin from "./components/pages/UpdateAdmin";
import EcomDashboard from "./ecom/EcomDashboard";
import DisplayCard from "./ecom/DisplayCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/addCourse" element={<Addcards />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<UpdateCard />} />

          <Route path="/admin" element={<AdminPanel />} />

          <Route path="/update_admin/:id" element={<UpdateAdmin />} />

          <Route path="/ecom" element={<EcomDashboard />} />

          <Route path="/cart" element={<DisplayCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
