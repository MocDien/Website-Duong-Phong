"use client";

import React from "react";
import Container from "@srccommons/Container";
import Image from "next/image";
import Link from "next/link";
import styles from "@assets/scss/home.module.scss";
import logo from "@assets/images/logo.png";
import MenuMobile from "./MenuMobile";
import "@assets/scss/home.scss";
import { usePathname } from "next/navigation";
import Translations from "./Translations";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="sticky top-0 bg-white z-30 shadow">
      <Container>
        <MenuMobile />
        <div className="hidden  xl:block">
          <div className="flex items-center gap-14 justify-center py-3 bg-white">
            <Link
              href={"/"}
              className={`${styles.menu_single} font-avo_bold  text-[18px] py-3`}
            >
              <Translations text="Trang chủ" />
            </Link>
            <div className={`${styles.submenu} relative`}>
              <h3 className={`text-[18px] cursor-pointer py-3 font-avo_bold`}>
                <Translations text="Sản phẩm" />{" "}
                <i className="fa fa-angle-down text-[#6D6E71]"></i>
              </h3>
              <div
                className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}
              >
                <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                    <Link
                      href="/products/an-pham"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Ấn Phẩm" />
                    </Link>
                    <Link
                      href="/products/bao-bi-hop-giay"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Bao bì - hộp giấy" />
                    </Link>
                    <Link
                      href="/products/quang-cao-ngoai-troi"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Quảng cáo ngoài trời" />
                    </Link>
                    <Link
                      href="/products/thiet-bi-quang-cao"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Thiết bị quảng cáo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.submenu} relative`}>
              <h3 className=" text-[18px] cursor-pointer font-avo_bold py-3">
                <Translations text="Dịch vụ" />{" "}
                <i className="fa fa-angle-down text-[#6D6E71]"></i>
              </h3>
              <div
                className={`${styles.submenu_show} absolute z-10 flex  max-w-max`}
              >
                <div className=" max-w-md flex-auto overflow-hidden rounded bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-x divide-gray-900/5 bg-gray-50 ">
                    <Link
                      href="/services/thiet-ke-an-pham"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Thiết kế ấn phẩm" />
                    </Link>
                    <a
                      href="/services/thiet-ke-tao-mau-bao-bi"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Thiết kế - tạo mẫu bao bì" />
                    </a>
                    <a
                      href="/services/thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham"
                      className="flex font-avo_bold items-center px-8 text-nowrap  gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100"
                    >
                      <Translations text="Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Image className="h-[70px] w-[150px]" alt="" src={logo} />
            </div>
            <div>
              <Link
                href={"/about-us"}
                className={`${styles.menu_single} ${path.includes("about-us") ? styles.active : ""
                  } font-avo_bold text-[18px] py-3`}
              >
                <Translations text="Về chúng tôi" />
              </Link>
            </div>
            <div>
              <Link
                href={"/news"}
                className={`${styles.menu_single} ${path.includes("news") ? styles.active : ""
                  } font-avo_bold text-[18px] py-3`}
              >
                <Translations text="Tin tức" />
              </Link>
            </div>
            <div>
              <Link
                href={"/contact"}
                className={`${styles.menu_single} ${path.includes("contact") ? styles.active : ""
                  } font-avo_bold text-[18px] py-3`}
              >
                <Translations text="Liên hệ" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
