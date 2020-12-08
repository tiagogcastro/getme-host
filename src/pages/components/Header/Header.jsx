import React, {useEffect} from 'react';

import {Link} from 'react-router-dom';
import './header.css';

import {FiMenu} from 'react-icons/fi';
import {AiOutlineHome, AiOutlineCloudDownload} from 'react-icons/ai';
import {BsCloudDownload} from 'react-icons/bs'
import {FaServer} from 'react-icons/fa';

import Logo from '../../../images/logo.png'

export default function Header() {
        
    useEffect(() => {
        const menu = document.querySelector('#menu')
        const getButtonMenuOpen = document.querySelector('.btnMenu_open')
        const getButtonMenuClose = document.querySelector('.btnMenu_close')
        const menu_items = document.querySelectorAll('.menu-item .menu-item-action')

        console.log(getButtonMenuOpen, getButtonMenuClose)
        getButtonMenuOpen.addEventListener('click', () => {
            menu.classList.add('menu_open')
        })  

        getButtonMenuClose.addEventListener('click', () => {
            menu.classList.remove('menu_open')
        })

        menu_items.forEach((item) => {
            item.addEventListener('click', () => {
                menu.classList.remove('menu_open')
            })
        })
    }, [])
    
    return (
        <header className="header">
            <div className="bgHeader">
                <Link to="/">
                    <img src={Logo} alt=""/>
                </Link>
                <li
                    className="btnMenu btnMenu_open">
                    <FiMenu className="buttonMenu"/>
                </li>
                <ul id="menu" className="menu">
                    <div className="navigation">
                        <div className="logoBtnMenu">
                            <div className="maxWd">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={Logo} alt=""/>
                                    </Link>
                                </div>
                                <li className="btnMenu btnMenu_close"><FiMenu className="buttonMenu"/></li>
                            </div>
                        </div>
                        <li className="menu-item">
                            <Link to="/"
                            className="menu-item-action">
                                <AiOutlineHome/> Home
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/hospedagem-de-sites"
                            className="menu-item-action">
                               <FaServer/> Hospedagem de sites
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/" 
                            className="menu-item-action buttonLock">
                               <BsCloudDownload/> Servidor Cloud/Vps
                            </Link>
                        </li>
                    </div>
                </ul>
            </div>
        </header>
    )
}

// const currentPage =
// console.log(currentPage)
const menuItems = document.querySelectorAll('#menu .menu-item')

// for (let item of menuItems) {
//     if (currentPage.includes(item.getAttribute('href'))) {
//         item.classList.add('active')
//     }
// }
