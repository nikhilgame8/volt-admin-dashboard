import axios from "axios"

const BASE_URL = "https://dailypoll-api.pollpe.com/v3/"

export const signInWithPassword = (details, callback) => {
    return async(dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}oauth2/login`, {
                    username: details.username,
                    password: details.password,
                    returnSecureToken: true
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                // console.log(response)
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            return callback(response.data)
        } catch (error) {
            // console.log("error :", error)
            return callback({
                error: true,
                response: error.response
            })
        }
    }

}