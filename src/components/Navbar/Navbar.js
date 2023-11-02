import React from 'react'
import "./Navbar.css";
import { RiHomeLine } from "@react-icons/all-files/ri/RiHomeLine";
import { AiOutlineShop } from "@react-icons/all-files/ai/AiOutlineShop";
import { BiUser } from "@react-icons/all-files/bi/BiUser";
import { MdPermMedia } from "@react-icons/all-files/md/MdPermMedia";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const arr = [
        {
            id: 1,
            icon: <RiHomeLine />,
            name: 'Dashboard'
        },
        {
            id: 2,
            icon: <AiOutlineShop />,
            name: 'Product'
        },
        {
            id: 3,
            icon: <RiHomeLine />,
            name: 'Category'
        },
        {
            id: 4,
            icon: <RiHomeLine />,
            name: 'Attributes'
        },
        {
            id: 5,
            icon: <BiUser />,
            name: 'Users'
        },
        {
            id: 6,
            icon: <BiUser />,
            name: 'Roles'
        },
        {
            id: 7,
            icon: <MdPermMedia />,
            name: 'Media'
        },
        {
            id: 8,
            icon: <RiHomeLine />,
            name: 'Orders'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Localization'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Coupons'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Tax'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Product Review'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Support Ticket'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Settings'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'Reports'
        },
        {
            id: 9,
            icon: <RiHomeLine />,
            name: 'List Page'
        },
    ]
    return (
        <div className='MainNavbar'>
            <h1 className='logoTag'>Fastkart. </h1>
            <div className='Mapdiv'>

                {arr.map((e) => {
                    return (
                        <NavLink  style={{textDecoration:'none' , color:'white'}} activeClassName = 'active' to={`/${e.name}`} >

                            <div className='ArrayOfList'>

                                <div className='DashBoardIcon'>  {e.icon}</div>
                                <div className='DashBoardname'>  {e.name}</div>
                            </div>
                         </NavLink>
                    )
                })}
            </div>

        </div>
    )
}

export default Navbar