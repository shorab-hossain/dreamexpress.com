import React, { useEffect, useState } from 'react';
// Import Swiper React components
import 'aos/dist/aos.css';
import { ThreeDots } from 'react-loader-spinner';
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './AllBooks.css';

// import required modules
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Autoplay, Navigation } from "swiper";
import sliderImg1 from '../../../img/Home.png';
import HonoursBook from './../HonoursBook/HonoursBook';


<script>
AOS.init();
</script>



const AllBook = () => {
    Aos.init();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

           useEffect(()=>{
                setLoading(true);
                setTimeout(() =>{
                    setLoading(false)
                },5000)
            },[])
        
    return (
        <div>
            <div className='container'>
                <h1 className='text-center fs-3 mt-5 mb-3 fw-bold'  data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom"
                data-aos-duration="3000">সকল বই লিস্ট </h1>
                <hr/>
                {/* book-categorydesign */}
                {
                    loading ? <div className="spinner">
                        <ThreeDots 
                    height="80" 
                    width="80" 
                    radius="9"
                    color="#4fa94d" 
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                     /></div>
                  :
                    <div className="bookCategory">
                  <div  className="">
                    <div className="d-flex justify-content-center align-item-center">
                    <div>
                        <button className="btn  me-2 fw-bold btn-design" type="submit"><Link className="nav-link text-navItem active fw-bold " to="/HonoursBook">অনার্সের বই সমূহ</Link></button>
                    </div>
                        <div>
                            <button className="btn  me-2 fw-bold btn-design" type="submit">ডিগ্রির বই সমূহ</button>
                        </div>
                        <button className="btn  me-2 fw-bold btn-design" type="submit">পুরাতন বই অনার্স</button>
                        <div>
                            <button className="btn  me-2 fw-bold btn-design" type="submit">পুরাতন বই ডিগ্রির</button>
                        </div>
                        <div>
                        <button className="btn  me-2 fw-bold btn-design" type="submit">ইসলামীক বই</button>
                    </div>
                    <div>
                            <button className="btn  me-2 fw-bold btn-design" type="submit">এইস.এস.সির বই</button>
                    </div>
                    <div>
                     <button className="btn  me-2 fw-bold btn-design" type="submit">অন্যান্য</button>
                   </div>
                    </div>
                    {/* new-section */}
                   {/* <div>
                        <button className="btn btn-primary me-2" type="submit">এস.এস.সি</button>
                   </div>
                    <div>
                          <button className="btn btn-primary me-2" type="submit">প্রোগ্রামিং এন্ড  ফ্রিল্যাংসিং বই</button>
                    </div>  
                   <div>
                        <button className="btn btn-primary me-2" type="submit">ইংরেজী  বই</button>
                   </div> */}


                  </div>  
                </div>
                }
                {/* slider-design */}
                <div className='main-slider mb-5' >
                <Swiper
                         data-aos="fade-up"
                         data-aos-anchor-placement="top-bottom"
                         data-aos-duration="3000"
                        pagination={{
                        clickable: true,
                        }}
                        spaceBetween={30}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        modules={[Autoplay, Navigation]}
                        className="mySwiper">
                        <SwiperSlide>
                            <img className="sliderImg" src={sliderImg1} alt="sliderImg1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sliderImg" src={sliderImg1} alt="sliderImg1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                             <img className="sliderImg" src={sliderImg1} alt="sliderImg1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="sliderImg" src={sliderImg1} alt="sliderImg1"/>
                        </SwiperSlide>
                        {/* <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide> */}
                    </Swiper>
                </div>
                {/*----- all-book section ------*/}
                <div className="allBooks">
                    <div>
                      <HonoursBook></HonoursBook>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllBook;