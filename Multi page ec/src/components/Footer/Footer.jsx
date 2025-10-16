import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="f-sub-footer-cols-section">
                <div className="f-subs-section">
                    <h2>Subscribe to the Rüya newsletter</h2>
                    <p>Get updates on our newest collections, special discounts, and exclusive bridal designs.</p>
                    <button>Subscribe Now</button>
                </div>

                <div className="f-nav-section-col">
                    <h4>Collections</h4>
                    <ul className="f-nav-links">
                        <li><a href="#">Wedding Dresses</a></li>
                        <li><a href="#">Evening Gowns</a></li>
                        <li><a href="#">Bridesmaid Dresses</a></li>
                        <li><a href="#">Jewelry</a></li>
                        <li><a href="#">Accessories</a></li>
                    </ul>
                </div>

                <div className="f-nav-section-col">
                    <h4>Customer Care</h4>
                    <ul className="f-nav-links">
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Size Guide</a></li>
                        <li><a href="#">Contact Support</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="f-nav-section-col">
                    <h4>About Rüya</h4>
                    <ul className="f-nav-links">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Craftsmanship</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Lookbook</a></li>
                        <li><a href="#">Reviews</a></li>
                    </ul>
                </div>

                <div className="f-nav-section-col">
                    <h4>Legal</h4>
                    <ul className="f-nav-links">
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Our Team</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                    </ul>
                </div>

            </div>
            <div className="f-bottom-bar">
                <p>© 2025 Rüya Bridal — All Rights Reserved</p>
                <p>[ Terms & Conditions ] [ Privacy Policy ]</p>
                <div className="f-social-links">
                    <ul>
                        <li>Whatsapp</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Twitter</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer