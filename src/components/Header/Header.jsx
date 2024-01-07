import React, {useRef, useEffect, useState} from 'react'
import {Container, Row, Button} from 'reactstrap'
import {NavLink, Link} from 'react-router-dom'


import logo from '../assets/images/eco-logo.PNG'
import './header.css'
const nav_links= [
    {
        path: "/home",
        display: "Home"
    },
    {
        path: "/volunteer",
        display: "Volunteer"
    },
    {
        path: "/eco_offers",
        display: "Eco offers"
    },
    { 
        path: "/attractions",
        display: "Attractions"
    }
]

const Header = () => {
    const [nickname, setNickname] = useState()
    const headerRef = useRef(null)

    const stickyHeaderFunc = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop >80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('stick__header')
            } else {
                headerRef.current.classList.remove('stick__header')
            }
        })
    }

    useEffect(()=>{
        setNickname(localStorage.getItem('user'))
        stickyHeaderFunc()
        return window.removeEventListener('scroll', stickyHeaderFunc)
    },[] )

    const logout = () => {
        localStorage.removeItem('user')
        setNickname(null)
    }

    return <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                    <div className="logo">
                        <img src={logo} alt="" />
                        </div>
                        <div className='navigation'>
                            <ul className="menu d-flex align-items-center gap-5">
                                {
                                    nav_links.map((item, index) => (
                                        <li className='nav__item' key={index}>
                                            <NavLink to={item.path} className={navClass=>
                                                 navClass.isActive ? "active__link":""} >{item.display}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        {nickname && <span>{nickname}</span>}
                        {nickname == null &&
                        <div className='nav__right d-flex align-items-center gap-4'>
                            <div className='nav__btns d-flex align-items-center gap-4'></div>
                            <Button className='btn btn-success' ><Link to='/'>Login</Link></Button>
                            <Button className='btn btn-success'><Link to='/signup'>Signup</Link></Button>
                        </div>}
                        {nickname && <div className='nav__right d-flex align-items-center gap-4'>
                            <div className='nav__btns d-flex align-items-center gap-4'></div>
                            <Button className='btn btn-success' onClick={() => logout()}>Logout</Button>
                        </div>}
                        <span className="mobile_menu">
                        <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css"
    rel="stylesheet"
/>
<i class="ri-menu-fill"></i>
                        </span>
                    </div>
            </Row>
        </Container>
    </header>
} 

export default Header