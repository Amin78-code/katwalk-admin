import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./MenuBar.module.css";
import logo from "../../../assets/images/logo/logo-white.png";

function MenuBar() {
  return (
    <div className="w-[100%] h-[65px] bg-[#fff] drop-shadow-[0_10px_30px_rgba(121,121,162,0.25)] ">
    
    <button className="color-[#212529] text-[1rem] leading-[1.5] rounded-[0.25rem] bg-[#f8f9fa] py-[0.375rem] px-[0.75rem]">
      ic
    </button>

    </div>
  );
}

export default MenuBar;
