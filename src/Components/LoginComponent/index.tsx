import * as React from "react"
import Register from "./Register";
import Login from "./Login";
import s from './LoginComponent.module.scss'

const LoginComponent:React.FC = ()=>{
    return(
        <div className={s.content}>
            <Register/>
            <Login/>
        </div>
    )
}

export default LoginComponent