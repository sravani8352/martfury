import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, deleteProduct } from "../redux/slice/cartSlice";
import "../styles/cart.scss";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";



const Cart = ({ props }) => {
    const cart = useSelector(state => state.Cart);
    const dispatch = useDispatch();
    return (
        <div className={"cart"} >
            <div className="cart-container">
                <div className="cart-product-container">
                    {cart.items.length && cart.items.map(e => {
                        console.log(e);
                        return (
                            <div>
                                <div className="cart-item">
                                    <div className="cart-item-header">
                                        <div className="cart-item-img">
                                            <img className="cart-img" src={e.images && e.images[2].url}></img>
                                        </div>
                                        <div className="cart-item-price">
                                            <p className="cart-product-title">{e.title}</p>
                                            <p className="btns">
                                                <button className="decrease-product-quantity" onClick={() => dispatch(removeFromCart(e))}><AiOutlineMinus/></button>
                                                <button className="clss remove-product-quantity" onClick={() => dispatch(deleteProduct(e))}>Remove Product</button>
                                                <button className="increase-product-quantity" onClick={() => dispatch(addToCart(e))}><AiOutlinePlus/></button>
                                            </p>
                                            <p className="cart-product-quantity">Quantity : <span className="cart-highlight">{e.cartQty}</span></p>
                                            <p className="cart-product-price">Price : <span className="cart-highlight">${(e.price) * (e.cartQty)}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>                      
                        )
                    })}
                </div>

                <h4>SUBTOTAL: ${cart.totalPrice}</h4>
                <button className="cart-btn">CHECKOUT</button>

            </div>
        </div>
    )
}

export default Cart;
