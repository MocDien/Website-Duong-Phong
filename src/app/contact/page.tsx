"use client";

import BannerSingle from "@srccommons/BannerSingle";
import Container from "@srccommons/Container";
import Screen from "@srccommons/Screen";
import { useRouter } from "next/navigation";
import React from "react";
import logoBlack from "@assets/images/logo.png";
import phone2 from "@assets/images/phone1.svg";
import { IconEmail, IconFax, IconLocation, IconPhone } from "@srccommons/icons";
import Image from "next/image";
import "../../../i18n";
import Translations from "@srccommons/Translations";

const ContactUs = () => {
  const router = useRouter();

  return (
    <>
      <Screen _className="product-page relative">
        <BannerSingle classImage={"bg-banner-contact"} />
        <section>
          <Container>
            {/* <h1 className='border-l-4 pl-5 border-gray-800 text-[32px] mb-7 xl:mb-0 md:text-[40px] mt-10 '>GỬI LỜI NHẮN</h1>
                        <div className='ps-3 pt-5'>
                            <p className='mb-3 font-avo_bold'>Nếu bạn muốn đặt hàng với yêu cầu đặc biệt, góp ý, nhắn nhủ hay đơn giản là một ý nghĩ bất chợt tới chúng tôi, xin đừng ngần ngại. </p>
                            <p className='font-avo_bold'>Mọi lời nhắn của bạn đều rất có giá trị với chúng tôi. Và ngược lại, chúng tôi sẽ cố gắng phản hồi nhanh nhất có thể vì không điều gì tệ hơn việc để khách quý của mình phải chờ đợi quá lâu.</p>
                        </div> */}
            <div className="md:w-4/5 lg:w-3/5 mx-auto ">
              {/* <form className='relative  pt-10 pb-[200px]'>
                                <div className='form-group'>
                                    <input className='placeholder:text-[#6D6E71] w-full' placeholder='Tên*' />
                                </div>
                                <div className='form-group'>
                                    <input className='placeholder:text-[#6D6E71] w-full' placeholder='Email*' />
                                </div>
                                <div className='form-group'>
                                    <input className='placeholder:text-[#6D6E71] w-full' placeholder='Số điện thoại*' />
                                </div>
                                <div className='form-group'>
                                    <textarea className='placeholder:text-[#6D6E71] w-full' rows={4} placeholder='Lời nhắn gửi*' ></textarea>
                                </div>
                                <h3 className='text-[17px] lg:text-[26px] font-avo_bold'>SẢN PHẨM VÀ DỊCH VỤ QUÝ KHÁCH HÀNG QUAN TÂM</h3>
                                <div className='grid grid-cols-2 mt-3'>
                                    <div className='col-span-2 md:col-span-1 flex items-center mb-3'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-an-pham" name="c-an-pham" type="checkbox" value="yes" />
                                        <label htmlFor="c-an-pham">Ấn phẩm </label>
                                    </div>
                                    <div className='col-span-2 md:col-span-1 flex items-center mb-3'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-thiet-ke-an-pham" name="c-thiet-ke-an-pham" type="checkbox" value="yes" />
                                        <label htmlFor="c-thiet-ke-an-pham">Thiết kế ấn phẩm </label>
                                    </div>
                                    <div className='col-span-2 md:col-span-1 flex items-center mb-3'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-bao-bi" name="c-bao-bi" type="checkbox" value="yes" />
                                        <label htmlFor="c-bao-bi">Bao bì – hộp giấy</label>
                                    </div>
                                    <div className='col-span-2 md:col-span-1 flex items-center mb-3'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-tao-mau" name="c-tao-mau" type="checkbox" value="yes" />
                                        <label htmlFor="c-tao-mau">Thiết kế - tạo mẫu bao bì, hộp
                                        </label>
                                    </div>
                                    <div className='col-span-2 md:col-span-1 flex items-center mb-3'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-thiet-ke-quang-cao" name="c-thiet-ke-quang-cao" type="checkbox" value="yes" />
                                        <label htmlFor="c-thiet-ke-quang-cao">Thiết bị quảng cáo</label>
                                    </div>


                                    <div className='col-span-2 md:col-span-1 flex items-start'>
                                        <input className='h-[20px] w-[20px] me-2' id="c-quay-ke" name="c-quay-ke" type="checkbox" value="yes" />
                                        <label htmlFor="c-quay-ke">
                                            Thiết kế - tạo mẫu quầy kệ, tủ <br className='sm:hidden md:block' /> trưng bày sản phẩm (POSM)  </label>
                                    </div>
                                </div>

                                <div className={`absolute bottom-0 right-[50%]`} style={{ transform: 'translateX(50%)' }} >
                                    <button onClick={() => router.push('/products/an-pham', { scroll: false })} className={`follow_me spin circle h-[130px] w-[130px] xl:h-[150px] xl:w-[150px] text-[21.66px] hover:text-[21.66px]`}>Gửi lời nhắn
                                        <div></div>
                                    </button>
                                </div>
                            </form> */}
              <div className="w-full my-10 h-[1px] "></div>
              <div className="pb-6 lg:pb-[6rem]">
                <div className="flex gap-5 flex-wrap items-start justify-between">
                  <div className="">
                    <h1 className="custom-text-mode text-lg sm:text-xl font-extrabold lg:text-[17px] mb-2 uppercase">
                      <Translations text="company" />
                      <br className="hidden lg:block" />
                      <Translations text="Dương Phong" />
                    </h1>
                    <div>
                      <div className="flex custom-text-mode gap-2">
                        <IconLocation
                          color="white"
                          className="w-[12px] custom-icon-show "
                        />
                        <IconLocation
                          color="black"
                          className="w-[12px] custom-icon-hidden"
                        />
                        <span className="text-[15px] font-medium">
                          <Translations text="66/52 Phổ Quang, P.2," />{" "}
                          <Translations text="Q. Tân Bình, TP. Hồ Chí Minh" />
                        </span>
                      </div>
                      <div className="flex justify-between flex-wrap">
                        <div className="flex custom-text-mode gap-2">
                          <IconPhone
                            color="white"
                            className="w-[12px] custom-icon-show"
                          />
                          <IconPhone
                            color="black"
                            className="w-[12px] custom-icon-hidden"
                          />

                          <a href="tel:+842838441111">
                            <span className="text-[15px]">
                              {" "}
                              (+84) 28 3844 1111
                            </span>
                          </a>
                        </div>
                        <div className="flex items-center custom-text-mode gap-2">
                          <IconFax className="w-[15px] custom-icon-hidden" />
                          <a href="tel:+842839971009">
                            <span className="custom-text-mode text-[15px]">
                              (+84) 283 997 1009
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex custom-text-mode gap-2">
                          <a href="tel:+84906331246">
                            <span className="text-[15px]">
                              Hotline: (+84) 906 331 246{" "}
                              <span className="mx-10">|</span>{" "}
                            </span>
                          </a>
                          <a href="tel:+84909982246">
                            <span className="text-[15px]">
                              (+84) 909 982 246
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="flex custom-text-mode gap-2">
                        <IconEmail
                          color="white"
                          className="w-[12px] custom-icon-show"
                        />
                        <IconEmail
                          color="black"
                          className="w-[12px] custom-icon-hidden"
                        />

                        <span className="text-[15px]">contact@dpa.vn</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex rounded-full items-center gap-4 bg-[#FF9D00] p-2 px-[20px]">
                    <div className="bg-logo-custom-mode rounded-full w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] p-3">
                      <Image alt="" className="w-full h-full" src={logoBlack} />
                    </div>
                    <div>
                      <div className="flex items-center gap-4">
                        <Image width={17} alt="" src={phone2} />
                        <p className="font-extrabold custom-text-logo-mode text-base lg:text-lg pe-1">
                          <Translations text="Gọi cho chúng tôi" />
                        </p>
                      </div>
                      {/* <a href="tel:+842838441111">
                        <span className=" text-base lg:text-3xl font-bold pr-2">
                          {" "}
                          (+84) 28 3844 1111
                        </span>
                      </a> */}
                      <span>Hotline:</span>
                      <br />
                      <a href="tel:+84906331246">
                        <span className="text-[15px] font-bold">
                          {" "}
                          (+84) 906 331 246 <span className="mx-2">|</span>{" "}
                        </span>
                      </a>
                      <a href="tel:+84909982246">
                        <span className="text-[15px] font-bold">
                          (+84) 909 982 246
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7836.521263707445!2d106.54401639357908!3d10.867770499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b93635e7d83%3A0x7784b185f7215232!2zTmjDoCBpbiBExrDGoW5nIFBob25n!5e0!3m2!1svi!2s!4v1709973614919!5m2!1svi!2s"
              className="w-full max-w-full pb-10 h-lvh"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Container>
        </section>
      </Screen>
    </>
  );
};

export default ContactUs;
