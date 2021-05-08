import * as React from "react"
import s from './LoginComponent.module.scss'
import {Button} from "@material-ui/core";
import {CssTextField, useStyles, IProps, Index, errorArr} from "./@slice";
import ModalComponent from "./ModalComponent";
import authStore from "../../authStore/auth.store";
import action from "../../authStore/actionCreator";

const FormComponent:React.FC<IProps> = ({type})=>{
    const classes = useStyles();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isEmpty, setIsEmpty] = React.useState(false);
    const [error, setError] = React.useState('');

    const url = type==='register'?'http://localhost:8080/api/users/new':'http://localhost:8080/api/auth/login';

    const handleChange = (event, index)=>{
        setIsEmpty(false);
        setError('');
        if (!index) {
            setUsername(event.target.value);
            return;
        }
        setPassword(event.target.value);
    }

    const handleError = (codeOfError)=>{
        let msg ='';
        switch (codeOfError){
            case 500:
                msg = errorArr[1];
                break;
            case 401:
                msg = errorArr[2];
                break;
            case '400':
                msg = errorArr[3];
                break;
            default:
                msg = errorArr[4];
                break;
        }

        return <ModalComponent text={'Ошибка - '+msg}/>
    }

    const checkFields = () =>{
        if (username=='' || password==''){
            setIsEmpty(true);
            return;
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
                if (result.message==='User does not exist'){
                    setError('400');
                    return;
                }
                if (result.statusCode) {
                    setError(result.statusCode);
                    return;
                }
                if (result.token){
                    // save to store
                    authStore.dispatch(action(result.token));
                    history.pushState('','','/');
                    window.location.reload();
                    return;
                }
            })
            .catch((err)=>{
                console.log('successfully registered!');
            })
    }

    return(
        <div className={s.register}>
            <div className={s.greeting}>
                {type==='register'?<p>Регистрация</p>:<p>Вход</p>}
            </div>
            {isEmpty?<ModalComponent text={'Поля не могут быть пустыми'}/>:''}
            {error?handleError(error):''}
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
                    {authStore.getState().logged===''?
                        <Button variant="contained"
                                color='primary'
                                onClick={checkFields}>
                        {type==='register'?<p>Зарегистрироваться</p>:<p>Войти</p>}
                        </Button>:'Вы уже авторизованы'}
                </div>
            </form>
        </div>
    )
}

export default FormComponent