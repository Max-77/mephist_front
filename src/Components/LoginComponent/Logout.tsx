import * as React from "react"
import s from './LoginComponent.module.scss'
import {Button} from "@material-ui/core";
import {useStyles} from "./@slice";
import authStore from "../../authStore/auth.store";
import {LOGIN_LOGOUT} from "../../authStore/actionCreator";

const LogoutComponent:React.FC = ()=>{
    const classes = useStyles();
    const url = 'http://localhost:8080/api/auth/logout';

    const logout = ()=>{
        fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*"
            },
        })
            .then((res)=>res.json())
            .then((result)=>{
            })
            .catch((err)=>{
                localStorage.removeItem('id');
                localStorage.removeItem('role');
                authStore.dispatch(LOGIN_LOGOUT('false'));
                history.pushState('','','/');
                window.location.reload();
                return;
            })
    }

    return(
            <form method="POST" className={classes.root}>
                <div className={s.logout}>
                        <Button variant="contained"
                                color='primary'
                                onClick={logout}>
                            Выйти
                        </Button>
                </div>
            </form>
    )
}

export default LogoutComponent