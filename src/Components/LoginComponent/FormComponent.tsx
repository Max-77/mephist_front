import * as React from "react"
import s from './LoginComponent.module.scss'
import {Button} from "@material-ui/core";
import {CssTextField, useStyles, IProps} from "./@slice";

enum Index{
    username,
    password
}

const FormComponent:React.FC<IProps> = ({type})=>{
    const classes = useStyles();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const url = type==='register'?'http://localhost:8080/api/users/new':'http://localhost:8080/api/auth/login';

    const handleChange = (event, index)=>{
        if (!index) {
            setUsername(event.target.value);
            return;
        }
        setPassword(event.target.value);
    }
    const checkFields = () =>{
        if (username=='' || password==''){
            alert('Fields can not be empty! ');
            return true;
        }
        fetch(url,{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*"
            },
            body: JSON.stringify({
                "username": {username}.username,
                "password": {password}.password
            })
        })
            .then((res)=>res.json())
            .then((result)=>{
                console.log(result.statusCode)}
            )
    }

    return(
        <div className={s.register}>
            <div className={s.greeting}>
                {type==='register'?<p>Регистрация</p>:<p>Вход</p>}
            </div>
            <form method="POST" className={classes.root}>
                <div className={s.fields}>
                <CssTextField id='username'
                    variant='outlined'
                    value={username}
                    label="Username"
                    onChange={(e)=>handleChange(e, Index.username)}
                    className={classes.margin}/>
                <CssTextField id="standard-password-input"
                    label="Password"
                    type="password"
                    variant='outlined'
                    onChange={(e)=>handleChange(e, Index.password)}
                    value={password}
                    className ={classes.margin}
                    />
                <Button variant="contained"
                        color='primary'
                        onClick={checkFields}>
                    {type==='register'?<p>Зарегистрироваться</p>:<p>Войти</p>}</Button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent