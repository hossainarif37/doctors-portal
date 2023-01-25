import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../../assets/images/footer.png';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer style={{ backgroundImage: `url(${bg})`, backgroundSize: 'contain' }}>
            <div className="footer  p-10 text-base-content">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className="pt-16 pb-10 flex justify-center gap-1 flex-col lg:flex-row text-center text-base-content">
                <p>Copyright © {year} - All right reserved by </p>
                <p className='font-semibold'> Trusthworthy Tech Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;