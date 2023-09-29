// const initialState = 0

const authReducer = (state = {}, action) => {

    const { type, payload } = action

    switch (type) {
        case 'LOGIN':
            {
                return payload
            }
        default:
            return state
    }
}

export default authReducer