import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/slice/computerSlice";
import ComputerCard from "./computerCard";
import "../styles/computer.css";

const Computer = () => {
    const product = useSelector(state => state.Computer.value);
    console.log(product);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchData());
    }, [])

    return (
        <div className="productContainer">
            <div className="header">
                <h1>Computers & Technology</h1>
                <span>
                    <p>Iphone, Ipad, Samsung</p>
                    <p>View All</p>
                </span>
            </div>
            <div className="products-list">
                {product.length && product.map(e => <ComputerCard productitem={e} />)}
            </div>
        </div>
    )
};
export default Computer; 