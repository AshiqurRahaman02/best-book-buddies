import "./styles/App.css";
import "./styles/media_queries.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
				{/* Define routes for pages */}
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;
