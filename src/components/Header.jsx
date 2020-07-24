import React from 'react'
import '../public/css/header.css'

const Header = (props) => {

    
    const {setIsMenuActive, isMenuActive} =  props

    const onClickMenu = () => {
        setIsMenuActive(!isMenuActive);
    }

    return (
        <header id="header">
            <a className="logo" href="/">Plomería Bautista Ángel</a>
            <nav className="menu-mobile">
                <a onClick={onClickMenu}>Menu</a>
            </nav>

            <nav className="menu-desktop">
                <a href="#">Inicio</a>
                <a href="#services">Servicios</a>
                <a href="#about-us">Sobre nosotros</a>
                <a href="#contact">Contactenos</a>
            </nav>
        </header>
    )
}

export default Header
