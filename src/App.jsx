import React from "react";
import { RouterProvider } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./NormalizeCSS";
import Router from "./Router";

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<UserContextProvider>
					<RouterProvider router={Router} />
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
