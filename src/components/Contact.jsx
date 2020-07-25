import React from 'react'
import ContactForm from './ContactForm'
import SocialNetworks from './SocialNetworks'

const Contact = () => {
    return (
        <section id="contact">
            <footer id="footer">
                <div className="inner">
                    <header className="special">
                        <h2>Contactenos</h2>
                        <p>
                            Realice las consultas que crea necesarias. ¡Estamos a su disposición!
						</p>
                    </header>
                    <div className="content">
                        <ContactForm />
                        {/* <section>
                            <h4>Sem turpis amet semper</h4>
                            <ul className="alt">
                                <li><a href="#">Dolor pulvinar sed etiam.</a></li>
                                <li><a href="#">Etiam vel lorem sed amet.</a></li>
                                <li><a href="#">Felis enim feugiat viverra.</a></li>
                                <li><a href="#">Dolor pulvinar magna etiam.</a></li>
                            </ul>
                        </section> */}
                        <SocialNetworks />
                    </div>
                    <div className="copyright">
                        &copy;Plomería Bautista Ángel. Web site made by <a style={{color:"#2bbdb0"}} href="https://arielbvergara-cv.web.app/"> Ariel Vergara</a>.
					</div>
                </div>
            </footer>
        </section>
    )
}

export default Contact
