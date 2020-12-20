import { Fragment } from "react";
import { addFirstProduct, updateCart } from "../../functions";
import { v4 } from 'uuid';
import { Button, Icon } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions";

const AddToCart = (props) => {

	const { product } = props;

	const dispatch = useDispatch();

	const productQryInput = {
		clientMutationId: v4(), // Generate a unique id.
		productId: product.databaseId,
	};

	// const [ cart, setCart ] = useContext( AppContext );
	// const [ showViewCart, setShowViewCart ] = useState( false );
	// const [ requestError, setRequestError ] = useState( null );


	/**
	 * @TODO will update this in future, when required.
	 * Handles adding items to the cart.
	 *
	 * @return {void}
	 */
	// const handleAddToCartLocalStorage = () => {

	// 	// If component is rendered client side.
	// 	if (process.browser) {

	// 		let existingCart = localStorage.getItem('book-cart');

	// 		// If cart has item(s) already, update existing or add new item.
	// 		if (existingCart) {

	// 			existingCart = JSON.parse(existingCart);

	// 			const qtyToBeAdded = 1;

	// 			const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

	// 			setCart(updatedCart);

	// 		} else {
	// 			/**
	// 			 * If No Items in the cart, create an empty array and add one.
	// 			 * @type {Array}
	// 			 */
	// 			const newCart = addFirstProduct(product);
	// 			setCart(newCart);
	// 		}

	// 		// Show View Cart Button
	// 		setShowViewCart(true)
	// 	}
	// };

	// Get Cart Data.
	// const { loading, error, data, refetch } = useQuery(GET_CART, {
	// 	notifyOnNetworkStatusChange: true,
	// 	onCompleted: () => {
	// 		// console.warn( 'completed GET_CART' );

	// 		// Update cart in the localStorage.
	// 		const updatedCart = getFormattedCart(data);
	// 		localStorage.setItem('book-cart', JSON.stringify(updatedCart));

	// 		// Update cart data in React Context.
	// 		setCart(updatedCart);
	// 	}
	// });

	// Add to Cart Mutation.
	// const [addToCart, { loading: addToCartLoading, error: addToCartError }] = useMutation(ADD_TO_CART, {
	// 	variables: {
	// 		input: productQryInput,
	// 	},
	// 	onCompleted: () => {
	// 		console.warn('completed ADD_TO_CART');

	// 		// If error.
	// 		if (addToCartError) {
	// 			setRequestError(addToCartError.graphQLErrors[0].message);
	// 		}

	// 		// On Success:
	// 		// 1. Make the GET_CART query to update the cart with new values in React context.
	// 		refetch();

	// 		// 2. Show View Cart Button
	// 		setShowViewCart(true)
	// 	},
	// 	onError: (error) => {
	// 		if (error) {
	// 			setRequestError(error.graphQLErrors[0].message);
	// 		}
	// 	}
	// });

	// const handleAddToCartClick = () => {
	// 	// handleAddToCartLocalStorage();
	// 	setRequestError(null);
	// 	addToCart();
	// };

	const handleAddToCart = (e) => {
		e.preventDefault();
		dispatch(addToCart(productQryInput));
	}

	return (
		<Fragment>
			{/* Add To Cart Loading*/}
			{/* {addToCartLoading && <p>Adding to Cart...</p>} */}

			{/*	Check if its an external product then put its external buy link */}
			{/* { "ExternalProduct" === product.__typename ? (
					<a href={ product.externalUrl } target="_blank" className="btn btn-secondary">Buy</a>
				) :
				<button onClick={ handleAddToCartClick } className="btn btn-secondary">Add to cart</button>
			}
			{ showViewCart ? (
				<Link href="/cart"><button className="book-view-cart-btn btn btn-secondary">View Cart</button></Link>
			) : '' } */}
			<Button
				onClick={(e) => handleAddToCart(e)}>
				<Button.Content visible>
					<Icon name='add to cart' />
				</Button.Content>
			</Button>
		</Fragment>
	);
};

export default AddToCart;
