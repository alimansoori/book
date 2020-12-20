import { Header } from "semantic-ui-react";
import CheckoutForm from "../components/checkout/CheckoutForm";
import StoreLayout from "../components/StoreLayout/StoreLayout";

const Checkout = () => (
    <StoreLayout centered>
        <Header as='h1'>{` پرداخت`}</Header>
        <CheckoutForm/>
    </StoreLayout>
);

export default Checkout;
