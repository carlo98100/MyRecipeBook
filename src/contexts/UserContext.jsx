import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider(props) {
	const [users, setUsers] = useState([
		{
			firstname: "Test",
			lastname: "Testsson",
			email: "test@test.se",
			password: "testtest",
			products: [],
		},
	]);

	const [signedInUser, setSignedInUser] = useState({
		firstname: "Test",
		lastname: "Testsson",
		email: "test@test.se",
		password: "testtest",
		products: [],
	});

	// Method to add a product to the array
	const addProduct = (product) => {
		setSignedInUser((prevUser) => ({
			...prevUser,
			products: [...prevUser.products, product],
		}));
		console.log("Added product:", product);
	};

	// Method to remove a product by its ID
	const removeProductById = (productId) => {
		console.log("Deleting product with ID:", productId);
		setSignedInUser((prevUser) => {
			const updatedProducts = prevUser.products.filter((product) => product.idMeal !== productId);
			console.log("Updated products:", updatedProducts);
			return {
				...prevUser,
				products: updatedProducts,
			};
		});
	};

	const signInUser = (email, password) => {
		const user = users.find((user) => user.email === email && user.password === password);

		if (user) {
			setSignedInUser(user);
			console.log("Signed in as:", user);
			return true;
		} else {
			console.log("No user found with that email and password");
			return false;
		}
	};

	const signOutUser = () => {
		setSignedInUser(null);
	};

	const AddnewUser = (newUser) => {
		setUsers([...users, newUser]);
	};

	return (
		<UserContext.Provider value={{ signedInUser, addProduct, removeProductById, AddnewUser, signInUser, signOutUser }}>
			{props.children}
		</UserContext.Provider>
	);
}

export { UserContext, UserContextProvider };
