import React, { useState, useEffect } from 'react';
import './trendSectionSwiper.css';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper styles (if not already done globally)
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const TrendSection = () => {
    const [tDresses, setDresses] = useState([]);

    useEffect(() => {
        const fetchTrendDress = async () => {
            try {
                // ✅ Make sure file is in /public folder and use absolute path
                const resp = await fetch('/dress_data.json');
                if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
                const data = await resp.json();
                setDresses(data);
            } catch (error) {
                console.error("Error in fetching:", error);
            }
        };

        fetchTrendDress();
    }, []);

    return (
        <div className="trend-section">
            <div className="trend-header">
                <h1>Trend Section</h1>
            </div>

            <div className="trend-swiper">
                <Swiper
                    modules={[Navigation, A11y]}   // ✅ removed Scrollbar module
                    spaceBetween={2}
                    slidesPerView={2}
                    slidesPerGroup={1}
                    navigation                     // ✅ keep arrows
                    loop={true}                    // ✅ loop through slides
                    breakpoints={{
                        0: { slidesPerView: 1 },     // 👶 mobile
                        500: { slidesPerView: 2 },   // 📱 tablet
                        1024: { slidesPerView: 2 },  // 💻 desktop
                    }}
                    onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
                    onSlideChange={() => console.log('Slide changed')}
                >
                    {tDresses.map((dress) => (
                        <SwiperSlide key={dress.id}>
                            <Card
                                dressName={dress.name}
                                price={dress.price}
                                img={dress.image}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default TrendSection;
