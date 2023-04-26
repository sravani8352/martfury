import React from "react";
import "../styles/policies.css";
import { BsRocketTakeoff } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";
import { MdPayment } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";



export default function Policies() {

    return (
        <div className="policies-container">
            <div className="policies-subcontainer">
                <BsRocketTakeoff className="policy-icon" />
                <div>
                    <p className="policies-heading">Free Delivery</p>
                    <p className="policies-details">for all orders above $99</p>
                </div>
            </div>
            <p></p>
            <div className="policies-subcontainer">
                <TfiReload className="policy-icon" />
                <div>
                    <p className="policies-heading">90 Days Return</p>
                    <p className="policies-details">if goods have problems</p>
                </div>
            </div>
            <p></p>
            <div className="policies-subcontainer">
                <MdPayment className="policy-icon" />
                <div>
                    <p className="policies-heading">Secure Payment</p>
                    <p className="policies-details">100% secure payment</p>
                </div>
            </div>
            <p></p>
            <div className="policies-subcontainer">
                <TiMessages className="policy-icon" />
                <div>
                    <p className="policies-heading">24/7 Support</p>
                    <p className="policies-details">Dedicated support</p>
                </div>
            </div>
        </div>
    )

}