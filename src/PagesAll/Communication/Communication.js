import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { FaAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Communication.css';
// ..
AOS.init();  

const Communication = () => {
    const [loading, setLoading] = useState([]);

    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },3000)
    },[])
    //    email add
        const form = useRef();
        const sendEmail = (e) => {
         e.preventDefault();
            emailjs.sendForm('gmail', 'template_sthmo77', form.current, 'rWbHLgpjfv4KHXkZ3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
        };

    return (
        <div className='container mb-5'>
            {
                loading ?<div className="spinner">
                <ThreeDots 
                  height="80" 
                  width="80" 
                  radius="9"
                  color="#4fa94d" 
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                  /></div>  : 
                <div>
                 <h1 className='text-center mt-5 mb-4 fw-bold'         data-aos="fade-up"
                data-aos-duration="3000">আমাদের সাথে যোগাযোগ করেন</h1>
                <hr className='mb-4'/>
                {/* contract-details */}
                <div className='d-flex justify-content-center  container mt-5'>
                    {/* left-side */}
                    <div className='contact-details col-md-6 col-lg-6 col-sm-12'>
                        <div className='d-flex justify-content-center align-items-center mb-3'>
                            <div className='contact-design w-50 me-2'>
                                <h5 className='text-center fw-bold'>ফোন নাম্বার:</h5>
                                <hr/>
                                <p className='fw-bold text-center '><FiPhoneCall className='me-2 ' style={{color:"#ee7600"}}/> ০১৮৪৩৭২০৫১৬</p>
                                <p className='fw-bold text-center ' ><FiPhoneCall className='me-2' style={{color:"#ee7600"}}/>০১৮৪৩৭২০৫১৬</p>
                            </div>
                            <div className='w-50 contact-design'>
                                <p className='center fs-bold'>ই-মেইল :</p>
                                <hr/>
                                <p className='text-center text-dark  fw-bold'><AiOutlineMail className='me-2 ' style={{color:"#ee7600"}}/>  mdshakiil720516@gmail.com </p> 
                            </div>
                        </div>
                        <div className='contact-third'>
                            <p className='text-center fw-bold'>ঠিকানা :</p>
                            <hr/>
                            <p className='text-center text-dark fw-bold'><FaAddressBook className='me-2' style={{color:'#ee7600'}}/>  আতিকুল আলম সড়ক,একাডেমী, ফেনী </p>
                        </div>
                        <div>
                         <p className='text-dark fw-bold text-center'>
                             <div className="mapouter shadow-sm mt-5"><div className="gmap_canvas">
                                <iframe width="523" height="348" id="gmap_canvas" src="https://maps.google.com/maps?q=academy,feni%20,%20bangladesh&t=&z=15&ie=UTF8&iwloc=&output=embed" scrolling="no" >
                                </iframe>
                                <Link to="https://123movies-to.org"></Link><br/>
                                <style>.gmap_canvas</style></div></div>
                             </p>
                        </div>
                    </div>
                    {/* right-side */}
                    <div className='contact-form col-md-6 col-lg-6 col-sm-12 ms-4'>
                        <div>
                            <h4 className='text-dark'>ফরম পূরন করুন</h4>
                        <form ref={form} onSubmit={sendEmail}>
                            <label className='pb-2 text-dark fw-bold'>Name</label><br/>
                            <input className='contact-input' type="text" name="user_name" required/>
                            <br/>
                            <label className='pb-2 text-dark fw-bold'>Email</label><br/>
                            <input className='contact-input' type="email" name="user_email" required /><br/>
                            <label className='pb-2 text-dark fw-bold'>Phone Number</label><br/>
                            <input className='contact-input' type="number" name="user_email" required />
                            <br/>
                            <label className='pb-2 text-dark fw-bold'>Message</label><br/>
                            <textarea placeholder='message' className='pb-3' name="message"  width={'500px'} height={'300px'} required/>
                            <br/>
                            <br/>
                            <button className='contact-input btn btn-contact fw-bold' type="submit" value="Send">Submit</button>
                            </form>
                        </div>
                    </div>
                </div> 
                </div>
                
            }
        </div>
    );
};

export default Communication;