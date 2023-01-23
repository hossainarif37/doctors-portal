import React from 'react';
import bg from '../../../assets/images/appointment.png'
import Button from '../../../components/Button';


const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div className='pb-16' style={{ backgroundImage: `url(${bg})` }}>
            <form className='lg:w-[450px] m-auto text-center '>
                <div className=' mb-10 pt-16'>
                    <h1 className='text-secondary text-xl font-semibold mb-3'>Contact Us</h1>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <div className='flex flex-col gap-4 mb-5 lg:mb-9 px-5 lg:px-0'>
                    <input type="text" placeholder="Email Address" className="input w-full" />
                    <input type="text" placeholder="Subject" className="input w-full" />
                    <textarea className="textarea w-full" rows='3' placeholder="Your message"></textarea>
                </div>
                <Button handleSubmit={handleSubmit} classNames='capitalize px-7'>Submit</Button>
            </form>
        </div>
    );
};

export default Contact;