import React from "react";
import Navbar from "../components/pages/Navbar";
import DisplayProducts from "./DisplayProducts";
import Footer from "../components/pages/Footer";
import toast from "react-hot-toast";

function EcomDashboard() {
  const token = localStorage.getItem("token");
  if (!token) {
    return toast.error("please login first");
  }
  return (
    <div className=" ">
      <Navbar />
      <div className="pt-20 pb-10 pl-10 flex flex-wrap gap-10 justify-between">
        <DisplayProducts />
      </div>

      <Footer />
    </div>
  );
}

export default EcomDashboard;
