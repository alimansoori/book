import ProductCategoryBlock from "./ParentCategoryBlock";
import {Dimmer, Loader} from "semantic-ui-react";
import React from "react";

const ParentCategoriesBlock = ( props ) => {

	const { productCategories, loading } = props;

	return (

		<div className="product-container row d-flex justify-content-center">
			{ !loading ? (
				productCategories.map( productCategory => <ProductCategoryBlock key={ productCategory.id }  category={ productCategory }/> )
			) : (
				<Dimmer active >
					<Loader size="large"/>
				</Dimmer>
			) }
		</div>

	)

};

export default ParentCategoriesBlock;
