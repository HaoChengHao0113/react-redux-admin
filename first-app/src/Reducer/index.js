const initState= {
    value: 0
}
const reducer = (state=initState,action) =>{
    return Object.assign({},state,action);
}
export default reducer