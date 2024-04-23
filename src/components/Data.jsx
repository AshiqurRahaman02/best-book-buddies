import React from "react";

const data = [
	{ header: "15+", text: "Ready to use React components" },
	{ header: "60+", text: "Predifined colors for theme setup" },
	{ header: "</>", text: "Detailed documentation for each component" },
	{ header: "FREE", text: "Open source with regular updates" },
];

function Data() {
	return (
		<div className="data">
			<div>
				{data.map((ele, index) => (
					<div key={index}>
						<h1>{ele.header}</h1>
						<p>{ele.text}</p>
					</div>
				))}
			</div>
			<div>
				<div>
					<h1>UI Templates are on their way 🚀</h1>
					<p>
						Official Ui templates build on Atomize React will be released
						very soon.
					</p>
				</div>
				<button>
					<span>Get notified</span>
					<span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
                            style={{width:"18px"}}
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
							/>
						</svg>
					</span>
				</button>
			</div>
		</div>
	);
}

export default Data;
