import React from "react";
import "../styles/footer.css";
import { TiSocialFacebook } from "react-icons/ti"
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { Input } from 'antd';
import { Space } from 'antd';


const { Search } = Input;
const onSearch = (value) => console.log(value);


export default function Footer() {

    return (
        <div className="footer-container">

            <div className="footer-container1">
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <p>Policy</p>
                    <p>Term & Condition</p>
                    <p>Shipping</p>
                    <p>Return</p>
                    <p>FAQS</p>
                </div>

                <div className="company">
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Affilate</p>
                    <p>Carrer</p>
                    <p>Contact</p>
                </div>

                <div className="bussiness">
                    <h4>Bussiness</h4>
                    <p>Our Press</p>
                    <p>Check Out</p>
                    <p>My Account</p>
                    <p>Shop</p>
                </div>

                <div className="newsletter">
                    <h4> News Letter</h4>

                    <div>
                        <Space direction="vertical">
                            <Search
                                className="inp inpt"
                                placeholder="Email Address"
                                enterButton="Subscribe"
                                size="large"
                                onSearch={onSearch}
                            />
                        </Space>
                    </div>

                    <div className="social">
                        <TiSocialFacebook  className="facebook"/>
                        <FaTwitter  className="twitter"/>
                        <AiOutlineGooglePlus  className="google"/>
                        <AiOutlineInstagram  className="insta"/>
                    </div>

                </div>
            </div>

            <hr />

            <div className="footer-container2">

                <p>©2021 Martfury. All Rights Reserved</p>

                <div className="payment-methods">
                    <p>We Using Safe Payment For: </p>
                    <img src="https://reactstorefronts.com/static/img/payment-method/1.jpg" />
                    <img src="https://reactstorefronts.com/static/img/payment-method/2.jpg" />
                    <img src="https://reactstorefronts.com/static/img/payment-method/3.jpg" />
                    <img src="https://reactstorefronts.com/static/img/payment-method/4.jpg" />
                    <img src="https://reactstorefronts.com/static/img/payment-method/5.jpg" />
                </div>


            </div>


        </div>
    )
}