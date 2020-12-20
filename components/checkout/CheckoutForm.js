import { useState, useContext, useEffect } from 'react';
import Billing from "./Billing";
import YourOrder from "./YourOrder";
import PaymentModes from "./PaymentModes";
import { AppContext } from "../context/AppContext";
import validateAndSanitizeCheckoutForm from '../../validator/checkout';
import { useMutation, useQuery } from "@apollo/react-hooks";
import { getFormattedCart, createCheckoutData } from "../../functions";
import OrderSuccess from "./OrderSucess";
import GET_CART from "../../queries/get-cart";
import CHECKOUT_MUTATION from "../../mutations/checkout";
import { useSelector } from 'react-redux';
import { Form, Grid } from 'semantic-ui-react';

const CheckoutForm = () => {

	const initialState = {
		firstName: '',
		lastName: '',
		company: '',
		country: '',
		address1: '',
		address2: '',
		city: '',
		state: '',
		postcode: '',
		phone: '',
		email: '',
		createAccount: false,
		orderNotes: '',
		paymentMethod: '',
		errors: null
	};

	// const [cart, setCart] = useContext(AppContext);
	const {cart} = useSelector(state => state.cart);
	const [input, setInput] = useState(initialState);
	const [orderData, setOrderData] = useState(null);
	const [requestError, setRequestError] = useState(null);

	// const {cart} = useSelector(state => state.cart);

	// Get Cart Data.
	// const { loading, error, data, refetch } = useQuery(GET_CART, {
	// 	notifyOnNetworkStatusChange: true,
	// 	onCompleted: () => {
	// 		// console.warn( 'completed GET_CART' );

	// 		// Update cart in the localStorage.
	// 		const updatedCart = getFormattedCart(data);
	// 		localStorage.setItem('book-cart', JSON.stringify(updatedCart));

	// 		// Update cart data in React Context.
	// 		// setCart(updatedCart);
	// 	}
	// });

	// Checkout or CreateOrder Mutation.
	const [checkout, { data: checkoutResponse, loading: checkoutLoading, error: checkoutError }] = useMutation(CHECKOUT_MUTATION, {
		variables: {
			input: orderData
		},
		onCompleted: () => {
			// console.warn( 'completed CHECKOUT_MUTATION' );
			refetch();
		},
		onError: (error) => {
			if (error) {
				setRequestError(error.graphQLErrors[0].message);
			}
		}
	});

	/*
	 * Handle form submit.
	 *
	 * @param {Object} event Event Object.
	 *
	 * @return {void}
	 */
	const handleFormSubmit = (event) => {
		event.preventDefault();
		const result = validateAndSanitizeCheckoutForm(input);
		if (!result.isValid) {
			setInput({ ...input, errors: result.errors });
			return;
		}
		const checkOutData = createCheckoutData(input);
		setOrderData(checkOutData);
		setRequestError(null);
	};

	/*
	 * Handle onchange input.
	 *
	 * @param {Object} event Event Object.
	 *
	 * @return {void}
	 */
	const handleOnChange = (event) => {

		if ('createAccount' === event.target.name) {
			const newState = { ...input, [event.target.name]: !input.createAccount };
			setInput(newState);
		} else {
			const newState = { ...input, [event.target.name]: event.target.value };
			setInput(newState);
		}
	};

	useEffect(() => {

		if (null !== orderData) {
			// Call the checkout mutation when the value for orderData changes/updates.
			checkout();
		}

	}, [orderData]);



	return (
		<>
			{ cart ? (
				<Grid.Row columns={2} as={Form} onSubmit={handleFormSubmit}>
					{/* <Grid columns={2}> */}
						<Grid.Column>
							<h2>{`جزئیات صورتحساب`}</h2>
							<Billing input={input} handleOnChange={handleOnChange} />
						</Grid.Column>
						<Grid.Column>

							{/*	Order*/}
							<h2 className="mb-4">{`سفارش شما`}</h2>
							<YourOrder cart={cart} />

							{/*Payment*/}
							<PaymentModes input={input} handleOnChange={handleOnChange} />
							<div>
								<button type="submit">
									Place Order
								</button>
							</div>

							{/* Checkout Loading*/}
							{checkoutLoading && <p>Processing Order...</p>}
							{requestError && <p>Error : {requestError} :( Please try again</p>}
						</Grid.Column>
					{/* </Grid> */}
				</Grid.Row>
			) : ''}

			{/*	Show message if Order Sucess*/}
			<OrderSuccess response={checkoutResponse} />
		</>
	);
};

export default CheckoutForm;
