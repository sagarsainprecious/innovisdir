import React from 'react';
import '../../assets/stylesheets/style.css'; 
import service1Img from '../../assets/images/service-1.png';
import service2Img from '../../assets/images/service-2.png';
import service3Img from '../../assets/images/service-3.png';
import service4Img from '../../assets/images/service-4.png';
import service5Img from '../../assets/images/service-5.png';
import service6Img from '../../assets/images/service-6.png';
import service7Img from '../../assets/images/service-7.png';
import service8Img from '../../assets/images/service-8.png';

const Services = () => {

    // Array of service data
    const services = [
        {
            imgSrc: service1Img,
            title: 'Intellectual Property Rights',
            content: 'We, at INNOVIS LAW PARTNERS, specialize in the dynamic realm of intellectual property law, encompassing TRADEMARK, COPYRIGHT',
        },
        {
            imgSrc: service2Img,
            title: 'Startup Advisory and Compliance',
            content: 'We have a proven track record of supporting early-stage startups worldwide, leveraging our extensive industry experience gained from advising large corporations and multinationals',
        },
        {
            imgSrc: service3Img,
            title: 'MSME Litigation and Compliance',
            content: 'We understands the unique legal needs and challenges faced by Micro, Small, and Medium Enterprises (MSMEs)',
        },
        {
            imgSrc: service4Img,
            title: 'Employment Law',
            content: 'We have extensive experience in advising on issues concerning labor, employment, social security, and industrial relation laws',
        },
        {
            imgSrc: service5Img,
            title: 'Real Estate Regulation and Development Services',
            content: 'We offers specialized legal services to assist clients in navigating the intricacies of the Real Estate Regulation and Development Act',
        },
        {
            imgSrc: service6Img,
            title: 'Environmental Law',
            content: 'Our legal team possesses extensive experience in both civil and criminal environmental litigation matter',
        },
        {
            imgSrc: service7Img,
            title: 'Sports Law',
            content: 'With a deep understanding of the sports industry, we offer comprehensive knowledge in all aspects of sports litigation',
        },
        {
            imgSrc: service8Img,
            title: 'TMT Law',
            content: 'Our TMT services stand at the forefront of the industry, providing clients with cutting-edge insights and commercial solutions backed by extensive sector experience',
        }
    ];

    return (
        <section className="service-section">
            <div className="section-heading">
                <div>Bouquet of Services</div>
                <div>We cater all the major verticals</div>
            </div>
            <div className="service-card-container landing-page">
                {services.map((service, index) => (
                    <div key={index} className="service-card-div">
                        <div className="overflow-hidden service-img-parent">
                            <a href="service-detail-page.html">
                                <img className="service-card-img" src={service.imgSrc} alt={service.title} />
                            </a>
                        </div>
                        <div className="service-card-heading">
                            <a href="service-detail-page.html">
                                {service.title}
                            </a>
                        </div>
                        <div className="service-card-content">{service.content}</div>
                    </div>
                ))}
            </div>
            <div className="text-center">
                <a href="services.html" className="custom-btn">View More</a>
            </div>
        </section>
    );
}

export default Services;
