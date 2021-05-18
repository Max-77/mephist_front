import * as React from "react"
import s from "./News.module.scss"
import {role} from '../RootComponents/config'
import {CssTextField} from "../LoginComponent/@slice";
import {useState} from "react";
import {Button, InputAdornment} from "@material-ui/core";
import {headers} from "../Teachers/config";
import ModalComponent from "../ModalComponent/ModalComponent";

const AddNews: React.FC = ()=>{
    const [error, setError] = useState('')
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const checkIfEditor = () =>{
        const curr_role = localStorage.getItem('role');
        return curr_role === role.admin || curr_role === role.editor;
    }

    const handleChange =(e,type)=>{
        setError('');
        if (type==='title') {
            setTitle(e.target.value);
        }
        else setText(e.target.value);
    }

    const publicNews = ()=>{
        if (title.length===0 || text.length===0){
            setError('Поля не могут быть пустыми!');
            return;
        }
        fetch('/api/news',{
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                'title': title,
                'text': text
            })
        })
            .then((res)=>res.json)
            .then((result)=>{
                console.log(result);
            })
            .catch((err)=>{
                console.log(err);
            })
    }

    return(
            <div className={s.news_full}>
                {error===''?'':<ModalComponent text={error}/>}
                {checkIfEditor()?<>
                    <div className={s.textfields}><CssTextField id='title'
                                  variant='outlined'
                                  value={title}
                                  label="Title"
                                  InputProps={{
                                      startAdornment:(
                                      <InputAdornment position="start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>
                                      </InputAdornment>
                                      )
                                  }}
                                  onChange={(e)=>handleChange(e, 'title')}
                    /></div>
                    <div className={s.textfields}><CssTextField id='text'
                                  variant='outlined'
                                  value={text}
                                  label="Text"
                                  InputProps={{
                                    startAdornment:(
                                    <InputAdornment position="start">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/></svg>
                                        </InputAdornment>
                                        )
                                  }}
                                  onChange={(e)=>handleChange(e, 'text')}
                    /></div>
                    <div className={s.textfields}>
                        <Button variant="contained"
                                color='primary'
                                style={{maxHeight:"30px", maxWidth:'75px'}}
                                onClick={publicNews}
                                >
                            Готово
                        </Button>
                    </div>

                </>:''}
            </div>
    )
}

export default AddNews