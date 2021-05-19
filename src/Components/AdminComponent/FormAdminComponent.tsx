import * as React from "react"
import {CssTextField} from "../LoginComponent/@slice";
import {useState} from "react";
import s from './AdminComponent.module.scss'
import {Button} from "@material-ui/core";
import {headers} from "../Teachers/config";
import ModalComponent from "../ModalComponent/ModalComponent";

const FormAdminComponent:React.FC = ()=>{

    const [id, setId] = useState('')
    const [role, setRole] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e, type) =>{
        setError('');
        switch (type) {
            case "id":
                setId(e.target.value);
                break;
            case 'role':
                setRole(e.target.value);
                break;
        }
    }

    const changeUser = ()=>{
        if (id===''||role===''){
            setError('Поля не могут быть пустыми!')
            return;
        }

        fetch('/api/users/chg',{
            method: "PATCH",
            headers: headers,
            body: JSON.stringify({
                "id": Number(id),
                "role": role
            })
        })
            .then((res)=>res.json())
            .then((result)=>{
                if (result.statusCode)
                    setError(result.message);
            })
            .catch(()=>window.location.reload())
    }

    return(
        <div>
            {error===''?'':<ModalComponent text={error}/>}
            <div className={s.forms}><CssTextField label='ID'
                          id='id'
                          onChange={(e)=>handleChange(e,'id')}
                          value={id}
                               variant='outlined'/></div>
            <div className={s.forms}><CssTextField label='Role'
                          id = 'role'
                          onChange={(e)=>handleChange(e,'role')}
                          value={role}
                               variant='outlined'/></div>
            <div className={s.formBtn}>
                <Button variant="contained"
                        color='primary'
                        style={{maxHeight:"30px", maxWidth:'75px'}}
                        onClick={changeUser}
                        >Готово
                </Button>
            </div>
        </div>
    )
}

export default FormAdminComponent