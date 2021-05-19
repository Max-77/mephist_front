import * as React from "react"
import s from './Teacher.module.scss'
import {role} from "../RootComponents/config";
import {CssTextField} from "../LoginComponent/@slice";
import {Button} from "@material-ui/core";
import {useState} from "react";
import ModalComponent from "../ModalComponent/ModalComponent";
import {headers} from "./config";

const CreateTeacher : React.FC = ()=>{

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [middlename, setMiddlename] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e, type) =>{
        setError('');
        switch (type) {
            case 'name': setName(e.target.value);
            break;
            case 'surname': setSurname(e.target.value);
            break;
            case 'middlename': setMiddlename(e.target.value);
            break;
        }
    }

    const checkIfEditor = () =>{
        const curr_role = localStorage.getItem('role');
        return curr_role === role.editor;
    }

    const createTeacher = () =>{
        if (name==='' || surname==='' || middlename===''){
            setError('Поля не могут быть пустыми');
            return;
        }
        fetch('/api/teachers',{
            method: "POST",
            headers:headers,
            body: JSON.stringify({
                'name': name,
                'surname': surname,
                'middlename': middlename
            })
        })
            .then((res)=>res.json())
            .then((result)=>{
                console.log(result);
                if (result.message === 'Unauthorized')
                    setError('Вы не редактор');
            })
            .catch(()=>{
                window.location.reload();
            })

    }

    return(
        <div>
            {checkIfEditor()?<div>
                {error===''?'':<ModalComponent text={error}/>}
                Вы можете создать преподавателя
                <div className={s.textfields}><CssTextField id='name'
                              variant='outlined'
                              value={name}
                              label="Имя"
                                   onChange={(e)=>handleChange(e,'name')}/></div>
                <div className={s.textfields}><CssTextField id='surname'
                              variant='outlined'
                              value={surname}
                              label="Фамилия"
                                   onChange={(e)=>handleChange(e,'surname')}/></div>
                <div className={s.textfields}><CssTextField id='middlename'
                              variant='outlined'
                              value={middlename}
                              label="Отчество"
                                   onChange={(e)=>handleChange(e,'middlename')}/></div>
                <div className={s.textfields}><Button variant="contained"
                            color='primary'
                            style={{maxHeight:"30px", maxWidth:'75px'}}
                            onClick={createTeacher}
                            > Готово
                    </Button>
                </div>
            </div>:""}
        </div>
    )
}

export default CreateTeacher