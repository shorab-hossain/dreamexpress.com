import React, { useEffect, useState } from 'react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { ThreeDots } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import './Honours.css';

const HonoursBook = () => {
    const [book,setBook] =useState([])
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },5000)
        
        fetch('./products.JSON')
        .then(response => response.json())
        .then(result =>setBook(result))

    },[])

    const handleAddToCart = (e)=>{
        e.preventDefault();
        console.log(e.taget.value)
    }
    
    return (
        <section className='contianer'>
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
                /></div>  :
                 <div className='container'>
                        <h1 className='text-center fw-bold mb-4 pt-4'>Honours Book</h1>
                        <h1>Product : {book.length}</h1>
                        <div className='main-bookList mt-5'>
                            {
                                book.map(product =>
                                    <div className="card single-bookCard"  key={product.key}>
                                        <img src={product.img} className="card-img-top p-2" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title">Category: {product.category}</h5>
                                            <p className='text-dark'><small>only {product.stock} left in stock - order soon</small></p>    
                                            <p>Rating : {product.star}</p>
                                            {/* <p className="card-text"> product name: {product.name}</p> */}
                                            <h4 className="card-text fw-bold">
                                                Price: {product.price}</h4>
                                            <div>
                                                <button type="" className='btn  book-button' onClick={handleAddToCart}>
                                                <Link type="submit" to="" className='book-linkbutton'>কিনুন 
                                                 <AiOutlineShoppingCart className='ms-2 book-cartIcon'/>
                                                </Link>
                                                </button>
                                            </div>
                                        </div>
                                        </div>
                                ) 
                            }
                        </div>
                    </div>         
 }
        </section>
    );
};

export default HonoursBook;