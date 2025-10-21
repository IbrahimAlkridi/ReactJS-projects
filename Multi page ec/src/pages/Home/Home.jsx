import React from 'react'
import MainBanner from '../../components/MainBanner/MainBanner'
import TrendSection from '../../components/TrendSectionSwiper/TrendSectionSwiper'
import Services from '../../components/Services/Services'
import Testimonial from '../../components/Testimonial/Testimonial'
const Home = () => {
    return (
        <>
            <MainBanner />
            <TrendSection />
            <Services />
            <Testimonial />
        </>

    )
}

export default Home