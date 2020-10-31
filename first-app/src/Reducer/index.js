const initState= {
    value: 0
}
const reducer = (state=initState,action) =>{
    console.log('state', state);
    console.log('action', action);
    return Object.assign({},state,action);
}
export default reducer