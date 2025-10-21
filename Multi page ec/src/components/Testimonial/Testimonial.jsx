import React from 'react'
import './testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import personImg from '../../assets/svgs/person.svg';
import useFetchData from '../../hooks/useFetchData';
const Testimonial = () => {
    const { data, loading, error } = useFetchData('/testimonial_data.json');

    return (
        <section className="testimonial">
            <div className="testimonial-header">
                <h2>What Our Brides Say</h2>
                <p>Discover what our clients say about their Rüya experience.</p>
            </div>

            <div className="testimonial-slider">
                <Swiper
                    modules={[Navigation, Pagination, A11y]}   // ✅ removed Scrollbar module
                    spaceBetween={1}
                    slidesPerView={1}
                    slidesPerGroup={1}
                    pagination
                    navigation                     // ✅ keep arrows
                    loop={false}                    // ✅ loop through slides
                    onSwiper={(swiper) => console.log('Swiper initialized:', swiper)}
                    onSlideChange={() => console.log('Slide changed')}
                >
                    {data.map((client) => (
                        <SwiperSlide key={client.id}>
                            <div className="client-box">



                                <img src={client.image || personImg} alt={client.name || "Client"} onError={(e) => (e.target.src = personImg)} />
                                <div className="client-text">
                                    <p>{client.message}</p>
                                    <span className="client-name">
                                        {client.name}
                                    </span>
                                    <span>rating:{client.rating}</span>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

        </section>
    )
}

export default Testimonial