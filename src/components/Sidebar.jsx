import React from 'react'
import '../public/css/sidebar.css'

const Sidebar = () => {
    return (
        <div class="bg-light border-right" id="sidebar-wrapper">
            {/* <div class="sidebar-heading">Start Bootstrap </div> */}
            <div class="list-group list-group-flush">
                <a href="#" class="list-group-item list-group-item-action bg-light">Inicio</a>
                <a href="#services" class="list-group-item list-group-item-action bg-light">Servicios</a>
                <a href="#about-us" class="list-group-item list-group-item-action bg-light">Sobre nosotros</a>
                <a href="#contact" class="list-group-item list-group-item-action bg-light">Contactenos</a>
            </div>
        </div>
    )
}

export default Sidebar
