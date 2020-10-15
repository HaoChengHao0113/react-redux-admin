const initState= {
    value: 0
}
const reducer = (state=initState,action) =>{
    console.log('action', action)
    switch (action.type){
        case 'add':
            return Object.assign({},state,action);
        case 'minus':
            return Object.assign({},state,action);
        default:
            return state
    }
}
export default reducer