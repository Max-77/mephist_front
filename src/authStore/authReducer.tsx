const authReducer = (state,action)=>{
    switch (action.type) {
        case 'LOGIN_LOGOUT': return {value:action.value_login};
        default: return state;
    }
}
export default authReducer