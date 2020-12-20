import { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { Icon, Input, Table } from 'semantic-ui-react';
import { v4 } from "uuid";
import { getUpdatedItems, stringToNumber } from "../../../functions";
import { updateCart } from '../../../redux/actions';

const CartItem = ({
	item,
	products,
	updateCartProcessing,
	handleRemoveProductClick,
}) => {

	const [productCount, setProductCount] = useState(item.quantity);
	const dispatch = useDispatch();

	/*
	 * When user changes the qty from product input update the cart in localStorage
	 * Also update the cart in global context
	 *
	 * @param {Object} event event
	 *
	 * @return {void}
	 */
	const handleQtyChange = (event, cartKey) => {

		if (process.browser) {

			event.stopPropagation();

			// If the previous update cart mutation request is still processing, then return.
			if (updateCartProcessing) {
				return;
			}

			// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
			const newQty = (event.target.value) ? parseInt(event.target.value) : 1;

			// Set the new qty in state.
			setProductCount(newQty);

			if (products.length) {

				const updatedItems = getUpdatedItems(products, newQty, cartKey);

				dispatch(
					updateCart({
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					})
				);
			}

		}
	};


	return (
		<Fragment>
			<Table.Row key={item.databaseId}>
				<Table.Cell textAlign='center'>
					{/* Remove item */}
					{/* <span className="book-cart-close-icon"
						onClick={(event) => handleRemoveProductClick(event, item.cartKey, products)}>
						<i className="fa fa-times-circle" />
					</span> */}
					<Icon
						onClick={(event) => handleRemoveProductClick(event, item.key, products)}
						size='large'
						name='remove circle'
						style={{ cursor: "pointer" }} />
				</Table.Cell>
				<Table.Cell>
					<img width="64" src={item.product.node.image.sourceUrl} srcSet={item.product.node.image.srcSet} alt={item.product.node.image.title} />
				</Table.Cell>
				<Table.Cell>{item.product.node.name}</Table.Cell>
				<Table.Cell>{stringToNumber(item.product.node.price)}</Table.Cell>
				<Table.Cell>
					{/* @TODO Need to update this with graphQL query */}
					<Input
						loading={updateCartProcessing}
						type="number"
						min="1"
						key={item.key}
						value={productCount}
						onChange={(event) => handleQtyChange(event, item.key)}
					/>
				</Table.Cell>
				<Table.Cell>
					{('string' !== typeof item.total) ? item.total.toFixed(2) : stringToNumber(item.total)}
				</Table.Cell>
			</Table.Row>
		</Fragment>
	)
};

export default CartItem;
