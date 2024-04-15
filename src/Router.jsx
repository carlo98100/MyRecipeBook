import { createBrowserRouter, Outlet } from "react-router-dom";
import UserProfile from "./views/UserProfile";
import Categories from "./views/Categories";
import MealsByCategory from "./views/MealsByCategory";
import AllLikedMeals from "./views/AllLikedMeals";
import SpecificMeal from "./views/SpecificMeal";
import LoginForm from "./views/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar/Navbar";

const Router = createBrowserRouter([
	{
		path: "/signin",
		element: <LoginForm />,
	},
	{
		path: "/",
		element: (
			<ProtectedRoute>
				<Navbar />
				<Outlet />
			</ProtectedRoute>
		),
		children: [
			{
				index: true,
				element: <UserProfile />,
			},
			{
				path: "categories",
				element: (
					<ProtectedRoute>
						<Categories />
					</ProtectedRoute>
				),
			},
			{
				path: "/category/:categoryName/meals",
				element: (
					<ProtectedRoute>
						<MealsByCategory />
					</ProtectedRoute>
				),
			},
			{
				path: "alllikedmeals",
				element: (
					<ProtectedRoute>
						<AllLikedMeals />
					</ProtectedRoute>
				),
			},
			{
				path: "/meal/:id",
				element: (
					<ProtectedRoute>
						<SpecificMeal />
					</ProtectedRoute>
				),
			},
		],
	},
]);

export default Router;
