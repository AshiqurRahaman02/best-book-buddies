import React from "react";

function CodeEditor() {
	return (
		<div className="code-editor">
			<>
				<p>
					<span className="attribute">.nav {"{"} </span>
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">position</span>:{" "}
					<span className="value">sticky</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">top</span>:{" "}
					<span className="value">0</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">z-index</span>
					: <span className="value">10</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">padding</span>
					: <span className="value">16px 0px</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">background-color</span>:{" "}
					<span className="value">white</span>;
				</p>
				<p className="attribute">{"}"}</p>
			</>

			<>
				<p>
					<span className="attribute">.nav</span> &gt;{" "}
					<span className="attribute"> div {"{"}</span>{" "}
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">display</span>
					: <span className="value">flex</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">justify-content</span>:{" "}
					<span className="value">space-between</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">align-items</span>:{" "}
					<span className="value">center</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">padding</span>
					: <span className="value">0px 24px</span>;
				</p>
				<p className="attribute">{"}"}</p>
			</>

			<>
				<p>
					<span className="attribute">.nav-logo {"{"}</span>{" "}
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">padding</span>
					: <span className="value">0px 0px 7px 0px</span>;
				</p>
				<p className="attribute">{"}"}</p>
			</>

			<>
				<p>
					<span className="attribute">.nav-info</span> &gt;
					<span className="attribute"> a {"{"}</span>{" "}
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">font-size</span>:{" "}
					<span className="value">14px</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">line-height</span>:{" "}
					<span className="value">24px</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;<span className="property">color</span>:{" "}
					<span className="value">#505256</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">font-weight</span>:{" "}
					<span className="value">500</span>;
				</p>
				<p>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<span className="property">font-family</span>:{" "}
					<span className="value">
						system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
						Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica
						Neue", sans-serif
					</span>
					;
				</p>
				<p className="attribute">{"}"}</p>
			</>
		</div>
	);
}

export default CodeEditor;
