import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import SecondaryHero from "../components/SecondaryHero";
import About from "../components/About";
import Footer from "../components/Footer";
import Data from "../components/Data";
import Resource from "../components/Resource";
import Information from "../components/Information";
import DesignCode from "../components/DesignCode";

function Home() {
	return (
		<>
			<>
				<Nav />
			</>
			<main>
				<Hero />
				<SecondaryHero />
				<About />
				<Information />
				<DesignCode />
				<Resource />
				<Data />
			</main>
			<>
				<Footer />
			</>
		</>
	);
}

export default Home;
