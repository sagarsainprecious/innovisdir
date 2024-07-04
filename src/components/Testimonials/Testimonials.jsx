import React, { useEffect } from 'react';
import '../../assets/stylesheets/style.css'; 
import $ from 'jquery'; 
import 'owl.carousel'; 
import reviewImg from '../../assets/images/4.ayush.png';
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Testimonials = () => {
    return (
        <section className="review-section">
            <div className="inner-review">
                <div className="section-heading">
                    <div>Testimonials</div>
                    <div className="text-white">Client Success Stories: Hear What Our Clients Have to Say!</div>
                </div>
               

   <div className="review-parent-div">
                    <div className="owl-carousel owl-theme d-block mt-5">
<OwlCarousel className='owl-theme' loop margin={10} nav>
                        <div className="item d-flex gap-3 align-items-center">
                            <div className="review-img">
                                <img src={reviewImg} alt="" />
                            </div>
                            <div className="review-content">
                                <div className="review-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur
                                </div>
                                <div className="reviewer-name">John Smith</div>
                                <div className="reviewer-post">CEO, Founder of XYZ</div>
                            </div>
                        </div>
</OwlCarousel>;
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
