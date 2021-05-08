const authReducer = (state,action)=>{
    switch (action.type) {
        case 'LOGGED': return {value:action.value_login};
        default: return state;
    }
}
export default authReducer