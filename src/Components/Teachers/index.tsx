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
                {/*@ts-ignore*/}
                <TeacherIndividualComponent teacher={teacher}/>
            </div>
        </div>
    </div>
    </DarkThemeProvider>)
}
export default TeachersComponent