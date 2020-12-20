import React, { useContext, Fragment } from 'react';
import { AppContext } from "./../context/AppContext";
import Link from 'next/link';
import { Button, Menu } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { stringToNumber } from '../../functions';

const CartIcon = () => {

	// const [cart] = useContext(AppContext);
	// const productsCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
	// const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';
	const { cart, loading } = useSelector(state => state.cart);

	return (
		<Fragment>
			<Link href="/cart">
				{/* <div className="book-cart-wrap">
						{totalPrice ? <span className="book-cart-price mr-2">{totalPrice}</span> : ''}
						<span className="book-cart-icon-container">
							<i className="fa fa-shopping-cart book-cart-icon" />
							{productsCount ? <span className="book-cart-count">{productsCount}</span> : ''}
						</span>
					</div> */}
				<Menu.Item as='a'>
					<Button
						loading={loading}
						icon='cart'
						color='red'
						label={{ as: 'a', basic: true, color: 'red', content: (stringToNumber(cart.total)) }}
						labelPosition='left'
					/>
				</Menu.Item>
			</Link>

		</Fragment>

	)
};

export default CartIcon;
