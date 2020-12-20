import React, {useState} from "react";
import {authConstants, userConstants} from "./constants";
import {useMutation} from "@apollo/react-hooks";
import LOGIN_USER from "../../mutations/login-user";

const loginUserr = (dispatch, loginQryInput) => {
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
            // If error.
            // if ( addToCartError ) {
            //     setRequestError( addToCartError.graphQLErrors[ 0 ].message );
            // }
            //
            // // On Success:
            // // 1. Make the GET_CART query to update the cart with new values in React context.
            // refetch();
            //
            // // 2. Show View Cart Button
            // setShowViewCart( true )
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

    loginUser();
};

export function login() {
    const [name, setName] = useState("");
    setName("jjjjj");
    return null;
}

export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('book-token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    message: 'Failed to login'
                }
            });
        }
    }
}

export const signout = () => {
    return async dispatch => {
        dispatch({type: authConstants.LOGOUT_REQUEST});
        localStorage.clear();
        dispatch({
            type: authConstants.LOGOUT_SUCCESS
        });
    }
}