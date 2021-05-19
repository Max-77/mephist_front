import * as React from "react"
import s from "./Root.module.scss"
import "animate.css/animate.min.css";
import {useEffect, useState} from "react";
import {role} from './config'
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import authStore from "../../authStore/auth.store";
import FormComponent from "../LoginComponent/FormComponent";
import LogoutComponent from "../LoginComponent/Logout";
import AdminComponent from "../AdminComponent";

const RootComp: React.FC = () =>{
    const [msg, setMsg] = useState('');

    useEffect( () =>{
        let id = localStorage.getItem('id')
        if(id===null)
            return;

        fetch('/api/users/'+id)
            .then((res)=>res.json())
            .then((result)=>{
                if (result.message) {
                    if (result.message === 'Unauthorized'){
                        setMsg('');
                        return;
                    }
                    setMsg('Error. Clean local storage');
                    return;
                }
                let str = result.username;
                if (result.role==='admin'){
                    str+=' администратор,';
                    localStorage.setItem('role',role.admin)
                }
                else if (result.role==='editor'){
                    str+=' редактор,';
                    localStorage.setItem('role',role.editor)
                }
                else {
                    str += ',';
                    localStorage.setItem('role',role.user)
                }
                setMsg(str);
            })
    })

    return(
        <DarkThemeProvider>
        <div className={s.root}>
        {msg} Добро пожаловать на главную страницу!
            {authStore.getState().logged.value==='false'||authStore.getState().logged===''?<FormComponent type='register'/>:
                <>
                    <LogoutComponent/>
                    <AdminComponent/>
                </>}
        </div>
        </DarkThemeProvider>)
}
export default RootComp