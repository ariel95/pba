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
                <li><a id="mail" href="mailto: plomeriabautistaangel@gmail.com"><img src={mail} alt="" /><span>Email: plomeriabautistaangel@gmail.com</span></a></li>
                <li><a href="https://www.instagram.com/plomeriabautistaangel/?hl=es-la"><img src={instagram} alt="" /><span>Instagram: plomeriabautistaangel</span></a></li>
                <li><a href="https://www.facebook.com/bautista.angel.336"><img src={facebook} alt="" /><span>Facebook: Bautista Ángel</span></a></li>
                <li><a href="https://api.whatsapp.com/send?phone=5491165681983&text=Hola! Quería consultarles..."><img src={whatsapp} alt="" /><span>Whatsapp: +541165681983</span></a></li>
            </ul>
        </section>
    )
}

export default SocialNetworks
