import * as React from "react"
import s from './Teacher.module.scss'
import {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import {Index, IProps, ratings} from "./config";


const RateTeacher : React.FC<IProps> = ({teacher_id})=>{
    const [isRate, setIsRate] = useState(false)
    const [character, setCharacter] = useState(0);
    const [quality, setQuality] = useState(0);
    const [credits_exams, setCredits_exams] = useState(0);

    const rate = ()=>{
        setIsRate(true);
        fetch('http://localhost:8080/api/teacher-rate',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*",
            },
            body: JSON.stringify({
                'character':character,
                'quality':quality,
                'credits_exams': credits_exams,
                'teacher_id': teacher_id,
            })
        })
    }

    const handleChange = (e, index)=>{
        switch (index) {
            case Index.character:
                setCharacter(e.target.value)
                break
            case Index.quality:
                setQuality(e.target.value)
                break
            case Index.credits_exams:
                setCredits_exams(e.target.value)
                break
        }
    }

    return(
        <div className={s.showHide}>
            <div className={s.rate_teacher}>
            Оценить учителя
                <div className={s.rate_teacher_fields}>
                    <TextField id='character'
                        select
                        label='Характер'
                        value={character}
                        style={{width:'100%'}}
                        SelectProps={{
                            native: true,
                        }}
                        onChange={(e)=>handleChange(e,Index.character)}>
                            {ratings.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                    </TextField>
                </div>
                <div className={s.rate_teacher_fields}>
                    <TextField id='quality'
                        select
                        label='Качество преподавания'
                        value={quality}
                            SelectProps={{
                                native: true,
                            }}
                        style={{width:'100%'}}
                        onChange={(e)=>handleChange(e,Index.quality)}>
                            {ratings.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                    </TextField>
                </div>
                <div className={s.rate_teacher_fields}>
                    <TextField id='credits_exams'
                        select label='Приём зачётов/экзаменов'
                        value={credits_exams}
                        SelectProps={{
                            native: true,
                        }}
                        style={{width:'100%'}}
                        onChange={(e)=>handleChange(e,Index.credits_exams)}>
                            {ratings.map((option)=>(
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                            ))}
                    </TextField>
                </div>
                <div className={s.rate_teacher_button}>
                <Button variant="contained"
                        color='primary'
                        style={{maxHeight:"30px", maxWidth:'75px'}}
                        onClick={rate}>
                    <p>Оценить</p>
                </Button>
                </div>
            </div>
        </div>
    )
}

export default RateTeacher