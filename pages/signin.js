import {useContext, useEffect, useState} from 'react';
import {Container, Form, Button, Row, Col} from "react-bootstrap";
import Input from "../components/UI/Input";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {v4} from "uuid";
import {login} from "../redux/actions";
import {useMutation} from "@apollo/react-hooks";
import LOGIN_USER from "../mutations/login-user";
import {authConstants} from "../redux/actions/constants";

const Signin = (props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const {authenticate} = useSelector(state => state.auth);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [requestError, setRequestError] = useState();
    const loginQryInput = {
        clientMutationId: v4(),
        username,
        password
    };

    // Login Mutation
    const [loginUser, { loading: addToCartLoading, error: addToCartError}] = useMutation(LOGIN_USER, {
        variables: {
            input: loginQryInput,
        },
        onCompleted: (data) => {
            const {authToken, user} = data.login;

            localStorage.setItem('book-token', authToken);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token: authToken,
                    user
                }
            });
        },
        onError: (error) => {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: error.graphQLErrors[0].message
                }
            });
        }
    });

    const userLogin = (e) => {
        e.preventDefault();

        dispatch({type: authConstants.LOGIN_REQUEST});
        loginUser();
        // login();
    }

    useEffect(() => {
    }, []);

    authenticate ? router.push('/') : null;

    return (
        <Container>
            <Row style={{marginTop: '50px'}}>
                <Col md={{span: 6, offset: 3}}>
                    <Form onSubmit={userLogin}>
                        <Input
                            label="Username or Email"
                            placeholder="Username or Email"
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

export default Signin;
