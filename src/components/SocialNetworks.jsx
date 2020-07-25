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
                <li><a href="mailto: arielbvergara@gmail.com"><img src={mail} alt="" /><span>Email: bautistaangel@gmail.com</span></a></li>
                <li><a href="https://www.instagram.com/?hl=es-la"><img src={instagram} alt="" /><span>Instagram: _bautistaangel</span></a></li>
                <li><a href="https://www.facebook.com/bautista.angel.336"><img src={facebook} alt="" /><span>Facebook: Bautista Ángel</span></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5491165681980&text=Hola! Quería consultarles..."><img src={whatsapp} alt="" /><span>Whatsapp: +541165681980</span></a></li>
            </ul>
        </section>
    )
}

export default SocialNetworks
