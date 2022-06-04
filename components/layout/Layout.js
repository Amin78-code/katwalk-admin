import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./sidebar/Sidebar";
// import GoToTop from "../go-to-top/go-to-top";
import Footer from "./footer/footer";
import styles from "./Layout.module.css"
import MenuBar from "./menu-bar/MenuBar";

const Layout = ({ children, footer }) => {
  // const [scrollTop, setScrollTop] = useState("");

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 600) {
  //       setScrollTop(true);
  //     } else {
  //       setScrollTop(false);
  //     }
  //   });
  // }, []);

  return (
    <>
      <div className="w-[100%] h-[100%] flex justify-start">
        <Sidebar />
        <div className={`${styles.main_right_part} bg-[#ff000] overflow-auto flex flex-col justify-between`}>
          <div>
            <MenuBar />
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
