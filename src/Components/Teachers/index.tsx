import * as React from "react"
import s from "./Teacher.module.scss"
import {useEffect, useState} from "react";
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import LettersComponent from "./letters";

interface Teacher{
    name : string,
    surname : string,
    middlename : string,
    character : number,
    quality : number,
    credits_exams : number
}

const teach : Teacher ={name:'', surname:'', middlename:'',character:0,quality:0,credits_exams:0}

const TeachersComponent: React.FC = () =>{

    let [person, setPerson] = useState(teach);
    const handleName = ()=>{
        fetch('/api/teachers')
            .then((res)=>res.json())
            .then((result=>{
                const teacher : Teacher ={name:result[0].name,
                    surname: result[0].surname,
                    middlename: result[0].middlename,
                    character: result[0].character,
                    quality:result[0].quality,
                    credits_exams:result[0].credits_exams}
                setPerson(teacher);
            }))
        return ''
    }

    return(
        <DarkThemeProvider>
    <div>
    <div className={s.greeting}>Welcome on the teachers page!</div>
        <div className={s.content}>
            <LettersComponent/>
        <div >
            <div>
                <input type="text" placeholder="Start typo.." autoComplete="false" className={s.btn}/>
                <input type="button" className={s.btn} value={"Find!"}/>
            </div>
            <div className={s.teacher}>
                <div> {person.surname === ''?'Выбери преподавателя':person.surname} </div>
                <div> {person.name} </div>
                <div> {person.middlename}</div>
                <div> {person.quality===0?'':'Качество преподавания:'+person.quality}</div>
                <div> {person.character===0?'':'Характер: '+person.character}</div>
                <div> {person.credits_exams===0?'': 'Приём зачётов/экзаменов: '+ person.credits_exams}</div>
            </div>
        </div>
        <div>
            <div className={s.best}>
                /* Best Rated Teachers */
            </div>
            <div className={s.worst}>
                /* Worst Rated Teachers */
            </div>
        </div>
        </div>
    </div>
        </DarkThemeProvider>)
}
export default TeachersComponent