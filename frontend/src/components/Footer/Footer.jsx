import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

const Footer = () => {

    const [showPopover, setShowPopover] = useState(false);

    const handleMouseEnter = () => {
        setShowPopover(true);
    };

    const handleMouseLeave = () => {
        setShowPopover(false);
    };

  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Company{showPopover && <div className="popover">Company Name:SportAc Ltd.<br />Delivery Partners: EKart, Delhivery & Our offline services</div>}</li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Products{showPopover && <div className="popover">Clothing<br />Items<br />Shoes</div>}</li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Offices{showPopover && <div className="popover">Branches: Mumbai, Ahmedabad, Pune</div>}</li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>About{showPopover && <div className="popover">SportAc is a dynamic sports e-commerce platform, offering a diverse range of athletic gear and equipment. From premium sportswear to cutting-edge accessories, we empower athletes with top-notch products for peak performance and style.</div>}</li>
            <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Contact{showPopover && <div className="popover">Email-id: vivekpillai0724@gmail.com<br />Phone no: +917083xxxxxx<br />Address: Mumbai</div>}</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icon-container">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram" />
                </a>
            </div>
            <div className="footer-icon-container">
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src={pinterest_icon} alt="Pinterest" />
                </a>
            </div>
            <div className="footer-icon-container">
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Rights Reserved</p>
        </div>
    </div>
  )
}
export default Footer