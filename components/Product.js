import Link from 'next/link';
import { isEmpty } from 'lodash';
import { Button, Card, Grid, Icon, Image, Label } from "semantic-ui-react";
import AttributesRender from './AttributesRender';
import AddToCart from './cart/AddToCartButton';
import { stringToNumber } from '../functions';

const Product = (props) => {
    const { product } = props;
    // const extra = (product) => {
    //     return (
    //         <Card.Content extra >
    //             <div className='ui two buttons' >
    //                 <Button basic color='green' >
    //                     {`افزودن به سبد خرید`}
    //                 </Button>
    //                 <Button basic color='red'> {product.price} </Button>
    //             </div>
    //         </Card.Content>
    //     );
    // }

    return (
        // @TODO Need to handle Group products differently.
        <Grid.Column mobile={16} tablet={8} computer={5} >
            <Link as={`/book/${product.slug}`}
                href={`/book/[slug]`} >
                    <Card as='a' fluid>

                        <Card.Content>
                            {!isEmpty(product.image) ? (
                                <Image
                                    floated="right"
                                    src={product.image.sourceUrl}
                                    size="tiny"
                                />
                            ) : ''}
                            <Card.Header as="h2" style={{ marginBottom: "10px" }}>{product.name}</Card.Header>
                            <AttributesRender label={`نشر`} attrs={product.paPublishers.edges} />
                            <AttributesRender label={`نویسنده`} attrs={product.paWriters.edges} />
                            <AttributesRender label={`مترجم`} attrs={product.paTranslators.edges} />
                            {/* <Card.Description>
                                Matthew is a musician living in Nashville.
                            </Card.Description> */}
                        </Card.Content>
                        <Card.Content extra textAlign="center">
                            <Label.Group tag>
                                <AddToCart product={product}/>
                                <Label color="red">{stringToNumber(product.price)}</Label>
                                <Label style={{ textDecoration: "line-through" }}>{stringToNumber(product.regularPrice)}</Label>
                            </Label.Group>
                        </Card.Content>
                    </Card>
            </Link>


        </Grid.Column>
    );
}

export default Product;

{ /*<AddToCartButton product={product}/>*/ } {
    /*<h3 className="card-header text-center">
                        { product.name ? product.name : '' }
                    </h3>*/
}