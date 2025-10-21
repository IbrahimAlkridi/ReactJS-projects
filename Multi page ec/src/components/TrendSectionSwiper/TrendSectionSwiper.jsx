import React, { useState, useEffect } from 'react';
import './trendSectionSwiper.css';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import useFetchData from '../../hooks/useFetchData';
// Import Swiper styles (if not already done globally)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TrendSection = () => {
    const { data, loading, error } = useFetchData('/dress_data.json');

    if (loading) {
        return (
            <div className="trend-section loading">
                <h1>Trend Section</h1>
                <p>Loading dresses...</p>
            </div>
        );
    }

    // 🔸 Handle error state
    if (error) {
        return (
            <div className="trend-section error">
                <h1>Trend Section</h1>
                <p>Failed to load dresses. Please try again later.</p>
            </div>
        );
    }

    return (
        <div className="trend-section">
            <div className="trend-header">
                <h1>Trend Section</h1>
            </div>

            <div className="trend-swiper">
                <Swiper
                    modules={[Navigation, A11y]}   // ✅ removed Scrollbar module
                    spaceBetween={3}
                    slidesPerView={4}
                    slidesPerGroup={1}
                    navigation                     // ✅ keep arrows
                    loop={false}                    // ✅ loop through slides
                    breakpoints={{
                        0: { slidesPerView: 1 },     // 👶 mobile
                        700: { slidesPerView: 2 },
                        1000: { slidesPerView: 3 },    // 📱 tablet
                        1224: { slidesPerView: 4 },  // 💻 desktop
                    }}
                    onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
                    onSlideChange={() => console.log('Slide changed')}
                >
                    {data.map((dress) => (
                        <SwiperSlide key={dress.id}>
                            <Card
                                dressName={dress.name}
                                price={dress.price}
                                img={dress.image}
                                id={dress.id}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default TrendSection;
