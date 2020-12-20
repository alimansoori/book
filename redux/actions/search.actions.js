import {searchConstants} from "./constants";
import client from "../../components/ApolloClient";
import PRODUCTS_FILTER_BY_LOCAL from "../../queries/products-filter-by-local";

export const getSearch = (value, slugLocation, count) => {
    return async dispatch => {
        dispatch({
            type: searchConstants.SEARCH_REQUEST,
            payload: {
                value
            }
        });

        try {
            if (!value) value = "fkdfkasllfasdsfh";

            const result = await client.query({
                query: PRODUCTS_FILTER_BY_LOCAL,
                variables: {
                    slugLocation,
                    search: value,
                    first: count
                }
            });

            const {nodes} = result.data.paLocation.variations;
            dispatch({
                type: searchConstants.SEARCH_SUCCESS,
                payload: {
                    products: nodes,
                }
            });
        } catch (error) {
            dispatch({
                type: searchConstants.SEARCH_FAILURE,
                payload: {
                    error: error.response.data.message
                }
            });
        }
    }
}