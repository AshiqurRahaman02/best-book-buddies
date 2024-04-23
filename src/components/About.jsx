import React from "react";
import { Link } from "react-router-dom";

function About() {
	return (
		<section className="about">
			<button>Key features</button>
			<h2>Why use Atomize React?</h2>
			<p>
				Atomize React helpls you in building fully responsive website <br />{" "}
				and products that match your style.
			</p>

			<div >
				<div>
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
						>
							<g fill="none" fill-rule="evenodd">
								<rect width="32" height="32" fill="#FFC148" rx="3" />
								<path
									stroke="#000"
									stroke-linecap="square"
									stroke-width="2"
									d="M21.5 1L21.5 31M10.5 1L10.5 31"
								/>
							</g>
						</svg>
					</div>
					<h3>Flexible Grid</h3>
					<p>Change grid variables or give decimal colums size.</p>
					<Link>See How</Link>
				</div>
				<div>
					<div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <g fill="none" fill-rule="evenodd">
    <rect width="32" height="32" fill="#FF6B38" rx="3"/>
    <path stroke="#000" stroke-width="2" d="M2.73376067,9.42433109 C2.54450231,9.21993206 2.27856362,9.10373912 2,9.10373912 C1.44771525,9.10373912 1,9.55145437 1,10.1037391 L1,29 C1,30.1045695 1.8954305,31 3,31 L20.4224638,31 C20.6743841,31 20.9170226,30.9049173 21.1018718,30.7337607 C21.5071166,30.358534 21.5314511,29.7258368 21.1562245,29.320592 L2.73376067,9.42433109 Z"/>
  </g>
</svg>

					</div>
					<h3>Style guide</h3>
					<p>update theme throughout the application easily.</p>
					<Link>See How</Link>
				</div>
				<div>
					<div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <g fill="none" fill-rule="evenodd">
    <rect width="32" height="32" fill="#1CDB9E" rx="3"/>
    <rect width="11" height="11" x="20" y="20" stroke="#000" stroke-width="2"/>
    <rect width="11" height="11" x="1" y="1" stroke="#000" stroke-width="2"/>
  </g>
</svg>

					</div>
					<h3>Spacing</h3>
					<p>A better and controlled way of update spacing.</p>
					<Link>See How</Link>
				</div>
				<div>
					<div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <g fill="none" fill-rule="evenodd">
    <rect width="12" height="16" x="20" y="16" fill="#43A4FF" rx="3"/>
    <rect width="32" height="11" fill="#43A4FF" rx="3"/>
    <rect width="11" height="14" x="1" y="17" stroke="#000" stroke-width="2"/>
  </g>
</svg>

					</div>
					<h3>Responsive</h3>
					<p>Better control to make the app responsive.</p>
					<Link>See How</Link>
				</div>
			</div>
		</section>
	);
}

export default About;
