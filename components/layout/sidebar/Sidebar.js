import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import logo from "../../../assets/images/logo/logo-white.png"; 

function Sidebar() {
  const productsOption = useRef("");
  const productsChevron = useRef("");
  const instagramOption = useRef("");
  const instagramChevron = useRef("");
  const salesOption = useRef("");
  const salesChevron = useRef("");
  const customersOption = useRef("");
  const customersChevron = useRef("");
  const designerOption = useRef("");
  const designerChevron = useRef("");
  const websiteSetupOption = useRef("");
  const websiteSetupChevron = useRef("");

  const openDropDown = (menuName) => {
    // instagram
    // sales
    // customers
    // designer
    // websiteSetup

    if(menuName == "products") {
      instagramOption.current.classList.remove("open-dropdown-40")
      instagramChevron.current.classList.remove("rotate90")
      salesOption.current.classList.remove("open-dropdown-160")
      salesChevron.current.classList.remove("rotate90")
      customersOption.current.classList.remove("open-dropdown-40")
      customersChevron.current.classList.remove("rotate90")
      designerOption.current.classList.remove("open-dropdown-200")
      designerChevron.current.classList.remove("rotate90")
      websiteSetupOption.current.classList.remove("open-dropdown-320")
      websiteSetupChevron.current.classList.remove("rotate90")

      productsOption.current.classList.toggle("open-dropdown")
      productsChevron.current.classList.toggle("rotate90")
    }
    if(menuName == "instagram") {
      productsOption.current.classList.remove("open-dropdown")
      productsChevron.current.classList.remove("rotate90")
      salesOption.current.classList.remove("open-dropdown-160")
      salesChevron.current.classList.remove("rotate90")
      customersOption.current.classList.remove("open-dropdown-40")
      customersChevron.current.classList.remove("rotate90")
      designerOption.current.classList.remove("open-dropdown-200")
      designerChevron.current.classList.remove("rotate90")
      websiteSetupOption.current.classList.remove("open-dropdown-320")
      websiteSetupChevron.current.classList.remove("rotate90")

      instagramOption.current.classList.toggle("open-dropdown-40")
      instagramChevron.current.classList.toggle("rotate90")
    }
    if(menuName == "sales") {
      productsOption.current.classList.remove("open-dropdown")
      productsChevron.current.classList.remove("rotate90")
      instagramOption.current.classList.remove("open-dropdown-40")
      instagramChevron.current.classList.remove("rotate90")
      customersOption.current.classList.remove("open-dropdown-40")
      customersChevron.current.classList.remove("rotate90")
      designerOption.current.classList.remove("open-dropdown-200")
      designerChevron.current.classList.remove("rotate90")
      websiteSetupOption.current.classList.remove("open-dropdown-320")
      websiteSetupChevron.current.classList.remove("rotate90")

      salesOption.current.classList.toggle("open-dropdown-160")
      salesChevron.current.classList.toggle("rotate90")
    }
    if(menuName == "customers") {
      productsOption.current.classList.remove("open-dropdown")
      productsChevron.current.classList.remove("rotate90")
      instagramOption.current.classList.remove("open-dropdown-40")
      instagramChevron.current.classList.remove("rotate90")
      salesOption.current.classList.remove("open-dropdown-160")
      salesChevron.current.classList.remove("rotate90")
      designerOption.current.classList.remove("open-dropdown-200")
      designerChevron.current.classList.remove("rotate90")
      websiteSetupOption.current.classList.remove("open-dropdown-320")
      websiteSetupChevron.current.classList.remove("rotate90")

      customersOption.current.classList.toggle("open-dropdown-40")
      customersChevron.current.classList.toggle("rotate90")
    }
    if(menuName == "designer") {
      productsOption.current.classList.remove("open-dropdown")
      productsChevron.current.classList.remove("rotate90")
      instagramOption.current.classList.remove("open-dropdown-40")
      instagramChevron.current.classList.remove("rotate90")
      salesOption.current.classList.remove("open-dropdown-160")
      salesChevron.current.classList.remove("rotate90")
      customersOption.current.classList.remove("open-dropdown-40")
      customersChevron.current.classList.remove("rotate90")
      websiteSetupOption.current.classList.remove("open-dropdown-320")
      websiteSetupChevron.current.classList.remove("rotate90")

      designerOption.current.classList.toggle("open-dropdown-200")
      designerChevron.current.classList.toggle("rotate90")
    }
    if(menuName == "websiteSetup") {
      productsOption.current.classList.remove("open-dropdown")
      productsChevron.current.classList.remove("rotate90")
      instagramOption.current.classList.remove("open-dropdown-40")
      instagramChevron.current.classList.remove("rotate90")
      salesOption.current.classList.remove("open-dropdown-160")
      salesChevron.current.classList.remove("rotate90")
      customersOption.current.classList.remove("open-dropdown-40")
      customersChevron.current.classList.remove("rotate90")
      designerOption.current.classList.remove("open-dropdown-200")
      designerChevron.current.classList.remove("rotate90")

      websiteSetupOption.current.classList.toggle("open-dropdown-320")
      websiteSetupChevron.current.classList.toggle("rotate90")
    }
   
  }

  return (
    <aside className="w-[265px] bg-[#141423] min-h-[100vh] h-[100%] overflow-auto">
      <a className="py-[17px] px-[25px] bg-[#1a1a27] flex items-center">
        <div className="max-w-[150px] h-[31px]">
          <span className="image_container">
            <Image src={logo} alt="image" />
          </span>
        </div>
      </a>
      <div className="w-[100%] py-[15px] px-[18px]">
        <input
          placeholder="Search in menu"
          className="fsr w-[100%] h-[31px] bg-[#8f97ab26] py-[0.25rem] px-[0.5rem] text-[#fff] text-[.875rem] leading-[1.5] rounded-[0.2rem]"
        />
      </div>
      <i className="las la-battery-three-quarters"></i>
      <ul className={`${styles.aside_options}`}>
        <li className={`${styles.active_li} py-[10px] px-[25px] min-h-[40px] text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`}><a className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Dasboard</a></li>
        <li className={` text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("products")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Products</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={productsChevron}></div></a>
        
          <div className="h-[0] overflow-hidden taPoint3" ref={productsOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>add new product</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>all products</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>designer products</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>category</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>sheila length</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>product type</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>products style</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>product occasion</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>size & fit</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>fabric types</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>fabric weights</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>care instructions</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>shipping and return</a></li>
            </ul>
          </div>  
        
        </li>
        <li className={`text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("instagram")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Instagram Catalogue</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={instagramChevron}></div></a>
           <div className="h-[0] overflow-hidden taPoint3" ref={instagramOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>download instagram catalogue</a></li>
            </ul>
          </div>  
        </li>

        <li className={`text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("sales")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Sales</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={salesChevron}></div></a>
           <div className="h-[0] overflow-hidden taPoint3" ref={salesOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>all orders</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>designer orders</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>pick-up point order</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>coupon</a></li>
            </ul>
          </div>  
        </li>

        <li className={`text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("customers")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Customers</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={customersChevron}></div></a>
           <div className="h-[0] overflow-hidden taPoint3" ref={customersOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>customer list</a></li>
            </ul>
          </div>  
        </li>

        <li className={`text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("designer")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Designer</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={designerChevron}></div></a>
           <div className="h-[0] overflow-hidden taPoint3" ref={designerOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>all designer</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>payouts</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>payout requests</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>designer commission</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>designer verification form</a></li>
            </ul>
          </div>  
        </li>

        <li className={`text-[#a2a3b7] text-[0.875rem] capitalize cursor-pointer overflow-hidden`} onClick={() => openDropDown("websiteSetup")}><a className="flex items-center justify-between py-[10px] px-[25px] min-h-[40px]"><div className="flex items-center"><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>Website Setup</div><div className="w-[5px] h-[10px] bg-[#a2a3b7] opacity-[.6] mr-[7px] taPoint3" ref={websiteSetupChevron}></div></a>
           <div className="h-[0] overflow-hidden taPoint3" ref={websiteSetupOption}>
            <ul className={`${styles.aside_options}`}>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>manage menus</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] uppercase cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px]" ><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>BESPOKE</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>footer</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>facebook</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>homepage settings</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>languages</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>pages</a></li>
              <li className={`text-[#a2a3b7] text-[0.8125rem] capitalize cursor-pointer`}><a className="flex items-center pl-[30px] py-[10px] pr-[0px] min-h-[40px] "><div className="w-[15px] h-[15px] bg-[#a2a3b7] rounded-full opacity-[.6] mr-[7px]"></div>size guide</a></li>
            </ul>
          </div>  
        </li>

      </ul>  
    </aside>
  );
}

export default Sidebar;
