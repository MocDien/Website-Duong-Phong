import BannerSingle from '@srccommons/BannerSingle'
import Container from '@srccommons/Container'
import Screen from '@srccommons/Screen'
import Image from 'next/image'
import React from 'react'
import styles from '@assets/scss/home.module.scss'
import service1 from '@assets/images/p1.png';
import service2 from '@assets/images/p2.png';
import service3 from '@assets/images/p3.png';
import service4 from '@assets/images/p4.png';
import service5 from '@assets/images/p5.png';
import service6 from '@assets/images/p6.jpg';
import FooterComponent from '@srccomponents/home/FooterComponent'
import Translations from '@srccommons/Translations'

const News = () => {
    return (
        <Screen _className="product-page relative">
            <BannerSingle classImage={'bg-banner-news'} />
            <div className='mt-[6rem]'>
                <div className='bg-banner py-8'>
                    <Container>
                        <h3 className='text-shadown text-center text-white text-[30px] md:text-[35px] uppercase'>
                            <Translations text='Tin tức - Xu hướng' />
                        </h3>
                    </Container>
                </div>

                <Container>
                    <div className="grid grid-cols-12 lg:grid-cols-8 items-stretch gap-1 mt-5 order-first">
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service1} />
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service2} />
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service3} />
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2 ">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service4} />
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service5} />
                            </div>
                        </div>
                        <div className="col-span-6 sm:col-span-4 lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service6} />
                            </div>
                        </div>
                        <div className="hidden lg:block lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service1} />
                            </div>
                        </div>
                        <div className="hidden lg:block lg:col-span-2">
                            <div className={`${styles.image_hover} aspect-square`}>
                                <Image alt="" className="w-full h-full object-cover" src={service3} />
                            </div>
                        </div>

                    </div>
                </Container>
            </div>
            <div className='pt-20'>
                <FooterComponent />
            </div>
        </Screen>
    )
}

export default News
