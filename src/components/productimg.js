import React from "react";
import "../styles/productimg.css";


export default function ProductImg() {
    return (
        <div className="product-container">
            <img src="https://reactstorefronts.com/static/img/slider/home-7/1.jpg" />
            <div className="product-subcontainer">
                <img src="https://reactstorefronts.com/static/img/slider/home-7/promotion-1.jpg" />
                <img src="https://reactstorefronts.com/static/img/slider/home-7/promotion-2.jpg" />
            </div>
        </div> 
    )
}