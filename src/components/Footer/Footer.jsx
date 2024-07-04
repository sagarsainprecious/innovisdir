import React from 'react';
import '../../assets/stylesheets/style.css'
import footerbg from '../../assets/images/footer-bg.png'

const Footer = () => {
    return (
        <section className="footer-section" style={{ backgroundImage: `url(${footerbg})` }}>
            <div className="inner-footer-section row ms-auto me-auto">
                <div className="col-12 col-sm-6 col-lg-4 footer-about">
                    <div className="footer-heading">- About</div>
                    <div className="mb-2">Innovis Law Partners are committed towards helping corporations & individuals to achieve desired results within optimum effort and time.</div>
                    <div className="footer-contact"><strong>Call Us:</strong> <a href="tel: +91-9144526224">+91-9144526224</a></div>
                    <div className="footer-contact"><strong>Reach Us At:</strong> <a href="mailto:info@innovispartners.com">info@innovispartners.com</a></div>
                </div>
                <div className="footer-list mt-4 mt-lg-0 d-flex justify-content-between row ms-auto me-auto col-12 col-sm-12 col-lg-8">
                    <div className="col-12 col-sm-4 ps-0 pe-0">
                        <div className="footer-heading">- Services</div>
                        <ul className="ps-4">
                            <li>Consulting</li>
                            <li>Litigation</li>
                            <li>Documentation</li>
                            <li>Arbitration</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 ps-0 pe-0">
                        <div className="footer-heading">- Verticals</div>
                        <ul className="ps-4">
                            <li>Corporate</li>
                            <li>IPR</li>
                            <li>Civil</li>
                            <li>Criminal</li>
                        </ul>
                    </div>
                    <div className="col-12 col-sm-4 ps-0 pe-0">
                        <div className="footer-heading">- Legal</div>
                        <ul className="ps-4">
                            <li>Terms</li>
                            <li>Legal</li>
                            <li>Privacy</li>
                            <li>License</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bottom-footer-section">
                <div>2024 © Law Consulting - Copyright All Rights Reserved</div>
            </div>
        </section>
    );
}

export default Footer;