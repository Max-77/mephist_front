import * as React from "react"
import s from "./Teacher.module.scss"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import LettersComponent from "./LettersComponent";
import {Teacher} from './LettersComponent'
import {useEffect} from "react";
const TeachersComponent: React.FC = () =>{
    let teach : Teacher ={name:'', surname:'', middlename:'',character:0,quality:0,credits_exams:0};
    const [teacher, setTeacher] = React.useState(teach);

    return(
    <DarkThemeProvider>
    <div>
    <div className={s.greeting}>Welcome on the teachers page!</div>
        <div className={s.main_content}>
            {/*@ts-ignore*/}
            <LettersComponent updateTeacher={setTeacher}/>
        <div className={s.content}>
            <div>
                <input type="text" placeholder="Start typo.." autoComplete="false" className={s.btn}/>
                <input type="button" className={s.btn} value={"Find!"}/>
            </div>
            <div className={s.teacher}>
                {/*@ts-ignore*/}
                <div>{teacher.surname===''?'Here will be teacher properties\n':teacher.surname}</div>
                {/*@ts-ignore*/}
                <div>{teacher.name}</div>
                {/*@ts-ignore*/}
                <div>{teacher.middlename}</div>
                {/*@ts-ignore*/}
                <div>{teacher.quality===0?'':'Качество преподавания: '+teacher.quality}</div>
                {/*@ts-ignore*/}
                <div>{teacher.character===0?'':'Характер: '+teacher.character}</div>
                {/*@ts-ignore*/}
                <div>{teacher.credits_exams===0?'':'Приём зачётов/экзаменов: '+teacher.credits_exams}</div>

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