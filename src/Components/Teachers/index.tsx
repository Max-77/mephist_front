import * as React from "react"
import s from "./Teacher.module.scss"
import {useState} from "react";
import DarkThemeProvider from "../Themes/DarkThemeProvider";

let letters = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'];

const TeachersComponent: React.FC = () =>{

    let [active, setActive] = useState(-1);

    const changeActive = (e, index) =>{
        e.preventDefault();
        if (active === index){
            setActive(-1);
            return;
        }
        setActive(index);
    }

    return(
        <DarkThemeProvider>
    <div>
    <div className={s.greeting}>Welcome on the teachers page!</div>
        <div className={s.content}>
            <div className={s.letters}>
                {letters.map((item, index)=>(
                    <div key={index}>
                        <button className={active === index ? s.chosen_letter : s.letter} id={index.toString()} onClick={(e)=>changeActive(e,index)}>
                            {item}
                        </button>
                        <div className={active === index ? s.not_hide : s.hide} id={index.toString()}>
                            <a href = "#"> Фамилия Имя Отчество 1 </a>
                            <a href = "#"> Фамилия Имя Отчество 2</a>
                        </div>
                    </div>
                ))}
            </div>
        <div>
            <input type="text" placeholder="Start typo.." autoComplete="false" className={s.btn}/>
            <input type="button" className={s.btn} value={"Find!"}/>
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