import React, { useEffect } from "react";
import { useRouter } from "next/router";
import StoreLayout from "../../components/StoreLayout/StoreLayout";
import PostsContent from "../../components/PostsContent";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { searchProducts } from "../../redux/actions";
import { isEmpty } from "../../functions";
import { searchCategories } from "../../redux/actions/category.actions";
import Link from 'next/link';
import { Button, Loader } from "semantic-ui-react";

const Shop = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.product);
    const { slugs } = router.query;
    const [hydrate, setHydrate] = useState(false);

    useEffect(() => {
        if (isEmpty(slugs) || typeof slugs === undefined) {
            setHydrate(true);
        }
        if (hydrate) {
            // dispatch(searchProducts(router.query));
            // dispatch(getCart());
            // dispatch(searchProducts(categorySlug));
            // console.log(router.query);
            // dispatch(searchProducts(router.query));
        }
        dispatch(searchProducts(router.query));

    }, [router.query]);

    useEffect(() => {
        dispatch(searchCategories());
    }, []);

    return (
        <StoreLayout sidebar router={router}>
            {loading ? (
                <Loader active={true} />
            ) : (
                products.length ? (
                    <PostsContent products={products} loading={loading} />
                ) : (`متاسفانه محصولی یافت نشد!`)
            )}
        </StoreLayout>
    )
}
export default Shop;