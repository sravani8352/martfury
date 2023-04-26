import React from "react";
import "../styles/categories.css";

export default function Categories() {


    return (

        <div className="categories-container">
            <h2 className="categories-heading">Top categories of the month</h2>
            <div className="categories-items">
                <div className="categories-grid">
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/2.jpg" />
                        <div>
                            <p className="heading">TV Televisions</p>
                            <p className="sub-details">Smart TV</p>
                            <p className="sub-details">4k Ultra HD TVs</p>
                            <p className="sub-details">LED TVs</p>
                            <p className="sub-details">OLED TVs</p>
                        </div>
                    </div>
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/4.jpg" />
                        <div>
                            <p className="heading">Air Conditioners</p>
                            <p className="sub-details">Type Hanging On Wall</p>
                            <p className="sub-details">Type Erect</p>
                            <p className="sub-details">Type Hanging On Celling</p>
                            <p className="sub-details">Accessories</p>
                        </div>
                    </div>
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/3.jpg" />
                        <div>
                            <p className="heading">Washing Machine</p>
                            <p className="sub-details">Type Hanging On Wall</p>
                            <p className="sub-details">Type Erect</p>
                            <p className="sub-details">Type Hanging On Celling</p>
                            <p className="sub-details">Accessories</p>
                        </div>
                    </div>
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/1.jpg" />
                        <div>
                            <p className="heading">Audios & Theaters</p>
                            <p className="sub-details">Speakers</p>
                            <p className="sub-details">Home Theater System</p>
                            <p className="sub-details">Wireless Audio</p>
                            <p className="sub-details">Headphone</p>
                        </div>
                    </div>
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/6.jpg" />
                        <div>
                            <p className="heading">Office Electronics</p>
                            <p className="sub-details">Printers</p>
                            <p className="sub-details">Store & Business</p>
                            <p className="sub-details">Scanners</p>
                            <p className="sub-details">Projectors</p>
                        </div>
                    </div>
                    <div className="categories-child">
                        <img src="https://reactstorefronts.com/static/img/categories/electronic/8.jpg" />
                        <div>
                            <p className="heading">Phones</p>
                            <p className="sub-details">Printers</p>
                            <p className="sub-details">Store & Business</p>
                            <p className="sub-details">Scanners</p>
                            <p className="sub-details">Projectors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}