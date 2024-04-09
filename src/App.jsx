import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import UserProfilePage from "./views/UserProfilePage";
import SpecificMeal from "./views/SpecificMeal";
import FullSearchResult from "./views/FullSearchResult";
// import MobileNavbar from "./components/MobileNavbar";
import Navbar from "./components/Navbar/Navbar";
import LoginForm from "./views/LoginForm";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./NormalizeCSS";
import ProtectedRoute from "./components/ProtectedRoute";

// import { Navigate, Outlet } from "react-router-dom";

// function ProtectedRoute({ isAllowed, redirectTo = "/signin", children }) {
// 	if (!isAllowed) {
// 		return <Navigate to={redirectTo} />;
// 	}
// 	return children ? children : <Outlet />;
// }

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<UserContextProvider>
					<BrowserRouter>
						<Routes>
							<Route
								path="/"
								element={
									<ProtectedRoute>
										<UserProfilePage />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/meal/:id"
								element={
									<ProtectedRoute>
										<SpecificMeal />
									</ProtectedRoute>
								}
							/>
							<Route
								path="/searchresult/:query"
								element={
									<ProtectedRoute>
										<FullSearchResult />
									</ProtectedRoute>
								}
							/>
							<Route path="/signin" element={<LoginForm />} />
						</Routes>
					</BrowserRouter>
				</UserContextProvider>
			</ThemeProvider>
		</>
	);
}

const theme = {
	colors: {
		primary: "#52c4b9",
		white: "#FFFF",
		primaryBackground: "#373f4c",
		textDark: "#4d5c70",

		primaryDark: "#455568",
		primaryLight: "#6e7a8b",
		accent: "#3b4b5f",
		slateBlue: "#55606f",

		shadow: "#00000033",
	},
};
export default App;
