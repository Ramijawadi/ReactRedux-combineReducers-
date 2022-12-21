const initialState = {
    log: false,
}



const LoggingReducer = (state = initialState, action) => {

    switch (action.type) {

        case "LOGIN": return {

            ...state,
            log: true,

        }


        case "LOGOUT": return {

            ...state,
            log: false,
        }

        default: return state;
}



}

export default LoggingReducer ;