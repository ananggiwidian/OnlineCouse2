import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";

import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<ToastContainer />
				<NavBar />
				<div className="content-container">
					<Routes>
						<Route path="/cart" element={<Cart />} />
						<Route path="/" element={<Home />} exact />
						<Route path="*" element={<NotFound />} /> {/* Use "*" for the catch-all route */}
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
