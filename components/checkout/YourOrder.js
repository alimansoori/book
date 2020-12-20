import { Fragment } from 'react';
import { Table } from 'semantic-ui-react';
import CheckoutCartItem from "./CheckoutCartItem";

const YourOrder = ( { cart } ) => {

	return (
		<Fragment>
			{ cart ? (
				<Fragment>
					{/*Product Listing*/}
					<Table celled padded>
						<Table.Header>
						<Table.Row>
							<Table.HeaderCell/>
							<Table.HeaderCell>{`محصول`}</Table.HeaderCell>
							<Table.HeaderCell>{`جمع جزئی`}</Table.HeaderCell>
						</Table.Row>
						</Table.Header>
						<Table.Body>
						{ cart.contents.nodes.length && (
							cart.contents.nodes.map( item => (
								<CheckoutCartItem key={ item.product.databaseId } item={ item } />
							) )
						) }
						{/*Total*/}
						<Table.Row className="">
							
							<Table.Cell className="book-checkout-total">{`جمع جزئی`}</Table.Cell>
							<Table.Cell className="book-checkout-total">{ cart.totalProductsPrice }</Table.Cell>
							<Table.Cell className=""/>
						</Table.Row>
						<Table.Row className="">
							<Table.Cell className="book-checkout-total">{`جمع کل`}</Table.Cell>
							<Table.Cell className="book-checkout-total">{ cart.totalProductsPrice }</Table.Cell>
							<Table.Cell className=""/>
						</Table.Row>
						</Table.Body>
					</Table>
				</Fragment>
			) : '' }
		</Fragment>
	)
};

export default YourOrder;
