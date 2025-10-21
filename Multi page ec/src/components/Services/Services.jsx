import React from 'react';
import './services.css';
import customDesign from '../../assets/service_icons/customDesign.png';
import guidence from '../../assets/service_icons/guidence.png';
import jeweleryMatching from '../../assets/service_icons/jeweleryMatching.png';
import worldWide from '../../assets/service_icons/worldWide.png';

const Services = () => {
    return (
        <div className="services-section">
            <h1>Our Services</h1>
            <div className="service-grid">
                <div className="service-card">
                    <img src={customDesign} alt="" />
                    <h3>Custom Dress Design</h3>
                    <p>We bring your vision to life with fully personalized bridal and evening dress designs tailored to your body, style, and occasion.</p>
                </div>
                <div className="service-card">
                    <img src={jeweleryMatching} alt="" />
                    <h3>Accessories & Jewelry Matching</h3>
                    <p>Complete your look with our curated accessories — veils, jewelry, and elegant shoes that match your style.</p>
                </div>
                <div className="service-card">
                    <img src={guidence} alt="" />
                    <h3>Bridal Styling Consultation</h3>
                    <p>Get guided by our expert stylists to find the perfect silhouette, fabric, and accessories for your big day.</p>
                </div>
                <div className="service-card">
                    <img src={worldWide} alt="" />
                    <h3>Worldwide Shipping</h3>
                    <p>No matter where you are, your dream dress finds its way to you — carefully packaged and shipped globally.</p>
                </div>
            </div>
        </div>
    )
}

export default Services