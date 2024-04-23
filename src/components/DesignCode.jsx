import React from "react";
import CodeEditor from "./CodeEditor";

const MeaganAvatar = "./assets/avatar.png";

function DesignCode() {
	return (
		<section className="design-code">
			<h1>Code the perfect design for each project using Atomize.</h1>
			<div>
				<CodeEditor />
				<div className="side-part">
					<div className="meagan-info" style={{height:"200px"}}>
						<div>
							<h2 style={{marginBottom:"0px"}}>$1,410.15</h2>
							<p>per month</p>
						</div>
						<div>
							<button>
								<span>Use this design system</span>
							</button>
						</div>
					</div>
					<div className="meagan-info">
						<div>
							<img src={MeaganAvatar} alt="" />
							<h3>Meagan Fisher</h3>
							<p>Engineering Manager</p>
						</div>
						<div>
							<button>
								<span>Follow</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="ae c0 ds dt du"
									style={{ width: "18px" }}
								>
									<path
										fill="#f1f2f4"
										fill-rule="evenodd"
										d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 Z"
									/>
								</svg>
							</button>
							<button>
								<span>Message</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="ae c0 ds dt du"
									style={{ width: "18px" }}
								>
									<path
										fill="#4E5D78"
										d="M19,6 L5,6 L5,17.3419209 L7.3796773,15.3936192 C7.69417855,15.1361291 8.09061112,14.9951167 8.5,14.9951167 L19,14.9951167 L19,6 Z M19.65,16.9985025 L8.4,16.9985025 L4.47616596,20.2683642 C4.09431675,20.5865718 3.52680852,20.5349802 3.20860085,20.153131 C3.0738146,19.9913875 3,19.7875079 3,19.576965 L3,5.35 C3,4.60441559 3.60441559,4 4.35,4 L19.65,4 C20.3955844,4 21,4.60441559 21,5.35 L21,15.6485025 C21,16.3940869 20.3955844,16.9985025 19.65,16.9985025 Z"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="designer-info">
						<div className="social-info">
							<div>
								<img
									src={MeaganAvatar}
									alt=""
									style={{ width: "40px", height: "40px" }}
								/>
								<h4>
									<span>Meagan Fisher</span>
								</h4>
							</div>
							<div className="follow">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									class="ae c0 ds dt du"
									style={{ width: "20px" }}
								>
									<path
										fill="#f1f2f4"
										fill-rule="evenodd"
										d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 Z"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default DesignCode;
