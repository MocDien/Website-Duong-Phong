import React, { useEffect } from "react";
import Container from "@srccommons/Container";
import Image from "next/image";
import Link from "next/link";
import styles from "@assets/scss/home.module.scss";
import logo from "@assets/images/logo.png";
import MenuMobile from "../../commons/MenuMobile";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@assets/scss/home.scss";
import Slider from "react-slick";
import icLeft from "@assets/images/arrow_left.svg";
import icRight from "@assets/images/arrow_right.svg";
// import icon1 from "@assets/images/icon1.svg";
// import icon2 from "@assets/images/icon2.svg";
// import icon3 from "@assets/images/icon3.svg";
import icon1 from "@assets/images/ic_banner1.svg";
import icon2 from "@assets/images/ic_banner2.svg";
import icon3 from "@assets/images/ic_banner3.svg";
import icon4 from "@assets/images/ic_banner1_en.svg";
import icon5 from "@assets/images/ic_banner2_en.svg";
import icon6 from "@assets/images/ic_banner3_en.svg";

import Translations from "@srccommons/Translations";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div
        className={`hidden h-[3.5rem] w-[3.5rem] md:h-[5rem] md:w-[5rem] rounded-full  bg-black md:flex items-center justify-center button_hover`}
      >
        <Image alt="" src={icRight} />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div
        className={`hidden h-[3.5rem] w-[3.5rem] md:h-[5rem] md:w-[5rem] rounded-full bg-black md:flex items-center justify-center button_hover`}
      >
        <Image alt="" src={icLeft} />
      </div>
    </div>
  );
}

const BannerTemplate = ({ slide }: { slide: string }) => {
  const { i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <div className="relative w-full">
      <div className={`${slide} h-[300px] md:h-[500px] lg:h-lvh 3xl:h-[75vh] rounded`}>
        {/* <Image alt="" src={banner} className='w-full h-full' /> */}
      </div>
      <div className="absolute bottom-0 w-full pb-10">
        <Container>
          <div className="md:justify-center md:items-center   md:gap-5 lg:gap-10 md:pb-8  md:flex-row flex items-start">
            <div className="z-10  h-[42px] md:h-auto md:grow">
              <Image
                className={`h-full w-full`}
                src={lang === "en" ? icon4 : icon1}
                alt=""
              />
            </div>
            <div className="z-10 h-[42px] md:h-auto  md:grow">
              <Image
                className="h-full w-full"
                src={lang === "en" ? icon5 : icon2}
                alt=""
              />
            </div>
            <div className="z-10 h-[42px] md:h-auto  md:grow">
              <Image
                className="h-full w-full"
                src={lang === "en" ? icon6 : icon3}
                alt=""
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const BannerComponentV2 = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 135) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`header-v2  top-0 z-40 w-full  ${
          !scrolled ? "absolute top-10 duration-500" : "sticky-header shadow"
        }`}
      >
        <Container>
          <MenuMobile />
          <div className="hidden xl:block">
            <div className="flex items-center gap-14 justify-center py-3">
              <Link
                href={"/"}
                className={`${styles.menu_single} ${styles.active} menu_single font-avo_bold text-[#6D6E71] text-[18px] py-3`}
              >
                <Translations text="Trang chủ" />
              </Link>
              <div className={`${styles.submenu} relative`}>
                <h3
                  className={`font-avo_bold  text-[#6D6E71] text-[18px] cursor-pointer py-3`}
                >
                  <Translations text="Sản phẩm" />{" "}
                  <i
                    className="fa fa-angle-down"
                    style={{ color: "#6D6E71" }}
                  ></i>
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
                <h3 className="text-[#6D6E71] font-avo_bold text-[18px] cursor-pointer py-3">
                  <Translations text="Dịch vụ" />{" "}
                  <i
                    className="fa fa-angle-down"
                    style={{ color: "#6D6E71" }}
                  ></i>
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
                  className={`${styles.menu_single} font-avo_bold text-[#6D6E71] text-[18px] py-3`}
                >
                  <Translations text="Về chúng tôi" />
                </Link>
              </div>
              <div>
                <Link
                  href={"/"}
                  className={`${styles.menu_single} font-avo_bold text-[#6D6E71] text-[18px] py-3`}
                >
                  <Translations text="Tin tức" />
                </Link>
              </div>
              <div>
                <Link
                  href={"/contact"}
                  className={`${styles.menu_single} font-avo_bold text-[#6D6E71] text-[18px] py-3`}
                >
                  <Translations text="Liên hệ" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Slider
        className="banner-slide"
        infinite={true}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        adaptiveHeight={false}
        // autoplaySpeed={3000}
        speed={1000}
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {/* <BannerTemplate slide="slide1" />
        <BannerTemplate slide="slide2" /> */}
        <BannerTemplate slide="slide3" />
        <BannerTemplate slide="slide4" />
        <BannerTemplate slide="slide5" />
        <BannerTemplate slide="slide6" />
        <BannerTemplate slide="slide7" />
        <BannerTemplate slide="slide8" />
        <BannerTemplate slide="slide9" />
        <BannerTemplate slide="slide10" />
        <BannerTemplate slide="slide11" />
        <BannerTemplate slide="slide12" />
      </Slider>
    </>
  );
};

export default BannerComponentV2;
