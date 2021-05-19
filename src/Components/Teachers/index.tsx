import * as React from "react"
import s from "./Teacher.module.scss"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import LettersComponent from "./LettersComponent";
import TeacherIndividualComponent from './TeacherIndividualComponent'
import {teach} from "./config";

const TeachersComponent: React.FC = () =>{
    const [teacher, setTeacher] = React.useState(teach);

    return(
        <DarkThemeProvider>
            <div>
                <div className={s.greeting}>Добро пожаловать на страницу преподавателей!</div>
                <div className={s.main_content}>
                    {/*@ts-ignore*/}
                    <LettersComponent updateTeacher={setTeacher}/>
                        {/*@ts-ignore*/}
                    <TeacherIndividualComponent teacher={teacher}/>
                </div>
            </div>
        </DarkThemeProvider>)
}
export default TeachersComponent