import { Table, Image } from "semantic-ui-react";
import { stringToNumber } from "../../functions";

const CheckoutCartItem = ({ item }) => {

	return (
		<Table.Row key={item.product.node.databaseId}>
			<Table.Cell>
				<Image size='tiny' src={item.product.node.image.sourceUrl} srcSet={item.product.node.image.srcSet} alt={item.product.node.image.title} />
			</Table.Cell>
			<Table.Cell>{item.product.node.name}</Table.Cell>
			<Table.Cell>{stringToNumber(item.total)}</Table.Cell>
		</Table.Row>
	)
};

export default CheckoutCartItem;
