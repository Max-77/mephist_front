import * as React from "react"
import s from './LoginComponent.module.scss'

enum Index{
    username,
    password
}

const Register:React.FC = ()=>{
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleChange = (event, index)=>{
        if (!index) {
            setUsername(event.target.value);
            return;
        }
        setPassword(event.target.value);
    }

    const checkFields = () =>{
        if (username=='' || password==''){
            alert('Fields can not be empty!');
            return true;
        }
        return false;
    }

    return(
        <div className={s.register}>
            <div className={s.greeting}>Регистрация</div>
            <form method="POST" action='/api/users/new'>
                <div className={s.around_inp}>Логин:
                    <input type='text'
                       name="username"
                       value={username}
                       placeholder="Aboba's name"
                       onChange={(e)=>handleChange(e, Index.username)}
                    /></div>
                <div className={s.around_inp}> Пароль:
                    <input type='password'
                       value={password}
                       name="password"
                       placeholder="Aboba's password"
                       onChange={(e)=>handleChange(e, Index.password)}
                    /></div>
                <input type='submit'
                       value='Reg me!'
                       className={s.inp}
                       onClick={checkFields}
                       />
            </form>
        </div>
    )
}

export default Register