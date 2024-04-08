import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import UserProfilePage from "./views/UserProfilePage";
import SpecificMeal from "./views/SpecificMeal";
import FullSearchResult from "./views/FullSearchResult";
// import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./views/LoginForm";

function App() {
	return (
		<UserContextProvider>
			<BrowserRouter>
				{/* <Navbar /> */}
				<Routes>
					<Route path="/" element={<UserProfilePage />} />
					<Route path="/meal/:id" element={<SpecificMeal />} />
					<Route path="/searchresult/:query" element={<FullSearchResult />} />
					<Route path="/signin" element={<LoginForm />} />
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	);
}

export default App;
