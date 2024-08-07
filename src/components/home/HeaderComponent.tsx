'use client'

import Image from 'next/image'
import React, { useEffect } from 'react' 
import location from '@assets/images/loaction.svg'
import flagVN from '@assets/images/vietnam.png'
import flagUK from '@assets/images/UK.png'
import Container from '@srccommons/Container'
import { useTranslation } from 'react-i18next'
import Translations from '@srccommons/Translations'
import { IconPhone } from '@srccommons/icons'

const HeaderComponent = () => {
    const { i18n } = useTranslation()

    const handleLangItemClick = (lang: 'en' | 'vi') => {
        i18n.changeLanguage(lang)
    }

    // ** Change html `lang` attribute when changing locale
    useEffect(() => {
        document.documentElement.setAttribute('lang', i18n.language)
    }, [i18n.language])

    return (
        <div className='bg-header1' >
            <div className='max-w-screen-2xl mx-auto'>
                <div className='hidden md:flex px-10   justify-between items-center py-[9px] flex-wrap sm:px-6' >
                    <div className='items-center  flex'>
                        <Image style={{ width: 20, height: 20 }} alt='' src={location} />
                        <span className="text-white ml-2 font-semibold text-[16.5px]">
                            <Translations text='66/52 Phổ Quang, P.2, Q. Tân Bình, TP. Hồ Chí Minh' />
                        </span>
                    </div>
                    <div className='flex items-center'>
                        <IconPhone
                            color="white"
                            className="w-[15px] custom-icon-hidden"
                        />
                        <a href="tel:+842838441111">
                            <span className="text-white ml-2 font-semibold text-[16.5px]">(+84) 28 3844 1111</span>
                        </a>
                    </div>
                    <div className='flex items-center'>

                        <IconPhone
                            color="white"
                            className="w-[15px] custom-icon-hidden"
                        />
                        <a href="tel:+84906331246">
                            <span className="text-white ml-2 font-semibold text-[16.5px]">(+84) 906 982 246 | </span>
                        </a>
                        <a href="tel:+84909982246">
                            <span className="text-white ml-2 font-semibold text-[16.5px]">(+84) 906 331 246</span>
                        </a>
                    </div>
                    <div className='flex items-center flex-wrap'>
                        <div onClick={() => handleLangItemClick('vi')} className='cursor-pointer font-semibold flex items-center mr-3'> <Image style={{ width: 20, height: 20 }} alt='' src={flagVN} /> <span className="text-white ml-2  text-[15px]"> <Translations text='Tiếng Việt' /></span> </div>
                        <div onClick={() => handleLangItemClick('en')} className='cursor-pointer font-semibold flex items-center'> <Image style={{ width: 20, height: 20 }} alt='' src={flagUK} /> <span className="text-white ml-2  text-[15px]"><Translations text='Tiếng Anh' /></span> </div>
                    </div>
                </div>
            </div>


            <Container >
                <div className='flex md:hidden   justify-between items-center py-[9px] flex-wrap sm:px-6' >
                    <div className='flex w-full justify-end items-center w-full flex-wrap'>
                        <div onClick={() => handleLangItemClick('vi')} className='cursor-pointer font-semibold flex items-center mr-3'> <Image className='w-[15px] h-[15px]' alt='' src={flagVN} /> <span className="text-white ml-2  text-[13px]"> <Translations text='Tiếng Việt' /></span> </div>
                        <div onClick={() => handleLangItemClick('en')} className='cursor-pointer font-semibold flex items-center'> <Image className='w-[15px] h-[15px]' alt='' src={flagUK} /> <span className="text-white ml-2  text-[13px]"><Translations text='Tiếng Anh' /></span> </div>
                    </div>
                    <div className='flex items-center'>
                        <IconPhone
                            color="white"
                            className="w-[15px] custom-icon-hidden"
                        />
                        <a href="tel:+842838441111">
                            <span className="text-white ml-2 font-semibold text-[13px]">(+84) 28 3844 1111</span>
                        </a>
                    </div>
                    <div className='flex items-center'>
                        <IconPhone
                            color="white"
                            className="w-[10px] custom-icon-hidden"
                        />
                        <a href="tel:+842838441111">
                            <span className="text-white ml-2 font-semibold text-[13px]">(+84) 906 982 246 </span>
                        </a>
                    </div>
                    <div className='items-center md:hidden flex'>
                        <Image className='w-[15px] h-[15px]' alt='' src={location} />
                        <span className="text-white ml-2 font-semibold text-[13px]  ">
                            <Translations text='66/52 Phổ Quang, P.2, Q. Tân Bình, TP. Hồ Chí Minh' />
                        </span>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default HeaderComponent
