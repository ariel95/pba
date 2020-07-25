import React from 'react'

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
									<p>Nunc lacinia ante nunc ac lobortis ipsum. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus.</p>
								</blockquote>
								<div className="author">
									<div className="image">
										<img src="images/pic01.jpg" alt="" />
									</div>
									<p className="credit">- <strong>Jane Doe</strong> <span>CEO - ABC Inc.</span></p>
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
						</section>
					</div>
				</div>
			</section>
    )
}

export default AboutUs
