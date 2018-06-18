const intialState = {
    result: 15000,
    value: [],

}
const employeeRuducer = (state = intialState, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result += action.payload,
                value: [...state.value, action.payload]
            }
            break
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result -= action.payload,
                value: [...state.value, action.payload]
            }
            break
        default:
    }
    return state
}
export default employeeRuducer