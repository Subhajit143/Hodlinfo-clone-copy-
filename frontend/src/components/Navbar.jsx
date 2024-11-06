import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/hodlinfo1.png";
import Drop from "../Pages/Drop1";
import Drop2 from "../Pages/Drop2";

const Navbar = () => {
  const [count, setCount] = useState(1);
  const [fade, setFade] = useState(true);
  const [formdata, setFormdata] = useState({
    currency: "",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Start fading out current number
      setTimeout(() => {
        setCount((prevCount) => (prevCount < 59 ? prevCount + 1 : 1)); // Update number
        setFade(true); // Start fading in new number
      }, 500); // Change number after half the interval for smooth fade
    }, 1800); // Total interval duration for number change

    return () => clearInterval(intervalId);
  }, []);

  const handlecurrency = (e) => {
    setFormdata({ currency: e.target.value });
  };

  return (
    <>
      <div className="shadow-slate-100 drop-shadow-2xl container items-center bg-slate-900 flex justify-between max-w-full px-10">
        <div>
          <NavLink to="/">
            <img src={logo} alt="" className="w-72" />
          </NavLink>
        </div>

        <div className="flex items-center justify-center flex-grow gap-2 font-semibold">
          <Drop />
          <Drop2
            selectedCategory={formdata.currency}
            onchange={handlecurrency}
          />
          <div className="px-3">
            <button className="text-white  bg-slate-800 w-20 h-10 rounded-md">
              Buy {formdata.currency}
            </button>
          </div>
        </div>

        <div className="flex gap-5 content-center px-3">
          <div className="loader-container relative flex justify-center items-center">
            <div className="loader-spinner w-12 h-12 rounded-full border-8 border-transparent border-t-teal-400 border-b-purple-700 animate-spin"></div>
            <span
              className={`loader-number absolute text-white font-bold text-l transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {count}
            </span>
          </div>
          <button className="w-auto h-8 button-pr text-white px-2  font-bold rounded-lg self-center">
          <i className="bx bxl-telegram"></i> Connect Telegram
          </button>
        </div>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />
          <div class="group peer ring-0 bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600 rounded-full outline-none duration-1000 after:duration-300 w-12 h-6 shadow-md peer-focus:outline-none after:content-[''] after:rounded-full after:absolute after:bg-[#03dac6] after:outline-none after:h-5 after:w-5 after:top-0.5 after:left-0.5 peer-checked:after:translate-x-6 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-neutral-500 peer-checked:to-neutral-600"></div>
        </label>
      </div>
    </>
  );
};

export default Navbar;
