

const userIn = {}


const userReducer = (state = userIn, action) => {
    switch (action.type) {
        case "SETNAME":
            state = {
                ...state,
                ...action.payload
            }

            break
        case "SETAGE":
            state = {
                ...state,
                age: action.payload
            }
            break
        default:
    }
    return state
}
export default userReducer