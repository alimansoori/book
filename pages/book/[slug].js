import React, { useEffect, useState } from "react";
import StoreLayout from "../../components/StoreLayout/StoreLayout";
import client from '../../components/ApolloClient';
import AddToCartButton from '../../components/cart/AddToCartButton';
import PRODUCT_BY_SLUG_QUERY from '../../queries/product-by-slug';
import clientConfig from '../../client-config';
import { isEmpty } from 'lodash';
import { Card, Grid, Header, Image, Label } from "semantic-ui-react";
import PostsContent from "../../components/PostsContent";
import Product from "../../components/Product";
import AddToCart from "../../components/cart/AddToCartButton";
import Link from "next/link";
import { stringToNumber } from "../../functions";
import Listattrsbook from "../../components/Book/ListAttrsBook";

const Book = (props) => {
    const { product } = props;

    const [desc, setDesc] = useState(null);

    // const router = useRouter()
    // const { slug } = router.query 

    useEffect(() => {
        console.log(product);
    }, []);

    return (
        <StoreLayout>
            {product ? (
                <>
                    <Grid.Row columns={2} centered>
                        <Grid.Column>
                            <Header as='h1'>{product.name}</Header>
                            <Listattrsbook product={product} />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: product.description,
                                }}
                                className="card-text"
                            />
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: desc,
                                }}
                                className="card-text"
                            />
                            <AddToCartButton product={product} />
                        </Grid.Column>
                        <Grid.Column centered>
                            {!isEmpty(product.image) ? (
                                <Image
                                    src={product.image.sourceUrl}
                                    alt="Product Image"
                                    size='large'
                                    srcSet={product.image.srcSet}
                                />
                            ) : !isEmpty(clientConfig.singleImagePlaceholder) ? (
                                <Image
                                    src={clientConfig.singleImagePlaceholder}
                                    alt="Placeholder product image"
                                />
                            ) : null}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                    <Header as='h2' block color='grey'>
                        {`از دیگر انتشارات`}
                    </Header>
                    </Grid.Row>
                    <Grid.Row centered>

                        {product.related.nodes.length ? (
                            product.related.nodes.map(pr => {
                                if (pr.type !== 'SIMPLE') {
                                    // if (!desc) setDesc(pr.description);
                                    return false;
                                };
                                return (
                                    <Grid.Column mobile={16} tablet={8} computer={4} >
                                        <Link as={`/book/${pr.slug}`}
                                            href={`/book/[slug]`} >
                                            <Card as='a' fluid>

                                                <Card.Content>
                                                    {!isEmpty(pr.image) ? (
                                                        <Image
                                                            floated="right"
                                                            src={pr.image.sourceUrl}
                                                            size="tiny"
                                                        />
                                                    ) : ''}
                                                    <Card.Header as="h2" style={{ marginBottom: "10px" }}>{pr.name}</Card.Header>
                                                    <AttributesRender label={`نشر`} attrs={pr.paPublishers.nodes} />
                                                    <AttributesRender label={`نویسنده`} attrs={pr.paWriters.nodes} />
                                                    <AttributesRender label={`مترجم`} attrs={pr.paTranslators.nodes} />
                                                </Card.Content>
                                                <Card.Content extra textAlign="center">
                                                    <Label.Group tag>
                                                        <AddToCart product={pr} />
                                                        <Label color="red">{stringToNumber(pr.price)}</Label>
                                                        <Label style={{ textDecoration: "line-through" }}>{stringToNumber(pr.regularPrice)}</Label>
                                                    </Label.Group>
                                                </Card.Content>
                                            </Card>
                                        </Link>


                                    </Grid.Column>
                                );
                            })
                        ) : ('')}
                    </Grid.Row>
                </>
            ) : (
                    ''
                )}
        </StoreLayout>
    );
};


export const getServerSideProps = async (context) => {

    let { query: { slug } } = context

    const id = slug ? slug : context.query.id;


    const result = await client.query({
        query: PRODUCT_BY_SLUG_QUERY,
        variables: { id }
    })

    return {
        props: {
            product: result.data.product,
            revalidate: 1,
        },
    };
}

function AttributesRender({ attrs, label }) {

    return (
        <Card.Meta style={{ marginTop: "2px" }}>
            <Label key={label}>
                {`${label}:`}
                {attrs.map(attr => (
                    < Label.Detail key={attr.databaseId}>
                        { attr.name}
                    </Label.Detail>
                ))
                }
            </Label >
        </Card.Meta>
    )
}

export default Book;
