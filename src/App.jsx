import React, { useLayoutEffect, useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';


function useWindowSize() {
	const [size, setSize] = useState([0, 0]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener('resize', updateSize);
		updateSize();
		return () => window.removeEventListener('resize', updateSize);
	}, []);
	return size;
}

function App() {

	const [width, height] = useWindowSize();
	const [isMenuActive, setIsMenuActive] = React.useState(false);
	return (
		<div className={width <= 700 ? (isMenuActive ? "App is-mobile" : "App is-mobile toggled")  : "App"}>
			<Header setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
			<div className="content">
				<Sidebar isMenuActive={isMenuActive} />
				<div className="info">
					<Banner />
					<Services />
					{/* <MoreInfo /> */}
					<AboutUs />
					<Contact />
				</div>

			</div>

		</div>
	);
}

export default App;
