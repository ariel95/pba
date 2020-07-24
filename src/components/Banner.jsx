import React from 'react'

const Banner = () => {
    return (
        <section id="banner">
            <div className="inner">
                <h1>Plomería Bautista Ángel</h1>
                <p>Empresa familiar en la que cada uno de nosotros nos comprometemos a la mejor calidad de servicios.</p>
            </div>
            <video autoPlay loop muted playsInline src="images/banner.mp4"></video>
        </section>
    )
}

export default Banner
