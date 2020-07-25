import React from 'react'
import whatsapp from '../public/images/whatsapp-circle.png'
import mail from '../public/images/gmail-circle.png'
import instagram from '../public/images/instagram-circle.png'
import facebook from '../public/images/facebook-circle.png'

const SocialNetworks = () => {
    return (
        <section id="social-networks">
            <h4>Nuestras redes sociales</h4>
            <ul className="plain">
                <li><a id="mail" href="mailto: diegovergarapaniagua1983@gmail.com"><img src={mail} alt="" /><span>Email: diegovergarapaniagua1983@gmail.com</span></a></li>
                <li><a href="https://www.instagram.com/diegovergara40/?hl=es-la"><img src={instagram} alt="" /><span>Instagram: diegovergara40</span></a></li>
                <li><a href="https://www.facebook.com/bautista.angel.336"><img src={facebook} alt="" /><span>Facebook: Bautista Ángel</span></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5491165681983&text=Hola! Quería consultarles..."><img src={whatsapp} alt="" /><span>Whatsapp: +541165681983</span></a></li>
            </ul>
        </section>
    )
}

export default SocialNetworks
