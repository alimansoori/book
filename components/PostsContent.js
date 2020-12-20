import React from 'react';
import { Dimmer, Loader } from "semantic-ui-react";
import Product from "./Product";

function PostsContent({ products, loading }) {
    return (
        <React.Fragment>
            {
                products.length ? (
                    products.map(product => <Product key={product.node.databaseId}
                        product={product.node} />)
                ) : ('')
            }
        </React.Fragment>
    )
}

export default PostsContent;