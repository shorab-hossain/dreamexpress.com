import React from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaSignInAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import logoImg from '../../img/screeshotlogo.png';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
          <div className='col-12 container search-bar'>
            <div>
            <form className="d-flex" role="search">
                    <input className="form-control me-2 search-main" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
            </div>
          </div>
              <nav className="navbar navbar-expand-lg bg-light shadow-sm">
            <div className="container">
                <img className='img-fluid logo-img' src={logoImg} alt={logoImg}/>
                
              {/* <button className="navbar-toggler" type="button"data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button> */}
              {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-2">
                  <li className="nav-item me-2">
                    <Link className="nav-link text-navItem active fw-bold " aria-current="page" to="/bookAll">বইসমূহ</Link>
                  </li>
                  <li className="nav-item me-2">
                    <Link className="nav-link active text-navItem fw-bold " to="/">প্রাপ্তিস্থান</Link>
                   
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link text-navItem active fw-bold me-2" to="/communication">যোগাযোগ</Link>
                  </li>
                  <li className="nav-item me-2">
                     <Link className="nav-link text-navItem active fw-bold " to="#">অন্যান্য</Link>
                  </li>
                  <li className="nav-item me-2">
                     <Link className="nav-link text-navItem active fw-bold " to="cartItems">CartItem</Link>
                  </li>
                </ul>
                  {/*----------- /*right-side button--------*/}
                  <div className='d-flex'>
                      <button className="btn btn-signIn me-2 d-flex" type="submit" style={{border:'2px solid black'}} >
                        <div className='d-flex justify-content-center align-items-center'>
                          <div>
                           <FaSignInAlt className='me-2'/>
                          </div>
                        </div>
                        <span className=' fw-bold btn-signIn'>SignIn</span></button>
                      <button className="btn  d-flex justify-content-center align-items-center btn-signIn" type="submit" style={{border:'2px solid black'}}>
                        <div className='d-flex justify-content-center align-items-center shopping-cartIcon' >
                          <div className='d-flex justify-content-center align-items-center'>
                            <div>
                            <AiOutlineShoppingCart className=' text-center icon-cart fw-bold'>x</AiOutlineShoppingCart>
                            </div>
                            <div >
                              <p className='text-center fw-bold ms-1 mx-auto count'>(0)</p>
                            </div> 
                          </div> 
                        </div>
                        </button>
                  </div>
 
              {/* </div> */}
            </div>
          </nav>
        </div>
    );
};

export default Navigation;