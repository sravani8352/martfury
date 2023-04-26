import React from "react";
import "../styles/navbar1.css";
import { GoThreeBars } from "react-icons/go";
import { Select, Space } from 'antd';
import { Input } from 'antd';
import { Badge } from 'antd';
import { useSelector } from "react-redux";
import { useState } from "react";
import { Button, Modal } from 'antd';
import { AiOutlineHeart } from "react-icons/ai";
import { TbShoppingBag } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { UserOutlined, MobileOutlined, MailOutlined } from '@ant-design/icons';
import { EyeTwoTone, EyeInvisibleOutlined } from '@ant-design/icons';
import Cart from "./cart";

const { Search } = Input;


const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const onSearch = (value) => console.log(value);




export default function Navbar1() {


    const [display, setDisplay] = useState(false);
    const cart = useSelector(state => state.Cart);
    const [show, setShow] = useState(false);


    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [modalOpen, setIsmodalOpen] = useState(false);
    const showmodal = () => {
        setIsmodalOpen(true);
    };
    const handle_Cancel = () => {
        setIsmodalOpen(false);
    };

    const [ModalOpen, setModalOpen] = useState(false);
    const show_Modal = () => {
        setModalOpen(true);
    };
    const handle_ok = () => {

        setModalOpen(false);
    };
    const handle_cancel = () => {
        setModalOpen(false);
    };

    const [passwordVisible, setPasswordVisible] = React.useState(false);



    window.onscroll = () => {
        if (window.scrollY > 700) {
            setShow(true);
            console.log("true")
        }
        else {
            setShow(false);
        }
    }



    return (
        <div className={show ? "show" : "nav1-container"} >
            <img src="https://reactstorefronts.com/static/img/logo-electronic.png" alt="logo" />
            <GoThreeBars className="icons" />
            <div className="nav1-child">
                <div>
                    <Space direction="vertical">
                        <Search
                            addonBefore={
                                <Select
                                    defaultValue="All"
                                    style={{ width: 170, height: 37 }}
                                    onChange={handleChange}
                                    className="select"
                                    options={[
                                        {
                                            value: 'Babies & Moms',
                                            label: 'Babies & Moms',
                                        },
                                        {
                                            value: 'Bags',
                                            label: 'Bags',
                                        },
                                        {
                                            value: 'Womens',
                                            label: 'Womens',
                                        },
                                        {
                                            value: 'Sunglasses',
                                            label: 'Sunglasses',
                                        },
                                        {
                                            value: 'Shoes',
                                            label: 'Shoes',
                                        },
                                        {
                                            value: 'Laptop',
                                            label: 'Laptop',
                                        },
                                        {
                                            value: 'furniture',
                                            label: 'furniture',
                                        },
                                        {
                                            value: 'Shoes',
                                            label: 'Shoes',
                                        },
                                        {
                                            value: 'Babies & Moms',
                                            label: 'Babies & Moms',
                                        },
                                        {
                                            value: 'Bags',
                                            label: 'Bags',
                                        },
                                        {
                                            value: 'Womens',
                                            label: 'Womens',
                                        },
                                        {
                                            value: 'Shoes',
                                            label: 'Shoes',
                                        },
                                        {
                                            value: 'Babies & Moms',
                                            label: 'Babies & Moms',
                                        },
                                        {
                                            value: 'Bags',
                                            label: 'Bags',
                                        },
                                        {
                                            value: 'Womens',
                                            label: 'Womens',
                                        },
                                    ]}
                                />
                            }
                            className="inp"
                            placeholder="I'am shopping for..."
                            enterButton="Search"
                            size="large"
                            onSearch={onSearch}
                        />
                    </Space>
                </div>
            </div>

            <Space size="middle">
                <Badge count={0} showZero>
                    <AiOutlineHeart className="icons badge" />
                </Badge>
                <Badge count={cart.totalQty} showZero>
                    <TbShoppingBag onClick={showModal} className="icons ions badge user" />
                </Badge>



                <Modal title="CART" className="cart-main-container" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className="cart-Container">
                        <Cart />
                    </div>
                </Modal>



                <BsPerson className="icons" />
                <div className="details">
                    <p className="user" onClick={showmodal}>Login</p>

                    <Modal title="LOGIN" open={modalOpen} footer={[<Button key="submit" type="primary"> LOGIN </Button>]} onCancel={handle_Cancel}>
                        <div className="login-page">
                            <Input className="user-name" placeholder="phone number or email" prefix={<UserOutlined />} />
                            <Space direction="vertical">
                                <Input.Password className="password"
                                    placeholder="password"
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                />
                            </Space>
                        </div>

                    </Modal>

                    <p className="user" onClick={show_Modal}>Register</p>

                    <Modal title="REGISTER" open={ModalOpen} onOk={handle_ok} onCancel={handle_cancel}>

                        <div className="login-page">
                            <Input className="register-name" placeholder="User Name" prefix={<UserOutlined />} />
                            <Input className="register-name" placeholder="phone number" prefix={<MobileOutlined />} />
                            <Input className="register-name" placeholder="Email" prefix={<MailOutlined />} />
                            <Space direction="vertical">
                                <Input.Password className="password" placeholder="password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </Space>
                            <Space direction="vertical">
                                <Input.Password className="password" placeholder="re-enter password" iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                            </Space>
                        </div>

                    </Modal>

                </div>
            </Space>

        </div>
    )
}