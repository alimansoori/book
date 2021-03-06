import React from "react";
import client from '../components/ApolloClient';
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";
import GET_CATEGORIES_QUERY from "../queries/get-categories";

const Categories = ( props ) => {

	const { productCategories } = props;

	return (
		<React.Fragment>
			{/*Categories*/}
			<div className="mt-5 text-center content-wrap">
				<h2>Categories</h2>
				<ParentCategoriesBlock productCategories={ productCategories }/>
			</div>
		</React.Fragment>
	)
};

Categories.getInitialProps = async () => {

	const result = await client.query({
		query: GET_CATEGORIES_QUERY,
	});

	return {
		productCategories: result.data.productCategories.nodes,
	}

};

export default Categories;
