import React, {useState} from 'react';
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import Input from "../components/UI/Input";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {v4} from "uuid";
import {useMutation} from "@apollo/react-hooks";
import {authConstants, userConstants} from "../redux/actions/constants";
import REGISTER_USER from "../mutations/register-user";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {authenticate} = useSelector(state => state.auth);
    const router = useRouter();
    const dispatch = useDispatch();

    const registerQryInput = {
        clientMutationId: v4(),
        username,
        email,
        password
    };

    // Login Mutation
    const [registerUser, { loading: addToCartLoading, error: addToCartError}] = useMutation(REGISTER_USER, {
        variables: {
            input: registerQryInput,
        },
        onCompleted: (data) => {
            const {user} = data.registerUser;

            dispatch({
                type: userConstants.USER_REGISTER_SUCCESS,
                payload: {
                    user
                }
            });
        },
        onError: (error) => {
            dispatch({
                type: userConstants.USER_REGISTER_FAILURE,
                payload: {
                    error: error.graphQLErrors[0].message
                }
            });
        }
    });

    const userSignup = (e) => {
        e.preventDefault();

        dispatch({type: userConstants.USER_REGISTER_REQUEST});
        registerUser();
        // login();
    }

    authenticate ? router.push('/') : null;

    return (
        <Container>
            <Row style={{marginTop: '50px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={userSignup}>
                        <Input
                            label="Email"
                            placeholder="Email"
                            type="text"
                            errorMessage=""
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Username"
                            placeholder="Username"
                            type="text"
                            errorMessage=""
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <Input
                            label="Password"
                            placeholder="Password"
                            type="password"
                            errorMessage=""
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

Signup.getInitialProps = async props => {
    console.info('##### Congratulations! You are authorized! ######', props);
    return {};
};

export default Signup;
