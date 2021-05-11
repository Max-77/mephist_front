import * as React from "react"
import FormComponent from "./FormComponent";
import s from './LoginComponent.module.scss'

const LoginComponent:React.FC = ()=>{
    return(
        <div className={s.content}>
            <FormComponent type='login'/>
        </div>
    )
}

export default LoginComponent