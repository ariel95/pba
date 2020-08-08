import React from 'react'
import diegoPic from '../public/images/Diego.jpeg'

const AboutUs = () => {
    return (
        <section id="about-us" className="wrapper">
				<div className="inner">
					<header className="special">
						<h2>Sobre nosotros</h2>
						<p>Somos una empresa familiar que se dedica a brindarle la mejora calidad de servicios.</p>
					</header>
					<div className="testimonials">
						<section>
							<div className="content">
								<blockquote>
									<p>
										Actualmente estoy viviendo en Monte Grande, he estado trabajando en este negocio 
										por más de 10 años. Mi principal objetivo es que la gente quede conforme y 
										contenta con el trabajo que realizo.
									</p>
								</blockquote>
								<div className="author">
									<div className="image">
										<img src={diegoPic} alt="" />
									</div>
									<p className="credit">- <strong>Diego Vergara</strong></p>
								</div>
							</div>
						</section>
						{/* <section>
							<div className="content">
								<blockquote>
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<div className="author">
									<div className="image">
										<img src="images/pic03.jpg" alt="" />
									</div>
									<p className="credit">- <strong>John Doe</strong> <span>CEO - ABC Inc.</span></p>
								</div>
							</div>
						</section>
						<section>
							<div className="content">
								<blockquote>
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<div className="author">
									<div className="image">
										<img src="images/pic02.jpg" alt="" />
									</div>
									<p className="credit">- <strong>Janet Smith</strong> <span>CEO - ABC Inc.</span></p>
								</div>
							</div>
						</section> */}
					</div>
				</div>
			</section>
    )
}

export default AboutUs
