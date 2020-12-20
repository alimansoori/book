import React, { useState, useEffect } from 'react';
export const AppContext = React.createContext([
	{},
	() => {}
]);

export const AppProvider = ( props ) => {

	const [ cart, setCart ] = useState( null );
	const [auth, setAuth] = useState({
		token: "",
		user: {
			displayName: "",
			firstName: "",
			lastName: "",
			email: "",
			nicename: "",
			picture: ""
		},
		authenticate: false,
		authenticating: false,
		loading: false,
		error: null,
		message:''
	});

	useEffect( () => {

		// @TODO Will add option to show the cart with localStorage later.
		if ( process.browser ) {

			let cartData = localStorage.getItem( 'book-cart' );
			cartData = null !== cartData ? JSON.parse( cartData ) : '';
			setCart( cartData );

		}

	}, [] );

	return (
		<AppContext.Provider value={ [ cart, setCart, auth, setAuth ] }>
			{ props.children }
		</AppContext.Provider>
	);
};
