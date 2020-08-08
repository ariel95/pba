import React from 'react'
import '../public/css/services.css'

const Services = () => {
    return (
        <section id="services" className="wrapper">
				<div className="inner">
					<header className="special">
						<h2>Servicios</h2>
						<p>
							Ofrecemos una amplia variedad de servicios, los cuales vienen acompañados con 
							un gran compromiso de calidad y excelencia. Tenemos la posibilidad de trasladarnos
							a cualquier punto del CABA, Gran buenos aires y alrededores. Trabajamos cumpliendo 
							todas las normas de higiene y seguridad, y disponemos de todos los permisos para 
							circular. Nuestro trabajo está garantizado.
						</p>
					</header>
					<div className="highlights">
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-vcard-o"><span className="label">Icon</span></a>
									<h3>Cañerías de cloacas</h3>
								</header>
								<p>Realizamos la colocación de cañerías del desagüe cloacal.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-files-o"><span className="label">Icon</span></a>
									<h3>Cañerías Pluviales</h3>
								</header>
								<p>Realizamos la colocación de cañerías en tinglados, terrazas y techos.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-floppy-o"><span className="label">Icon</span></a>
									<h3>Cañerías Sanitarias</h3>
								</header>
								<p>Realizamos la colocación de cañerías de aguas frías y calientes. Baño, cocina y lavaderos.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-line-chart"><span className="label">Icon</span></a>
									<h3>Calefacción de pisos radiantes y radiadores</h3>
								</header>
								<p>Calefacción de casas y edificios.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
									<h3>Instalación de gas natural</h3>
								</header>
								<p>Refracción y trámites para la bajada de gas natural.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
									<h3>Colocación de artefactos de plomería y gas</h3>
								</header>
								<p>Colocación de inodoros, bidets, lavatorios, estufas, termotanques, calefones y cocinas.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
									<h3>Limpieza de tanques y cisternas de agua.</h3>
								</header>
								<p>Limpieza total</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
									<h3>Construcciones pequeñas</h3>
								</header>
								<p>Levantamiento de muro, colocación de cerámicas, pinturas, carpintería.</p>
							</div>
						</section>
						<section>
							<div className="content">
								<header>
									<a href="#" className="icon fa-qrcode"><span className="label">Icon</span></a>
									<h3>Electricidad</h3>
								</header>
								<p>Reparación, mantenimiento y mejora del hogar.</p>
							</div>
						</section>
					</div>
				</div>
			</section>
    )
}

export default Services
