import React, {useEffect} from "react";
import Product from "../components/Product";
import {Dimmer, Grid, Loader} from "semantic-ui-react";
import {useDispatch, useSelector} from "react-redux";
// import {getProductsAndCategories} from "../redux/actions";
import HomepageHeading from "../components/Layout/HomepageHeading";
import { useRouter } from "next/router";

const Index = (props) => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.product);
    const router = useRouter();

    const category = useSelector(state => state.category);

    useEffect(() => {
        // dispatch(getProductsAndCategories());
        console.log(router)
    }, []);

    return (
        <React.Fragment>
            <HomepageHeading />
        </React.Fragment>
    )
};

/*Index.getInitialProps = async () => {

    const result = await client.query({
        query: PRODUCTS_AND_CATEGORIES_QUERY,
    });

    return {
        productCategories: result.data.productCategories.nodes,
        products: result.data.products.nodes,
    }
};*/

export default Index;
