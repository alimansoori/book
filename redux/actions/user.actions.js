import {userConstants} from "./constants";
import axios from "../helpers/axios";

export const signup = (user) => {

    return async (dispatch) => {

        dispatch({ type: userConstants.USER_REGISTER_REQUEST });

        try {
            const res = await axios.post(`/wp/v2/users/register`,
                { ...user },
                {

                    "headers": {

                        "content-type": "application/json",

                    }
                }
            );

            if (res.status === 200){
                const { message } = res.data;

                dispatch({
                    type: userConstants.USER_REGISTER_SUCCESS,
                    payload: {
                        message,
                        user: {...user}
                    }
                });
            }
        } catch (error) {
            if (error.response.status === 400) {
                dispatch({
                    type: userConstants.USER_REGISTER_FAILURE,
                    payload: {
                        error: error.response.data.message
                    }
                });
            }
        }
    }
}