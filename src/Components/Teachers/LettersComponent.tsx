import * as React from "react"
import s from "./Teacher.module.scss"
import {useState} from "react";

export interface Teacher{
    id: number,
    name : string,
    surname : string,
    middlename : string,
    character : number,
    quality : number,
    credits_exams : number
}
let lettersComponent = ['А','Б','В','Г','Д','Е','Ж','З','И','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Э','Ю','Я'];

const LettersComponent: React.FC =(props)=>{
    let [active, setActive] = useState(-1);
    let [teachers, setTeachers] = useState([]);

    // @ts-ignore
    const {updateTeacher} = props;

    const changeActive = (e, index) =>{
        e.preventDefault();
        fetch('/api/teachers/'+lettersComponent[index])
            .then((res)=>res.json())
            .then((result)=>{
                let teach : Teacher ={id: 0,name:'', surname:'', middlename:'',character:0,quality:0,credits_exams:0};
                let teach_arr = []
                for (let i=0; i<result.length; i++){
                    let num_of_votes;
                    result[i].rate_count ===0? num_of_votes=1 :num_of_votes=result[i].rate_count
                    teach = {
                        id: result[i].id,
                        name:result[i].name,
                        surname: result[i].surname,
                        middlename: result[i].middlename,
                        character: Math.floor(100*(result[i].character/num_of_votes))/100,
                        quality: Math.floor(100*(result[i].quality/num_of_votes))/100,
                        credits_exams: Math.floor(100*(result[i].credits_exams/num_of_votes))/100};
                    teach_arr.push(teach);
                }
                setTeachers(teach_arr);
            })

        if (active === index){
            setActive(-1);
            return;
        }
        setActive(index);
    }

    return(
        <div className={s.letters}>
            {lettersComponent.map((item, index)=>(
                <div key={index} id={index.toString()}>
                    <button className={active===index?s.letter_chosen:s.letter_not_chosen}
                            id={index.toString()}
                            onClick={(e)=>changeActive(e,index)}>
                        {item}
                    </button>
                    <div className={active===index?s.persons:s.persons_hide}>
                    {teachers.map((person, person_index)=>(
                        <div key={person_index}
                             className={s.fio}
                             id={person_index.toString()}
                             onClick={()=>updateTeacher(person)}>
                            {person.surname} &#32;
                            {person.name} &#32;
                            {person.middlename}
                        </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default LettersComponent