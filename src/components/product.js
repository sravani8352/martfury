import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchSellerData} from "../redux/slice/bestsellersSlice";
import ProductCard from "./productCard";
import {v4 as uuid} from "uuid";
import "../styles/product.css";

const Products = () => {
    const product = useSelector(state => state.Bestseller.items);
    console.log(product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSellerData());
    },[])

    return (
        <div className="productContainer">
            <div className="header">
                <h1>Best Seller In The Last Month</h1>
                <span>
                    <p>Iphone, Ipad, Samsung</p>
                    <p>View All</p>
                </span>
            </div>
            <div className="products-list">
                {product.length && product.map(e => <ProductCard key={uuid()} productitem={e} />)}
            </div>
        </div>
    )
};
export default Products;