"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "@assets/scss/home.module.scss";
import logo2 from "@assets/images/logo.png";
import flagVN from "@assets/images/vietnam.png";
import flagUK from "@assets/images/UK.png";
import { useTranslation } from "react-i18next";
import Translations from "./Translations";

const menu = [
  {
    title: "Trang chủ",
    path: "/",
  },
  {
    title: "Sản phẩm",
    path: "/",
    subMenu: [
      {
        title: "Ấn Phẩm",
        path: "/products/an-pham",
      },
      {
        title: "Bao bì - hộp giấy",
        path: "/products/bao-bi-hop-giay",
      },
      {
        title: "Quảng cáo ngoài trời",
        path: "/products/quang-cao-ngoai-troi",
      },
      {
        title: "Thiết bị quảng cáo",
        path: "/products/thiet-bi-quang-cao",
      },
    ],
  },
  {
    title: "Dịch vụ",
    path: "/",
    subMenu: [
      {
        title: "Thiết kế ấn phẩm",
        path: "/services/thiet-ke-an-pham",
      },
      {
        title: "Thiết kế - tạo mẫu bao bì",
        path: "/services/thiet-ke-tao-mau-bao-bi",
      },
      {
        title: "Thiết kế - tạo mẫu quầy kệ, tủ trưng bày sản phẩm",
        path: "/services/thiet-ke-tao-mau-quay-ke-tu-trung-bay-san-pham",
      },
    ],
  },
  {
    title: "Về chúng tôi",
    path: "/about-us",
  },
  {
    title: "Tin tức",
    path: "/news",
  },
  {
    title: "Liên hệ",
    path: "/contact",
  },
  {
    title: "Tiếng Anh",
    path: "#",
    icon: flagUK,
    language: "en" as const,
  },
  {
    title: "Tiếng Việt",
    path: "#",
    icon: flagVN,
    language: "vi" as const,
  },
];
const MenuMobile = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();

  const handleLangItemClick = (lang: "en" | "vi") => {
    i18n.changeLanguage(lang);
  };

  // ** Change html `lang` attribute when changing locale
  useEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  }, [i18n.language]);

  return (
    <div
      className={`${styles.mobile_menu} mobile-menu xl:hidden relative mt-14`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-3 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image alt="" width={80} height={80} src={logo2} />
          </a>
        </div>

        <button
          id="btn-open"
          type="button"
          className="-m-2.5 border inline-flex items-center justify-center rounded-md py-2 px-3 text-gray-700 text-2xl"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="sr-only">Open main menu</span>
          <i className="fa fa-bars text-white "></i>
        </button>
      </nav>
      <div
        className={`${
          open ? styles.menu_show : styles.menu_hidden
        } overflow-hidden  absolute top-16  w-full z-10`}
      >
        <div
          className={`device-x bg-white rounded-md   mx-6 p-2  shadow-lg ring-1 ring-gray-900/5  h-[80%] overflow-y-scroll  ${styles.sidebar}`}
        >
          {menu.map((it, index) => {
            if (it.subMenu) {
              return (
                <div
                  key={it.title}
                  className={`${index != menu.length - 1 ? "border-b" : ""}`}
                >
                  <h3 className="px-5 text-nowrap font-avo_bold p-3 font-semibold text-[#6D6E71] ">
                    <Translations text={it.title} />
                  </h3>
                  <div className="ms-7">
                    {it.subMenu.map((i, idx) => (
                      <Link
                        onClick={() => setOpen(!open)}
                        key={i.title}
                        href={i.path}
                        className={`${
                          idx != it.subMenu.length - 1 ? "border-b" : ""
                        } flex  items-center px-5   gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100`}
                      >
                        <Translations text={i.title} />
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                onClick={() => {
                  if (it.language) {
                    handleLangItemClick(it.language);
                  }
                  setOpen(!open);
                }}
                key={it.title}
                href={it.path}
                className={`${
                  index != menu.length - 1 ? "border-b" : ""
                } flex font-avo_bold  items-center px-5   gap-x-2.5 p-3 font-semibold text-[#6D6E71] hover:bg-gray-100`}
              >
                {it.icon && (
                  <Image
                    style={{ width: 20, height: 20 }}
                    alt=""
                    src={it.icon}
                  />
                )}{" "}
                <Translations text={it.title} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuMobile;
