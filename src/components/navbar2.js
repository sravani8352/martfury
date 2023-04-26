import React from "react";
import "../styles/navbar2.css";
import {AiOutlineStar} from "react-icons/ai";
import {GiWashingMachine} from "react-icons/gi";
import {MdComputer} from "react-icons/md";
import {BsCamera} from "react-icons/bs";
import {GiCctvCamera} from "react-icons/gi";



export default function Navbar2(){

    return(
        <div className="nav3-container">
            <p><AiOutlineStar className="item-icon"/> HOT DEAL</p>
            <p><GiWashingMachine className="item-icon"/> HOME ELECTRONICS</p>
            <p><MdComputer className="item-icon"/> COMPUTER & TECHNOLOGY</p>
            <p><BsCamera className="item-icon"/>CAMERA & VIDEOS</p>
            <p><GiCctvCamera className="item-icon"/> OFFICE ELECTRONICS</p>
        </div>
    )
}