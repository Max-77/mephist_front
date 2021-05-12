import * as React from "react"
import s from "./Teacher.module.scss"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import LettersComponent from "./LettersComponent";
import {Teacher} from './LettersComponent'
import TeacherIndividualComponent from './TeacherIndividualComponent'

const TeachersComponent: React.FC = () =>{
    let teach : Teacher ={id: 0, name:'', surname:'', middlename:'',character:0,quality:0,credits_exams:0};
    const [teacher, setTeacher] = React.useState(teach);

    return(
    <DarkThemeProvider>
    <div>
    <div className={s.greeting}>Добро пожаловать на страницу преподавателей!</div>
        <div className={s.main_content}>
            {/*@ts-ignore*/}
            <LettersComponent updateTeacher={setTeacher}/>
        <div className={s.content}>
            {/*<div>*/}
            {/*    <input type="text" placeholder="Введите фамилию" autoComplete="false" className={s.btn}/>*/}
            {/*    <input type="button" className={s.btn} value={"Найти!"}/>*/}
            {/*</div>*/}
            {/*@ts-ignore*/}
            <TeacherIndividualComponent teacher={teacher}/>
        </div>
        {/*<div>*/}
        {/*    <div className={s.best}>*/}
        {/*        Лучшие преподаватели */}
        {/*    </div>*/}
        {/*    <div className={s.worst}>*/}
        {/*        Худшие преподаватели */}
        {/*    </div>*/}
        {/*</div>*/}
        </div>
    </div>
    </DarkThemeProvider>)
}
export default TeachersComponent