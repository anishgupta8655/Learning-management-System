// const Navbar = () => {
//   const [menu, setMenu] = useState(false);
//   const handleMenuChange = (e) => {
//     setMenu(!menu);
//   };

//   const result = useSelector((state) => state.product.cart);

//   return (
//     <header className="p-4 mx-w-[1200px] bg-slate-900 fixed right-0 left-0 z-10">
//       <nav className="container  flex justify-between mx-auto md:text-lg items-center capitalize text-white lg:text-xl ">
//         <div className="flex gap-4 justify-center items-center">
//           <div className="home">
//             <Link to="/">
//               <FaHome />
//             </Link>
//           </div>
//           <div className="logo">
//             <Link to="/dashboard" className=" capitalize">
//               go to dashboard
//             </Link>
//           </div>
//           <div className="circle"></div>
//         </div>

//         <div className="md:flex `hidden` space-x-6 items-center">
//           <Link to="/ecom">ecomm</Link>
//           <div>
//             <Link to="/cart" className="relative">
//               <span className="absolute top-[-18px] left-[5px] bg-red-500">
//                 {result.length}
//               </span>
//               <FaCartArrowDown />
//             </Link>
//           </div>

//           <Link to="/about">about us</Link>
//           <Link to="/contact">contact us</Link>
//           <Link to="/signup">sign up </Link>
//           <Link to="/login">sign in </Link>
//         </div>

//         <div className="md:hidden">
//           <button onClick={handleMenuChange}>
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//         </div>
//       </nav>

//       <div
//         className={`capitalize md:hidden text-white space-y-3  ${
//           menu ? "block" : "hidden"
//         }`}
//       >
//         <Link className="block">about us</Link>
//         <Link className="block">contact us</Link>
//         <Link className="block">sign up </Link>
//         <Link className="block">sign in </Link>
//       </div>
//     </header>
//   );
// };

import { memo, useState } from "react";
import { FaHome, FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenuChange = () => {
    setMenu((prev) => !prev);
  };

  const cartItems = useSelector((state) => state.product.cart);

  return (
    <header className="p-4 bg-slate-900 fixed w-full top-0 left-0 z-50 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white">
        {/* Left Side: Logo & Home */}
        <div className="flex items-center gap-4">
          <Link to="/" className="text-2xl">
            <FaHome />
          </Link>
          <Link to="/dashboard" className="text-lg capitalize">
            Go to Dashboard
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/ecom">Ecomm</Link>
          <div className="relative">
            <Link to="/cart" className="relative flex items-center">
              {cartItems.length > 0 && (
                <span className="absolute -top-2 left-4 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
              <FaCartArrowDown />
            </Link>
          </div>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Sign In</Link>
        </div>

        {/* Mobile Menu Button */}
        {/* <button
          onClick={handleMenuChange}
          className="md:hidden focus:outline-none"
        >
          <svg
            className={`w-6 h-6 transition-transform duration-300 ${
              menu ? (
                <p>
                  <span>&#9776</span>
                </p>
              ) : (
                "rotate-0"
              )
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button> */}

        {/* Mobile Menu Button */}
        <button
          onClick={handleMenuChange}
          className="md:hidden focus:outline-none"
        >
          {menu ? (
            // Close (X) Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[100%] left-0 w-full bg-slate-100 p-4 transition-all duration-300 ease-in-out md:hidden ${
          menu ? "block opacity-100" : "hidden opacity-0"
        }`}
      >
        <Link
          to="/about"
          className="block py-2 border-b text-black border-gray-700"
        >
          About Us
        </Link>
        <Link
          to="/contact"
          className="block py-2 text-black border-b border-gray-700"
        >
          Contact
        </Link>
        <Link
          to="/signup"
          className="block py-2 text-black border-b border-gray-700"
        >
          Sign Up
        </Link>
        <Link to="/login" className="block py-2 text-black">
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default memo(Navbar);
