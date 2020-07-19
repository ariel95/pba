import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import MoreInfo from './components/MoreInfo';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<Services />
			<MoreInfo />
			<AboutUs />
			<Contact />
		</div>
	);
}

export default App;
