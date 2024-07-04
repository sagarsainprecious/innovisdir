import React from "react";
import '../../assets/stylesheets/style.css';
import count1Img from '../../assets/images/count-1.png' 
import count2Img from '../../assets/images/count-2.png'
import count3Img from '../../assets/images/count-3.png'
import count4Img from '../../assets/images/count-4.png'

function HeroSection() {
  return (
    <>
        <section className="count-section px-0">
            <div className="inner-count-div flex-wrap">
                <div>
                    <img src={count1Img} alt="Count 1" />
                    <div className="count-number">10+</div>
                    <div className="count-text">Years in Business</div>
                </div>
                <div>
                    <img src={count2Img} alt="Count 2" />
                    <div className="count-number">1500+</div>
                    <div className="count-text">Successful Cases</div>
                </div>
                <div>
                    <img src={count3Img} alt="Count 3" />
                    <div className="count-number">1000+</div>
                    <div className="count-text">Satisfied Clients</div>
                </div>
                <div>
                    <img src={count4Img} alt="Count 4" />
                    <div className="count-number">25+</div>
                    <div className="count-text">Pro Consultants</div>
                </div>
            </div>
        </section>
    </>
  );
}

export default HeroSection;
