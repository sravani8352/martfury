import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/productCard.css";
import { addToCart } from "../redux/slice/cartSlice";
import { AiOutlineShoppingCart, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";


const ProductCard = ({ productitem }) => {
    const cart = useSelector(state => state.Cart.items);
    console.log(cart);
    const dispatch = useDispatch();

    return (
        <>
            <div className="product-card">
                <img className="product-card-img" src={productitem.thumbnail.url} />
                <hr />
                <p className="product-card-title">{productitem.title}</p>
                <p>${productitem.price}</p>
                <div className="cartIcon">
                    <div className="product-icons">
                        <AiOutlineShoppingCart onClick={() => dispatch(addToCart(productitem))} className="Icons" />
                        <AiOutlineHeart className="Icons" />
                        <AiOutlineEye className="Icons" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProductCard;

