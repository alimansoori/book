import Link from 'next/link';
import { useContext, useState, Fragment } from 'react';
import { AppContext } from "../../context/AppContext";
import { getFormattedCart, getUpdatedItems, removeItemFromCart, stringToNumber } from '../../../functions';
import CartItem from "./CartItem";
import { v4 } from 'uuid';
import { useMutation, useQuery } from "@apollo/react-hooks";
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from "../../../queries/get-cart";
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import { Message, Table, Menu, Container, Segment, Button, Icon, Loader, Popup } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, updateCart } from '../../../redux/actions';


const CartItemsContainer = () => {


	// @TODO wil use it in future variations of the project.
	// const [cart, setCart] = useContext(AppContext);
	// const [requestError, setRequestError] = useState(null);
	const { cart, loading, error, clearCartProcessing, clearCartError } = useSelector(state => state.cart);
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);


	// Get Cart Data.
	// const { loading, error, data, refetch } = useQuery(GET_CART, {
	// 	notifyOnNetworkStatusChange: true,
	// 	onCompleted: () => {

	// 		// console.warn( 'completed GET_CART', data );

	// 		// Update cart in the localStorage.
	// 		const updatedCart = getFormattedCart(data);
	// 		localStorage.setItem('book-cart', JSON.stringify(updatedCart));

	// 		// Update cart data in React Context.
	// 		setCart(updatedCart);
	// 	}
	// });

	// Update Cart Mutation.
	// const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation(UPDATE_CART, {
	// 	onCompleted: () => {
	// 		refetch();
	// 	},
	// 	onError: (error) => {
	// 		if (error) {
	// 			setRequestError(error.graphQLErrors[0].message);
	// 		}
	// 	}
	// });

	// Update Cart Mutation.
	// const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation(CLEAR_CART_MUTATION, {
	// 	onCompleted: () => {
	// 		refetch();
	// 	},
	// 	onError: (error) => {
	// 		if (error) {
	// 			setRequestError(error.graphQLErrors[0].message);
	// 		}
	// 	}
	// });

	/*
	 * Handle remove product click.
	 *
	 * @param {Object} event event
	 * @param {Integer} Product Id.
	 *
	 * @return {void}
	 */
	const handleRemoveProductClick = (event, cartKey, products) => {

		event.stopPropagation();

		if (products.length) {

			// By passing the newQty to 0 in updateCart Mutation, it will remove the item.
			const newQty = 0;
			const updatedItems = getUpdatedItems(products, newQty, cartKey);

			dispatch(updateCart({
				input: {
					clientMutationId: v4(),
					items: updatedItems
				}
			}));
		}
	};

	// Clear the entire cart.
	const handleClearCart = (event) => {

		event.stopPropagation();

		if (clearCartProcessing) {
			return;
		}

		dispatch(
			clearCart({
				input: {
					clientMutationId: v4(),
					all: true
				}
			})
		);
	}

	return (
		<Fragment>
			<Container>
				<Message attached='top' content='Message' icon='attention' warning />
				<Table attached>
					<Table.Header>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell></Table.HeaderCell>
						<Table.HeaderCell>{`محصول`}</Table.HeaderCell>
						<Table.HeaderCell>{`قیمت`}</Table.HeaderCell>
						<Table.HeaderCell>{`تعداد`}</Table.HeaderCell>
						<Table.HeaderCell>{`مجموع قیمت`}</Table.HeaderCell>
					</Table.Header>
					<Table.Body>
						{cart.contents.nodes.length && (
							cart.contents.nodes.map(item => (
								<CartItem
									key={item.product.node.productId}
									item={item}
									// updateCartProcessing={updateCartProcessing}
									updateCartProcessing={loading}
									products={cart.contents.nodes}
									handleRemoveProductClick={handleRemoveProductClick}
								/>
							))
						)}
					</Table.Body>
				</Table>
				<Table attached='bottom' celled>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell width='2'>{`مجموع سبد خرید`}</Table.HeaderCell>
							<Table.HeaderCell />
						</Table.Row>
					</Table.Header>
					<Table.Body>
						<Table.Row>
							<Table.Cell>{`جمع کل`}</Table.Cell>
							<Table.Cell>{stringToNumber(cart.total)}</Table.Cell>
						</Table.Row>
						<Table.Row>
							<Table.Cell>{`جمع`}</Table.Cell>
							<Table.Cell>{stringToNumber(cart.total)}</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
				<Menu attached='bottom' compact widths={3}>
					<Link href="/checkout">
						<Menu.Item as='a'>
							{`پرداخت`}
						</Menu.Item>
					</Link>
					<Menu.Item onClick={(event) => handleClearCart(event)} as='a'>
						{clearCartProcessing ? (
							<Loader active inline='centered' />
						) : (
								<Popup
									content={`موردی برای حذف موجود نیست`}
									eventsEnabled={true}
									on='click'
									onClose={() => setOpen(false)}
									onOpen={() => setOpen(true)}
									open={clearCartError ? true : false}
									trigger={<span>پاک کردن سبد خرید</span>}
								/>
							)}
					</Menu.Item>
					<Link href="/shop"><Menu.Item as='a'>{`افزودن محصول جدید به سبد`}</Menu.Item></Link>
				</Menu>
			</Container>
		</Fragment>
	);
};

export default CartItemsContainer;
