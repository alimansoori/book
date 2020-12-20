import React from 'react';
import ResultSearchItem from "./ResultSearchItem";

const ResultSearch = ({products}) => {
    return (
        <React.Fragment>
            {
                products.length ? (
                    products.map((product) => {
                        return (
                            <ResultSearchItem key={product.databaseId} product={product}/>
                        )
                    })
                ) : null
            }
        </React.Fragment>
    );
};

export default ResultSearch;
