import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext"; // Import the UserContextProvider
import UserProfilePage from "./views/UserProfilePage";
import SpecificMeal from "./views/SpecificMeal";
import FullSearchResult from "./views/FullSearchResult";

function App() {
	return (
		<UserContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<UserProfilePage />} />
					<Route path="/meal/:id" element={<SpecificMeal />} />
					<Route path="/searchresult/:query" element={<FullSearchResult />} />
				</Routes>
			</BrowserRouter>
		</UserContextProvider>
	);
}

export default App;
