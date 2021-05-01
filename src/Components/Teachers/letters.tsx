import * as React from "react"
import s from "./Teacher.module.scss"
import {useState} from "react";

let letters = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'];

const LettersComponent: React.FC =()=>{
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
    )
}
export default LettersComponent