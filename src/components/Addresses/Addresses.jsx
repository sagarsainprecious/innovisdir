import React from 'react';
import '../../assets/stylesheets/style.css'

const Addresses = () => {
  return (
    <section className="address-section">
      <div className="inner-address-section">
        <div className="section-heading">
          <div>Our Location</div>
          <div>GET In TOUCH with Team Innovis</div>
        </div>
        <div className="d-flex justify-content-between gap-sm-5 gap-3 mt-5 flex-wrap">
          <div className="address-div text-center">
            <div className="fs-4 mb-2 fw-bold address-heading">Bhopal</div>
            <div>704, Vijay Stambh, Opp. Vishal Megamart Zone-I - M.P. Nagar, Bhopal - 462023 (M.P.) India</div>
          </div>
          <div className="address-div text-center">
            <div className="fs-4 mb-2 fw-bold address-heading">Indore</div>
            <div>801, Victoria Urban, 12 Park Rd, Vallabh Nagar, Indore, (M.P.) India</div>
          </div>
          <div className="address-div text-center">
            <div className="fs-4 mb-2 fw-bold address-heading">Bengaluru</div>
            <div>Golden Square Services And Virtual offices, Vittal Mallya Road, Bengaluru, Karnatak 560001</div>
          </div>
          <div className="address-div text-center">
            <div className="fs-4 mb-2 fw-bold address-heading">Mumbai</div>
            <div>206, 2nd floor, Aqua, Church gate Chambers, 5 New Marine Lines, Mumbai 400020</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addresses;