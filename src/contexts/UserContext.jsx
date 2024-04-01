import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserContextProvider(props) {
	const [user, setUser] = useState({
		username: "",
		password: "",
		products: [],
	});

	// Method to add a product to the array
	const addProduct = (product) => {
		setUser((prevUser) => ({
			...prevUser,
			products: [...prevUser.products, product],
		}));
		console.log(product);
	};

	// Method to remove a product by its ID
	const removeProductById = (productId) => {
		console.log("Deleting product with ID:", productId);
		setUser((prevUser) => {
			const updatedProducts = prevUser.products.filter((product) => product.idMeal !== productId);
			console.log("Updated products:", updatedProducts);
			return {
				...prevUser,
				products: updatedProducts,
			};
		});
	};

	return <UserContext.Provider value={{ user, addProduct, removeProductById }}>{props.children}</UserContext.Provider>;
}

export { UserContext, UserContextProvider };
