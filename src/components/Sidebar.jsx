import React from 'react'
import '../public/css/sidebar.css'

const Sidebar = () => {
    return (
        <div className="bg-light border-right" id="sidebar-wrapper">
            {/* <div className="sidebar-heading">Start Bootstrap </div> */}
            <div className="list-group list-group-flush">
                <a href="#" className="list-group-item list-group-item-action bg-light">Inicio</a>
                <a href="#services" className="list-group-item list-group-item-action bg-light">Servicios</a>
                <a href="#about-us" className="list-group-item list-group-item-action bg-light">Sobre nosotros</a>
                <a href="#contact" className="list-group-item list-group-item-action bg-light">Contactenos</a>
            </div>
        </div>
    )
}

export default Sidebar
