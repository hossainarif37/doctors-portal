import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <div className="footer  p-10 text-base-content">
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className="p-4 flex justify-center gap-1 flex-col lg:flex-row text-center text-base-content">
                <p>Copyright © {year} - All right reserved by </p>
                <p className='font-semibold'> Trusthworthy Tech Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;