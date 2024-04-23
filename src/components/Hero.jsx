import React from "react";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<section className="hero" style={{paddingTop:"160px"}}>
			<div>
				<h1 className="hero-heading-1">Design System for React JS</h1>
				<h2 className="hero-heading-2">
					Atomize React is a UI framework that helps developers collaborate
					with designers and build consistent user interfaces effortlessly.
				</h2>
				<div className="hero-heading-buttons">
					<Link to="/">
						<button>Documentation</button>
					</Link>
					<Link to="/">
						<button>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								class="ae c0 ds dt du"
								style={{ width: "18px" }}
							>
								<path
									fill="#505256"
									d="M17.8436076,12.841119 L8.54075759,18.8215226 C8.07618755,19.1201747 7.4574737,18.9856717 7.15882152,18.5211017 C7.05513038,18.3598044 7,18.1720957 7,17.9803441 L7,6.01953696 C7,5.46725221 7.44771525,5.01953696 8,5.01953696 C8.19175162,5.01953696 8.37946026,5.07466734 8.54075759,5.17835848 L17.8436076,11.1587621 C18.3081776,11.4574142 18.4426806,12.0761281 18.1440285,12.5406981 C18.0665625,12.6612008 17.9641102,12.763653 17.8436076,12.841119 Z"
								/>
							</svg>
							<span>Watch Video</span>
						</button>
					</Link>
				</div>
			</div>
		</section>
	);
}

export default Hero;
