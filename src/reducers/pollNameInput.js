const initialState = {
    inputData: ''
}

const pollReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_INPUT_DATA':
            return {...state, inputData: action.payload }

        default:
            return state
    }
}