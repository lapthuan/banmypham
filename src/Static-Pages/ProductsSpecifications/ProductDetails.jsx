import React from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
// import "../HomePage/HomePage.css";
import { RiStarSFill } from "react-icons/ri";
import { useState, useEffect } from "react";
import axios from "axios";
import imgError from "../../Image/imgError.jpg";
import { ImTruck } from 'react-icons/im'
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
} from '../../redux/action/productActions';

function ProductDetails() {
  const params = useParams();
  let id = params.id;

  const [data, setdata] = useState([]);
  const userData = localStorage.getItem("token") || ""
  const [userId, userEmail, userPassword] = userData.split(":")
  const dispatch = useDispatch();

  let cartData = JSON.parse(localStorage.getItem("cartItems")) || []


  const productDetails = useSelector((state) => state.productDetails);
  const { loading, product, error } = productDetails;

  useEffect(() => {

    dispatch(listProductDetails(id));

  }, [id, dispatch]);



  const addToCart = () => {
    // console.log("data", data)
    let currData = data[0];
    let obj = {
      title: currData.title,
      image: currData.image,
      description: currData.description,
      price: currData.price,
      quantity: currData.quantity,
      category: currData.category,
      rating: currData.rating
    }
    console.log("this is object", obj)


    axios.post(`https://blossombackend.onrender.com/carts/${userId}`, obj).then((res) => {
      console.log("res--->", res)
    }).catch((e) => {
      console.log("error hai", e);
    })

    // console.log(data,"checking");
    cartData.push(data)
    localStorage.setItem("cartItems", JSON.stringify(cartData))
  }

  useEffect(() => {
    axios.get(`https://blossombackend.onrender.com/products/Sale/${id}/spec`).then((res) => {
      setdata(res.data)
      // console.log(res.data)
    })
  }, []);

  return product && (!product._id || product._id !== id) ? (<div>Loading...</div>) : product ? (
    <>

      <h1 className="mx-2">Product's Specification</h1>
      {/* start in this div  */}

      <div className="mainimagewala">

        <div className="imagepara">
          <img src={product.images[0] == undefined ? imgError : product.images[0].url } alt='' />
          <h3> </h3>
          <p>{product.description}</p>

        </div>
        <div style={{ marginLeft: "25px", marginTop: '50px' }} className="pricename">
          <p className="namei">{product.title}</p>

          <div style={{ marginTop: "-15px" }} className="starshai">
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <RiStarSFill className="starshaipr" />
            <p className="uparkrdubar">(4)</p>
          </div>
          <p style={{ marginTop: "-5px" }} className="rate"> {product.price} Vnđ </p>
          <Link to={`/Sale/${id}/Carts`}>
            <button onClick={addToCart} className='addwalabutton'>Add to cart</button>
          </Link>
          <div className="icomns"><ImTruck className="trucjkhai" /> <p>2-3 Business Day Delivery</p></div>



        </div>


      </div>





      <h1 style={{ color: 'red', marginTop: '20px', fontFamily: 'cursive', marginBottom: '90px' }} className="Shophai">Recommendation</h1>

      {/* <div className="othercustomer">
        <div className="mainwala">
          <div className="image1"></div>
          <div className="textdata">

            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image2"></div>
          <div className="textdata">
          
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image3"></div>
          <div className="textdata">
        
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>

        <div className="mainwala">
          <div className="image4"></div>
          <div className="textdata">
         
            <span className="butkor">QUICK BUY</span>
          </div>
        </div>
      </div> */}

      <section className="reviewwala"></section>
    </>
  ) : (
    ''
  )
}

export default ProductDetails;
