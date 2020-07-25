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
                                <li><a href="#"><img src={mail} alt=""/><span>Email</span></a></li>
                                <li><a href="#"><img src={instagram} alt=""/><span>Instagram</span></a></li>
                                <li><a href="#"><img src={facebook} alt=""/><span>Facebook</span></a></li>
                                <li><a href="https://api.whatsapp.com/send?phone=5491136331413&text=hi"><img src={whatsapp} alt=""/><span>Whatsapp</span></a></li>
                            </ul>
                        </section>
    )
}

export default SocialNetworks
