import React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Button, Dropdown } from 'antd';
import "../styles/navbar.css";

const items = [
    {
        key: '1',
        label: (
            <a rel="noopener noreferrer" href="#">
                India
            </a>
        ),
    },
    {
        key: '2',
        label: (
            <a rel="noopener noreferrer" href="#">
                USA
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a rel="noopener noreferrer" href="#">
                Russia
            </a>
        ),
    },
];

export default function Navbar() {


    

    return (
        <div className="nav-container">
            <div className="nav-left">
                <p>Welcome to Martfury Online Shopping Store !</p>
            </div>
            <div className="nav-right">
                <p>Store Location</p>
                <p>Track Your Order</p>
                <p>Currency</p>

                <p className="drop">
                    <Dropdown className="drop"
                        menu={{
                            items,
                        }}
                        placement="bottom"
                        arrow={{
                            pointAtCenter: true,
                        }}
                    >
                        <Button>Country</Button>
                    </Dropdown>
                </p>

            </div>
        </div>
    )

}