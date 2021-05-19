import * as React from "react"
import s from './Teacher.module.scss'
import {useEffect, useState} from "react";
import authStore from "../../authStore/auth.store";
import WriteReviewComponent from "./WriteReviewComponent";
import RateTeacher from "./RateTeacher";
import {dislike, headers, like, rate_type, state} from "./config";
import ModalComponent from "../ModalComponent/ModalComponent";
import CreateTeacher from "./CreateTeacher";

//@ts-ignore
const TeacherIndividualComponent : React.FC = ({teacher})=>{
    const [review, setReview] = useState([]);
    const [toggle, setToggle] = useState(0);
    const [teach, setTeach] = useState('')
    const [error, setError] = useState('')

    const showOrHideReviews = (changeToggleOrNot) =>{
        setError('')
        if (teacher.id === 0) {
            return;
        }
        fetch('/api/review/'+teacher.id.toString())
            .then((res)=>res.json())
            .then((result)=>{
                setTeach(teacher.surname);
                let review_arr = [];
                if (result.length===0){
                    review_arr.push({text:'Никто еще не оставлял отзывы', pos_rate:0,neg_rate:0});
                    setReview(review_arr);
                    return;
                }
                console.log(result);
                for (let i=0; i<result.length; i++){
                    review_arr.push(result[i])
                }
                setReview(review_arr);
            })
        if(changeToggleOrNot){
            if (toggle===0) setToggle(1);
            else setToggle(0);
        }
    }

    useEffect(()=>{
        if (teach !== teacher.surname){
            showOrHideReviews(state.notSwitch);
        }
    })

    const rateAndReview = ()=>{
        if (teacher.id === 0)
            return;
        return(<>
                {authStore.getState().logged.value!=='false'&&authStore.getState().logged!==''?
                            <RateTeacher teacher_id={teacher.id}/>
                    :''}
                {authStore.getState().logged.value!=='false'&&authStore.getState().logged!==''?
                <div className={s.showHide}>
                    Написать отзыв
                    <div>
                    <WriteReviewComponent teacher_id={teacher.id}/>
                    </div>
                </div>:''}

                <div className={s.showHide}
                     onClick={()=>showOrHideReviews(state.switch)}>
                    {toggle===0?'Показать':'Скрыть'} отзывы
                </div>
            </>
        )}

    const showTeacherParam = () =>{
        return(
            <div><div>{teacher.surname}</div>
            <div>{teacher.name}</div>
            <div>{teacher.middlename}</div>
            <div>{'Качество преподавания: '+teacher.quality}</div>
            <div>{'Характер: '+teacher.character}</div>
            <div>{'Приём зачётов/экзаменов: '+teacher.credits_exams}</div>
            </div>)
    }

    const rateReview = (rating, review_id) =>{
        fetch('/api/review-rate',{
            method:"POST",
            headers: headers,
            body: JSON.stringify({
                'review_id': review_id,
                'rate': rating
            })
        })
            .then((res)=>res.json())
            .then((result)=>{
                if (result.message === 'Review Rate already exist') {
                    setError('Вы уже оценили этот отзыв');
                    return;
                }
                setError(result.message);
            })
    }

    return(
        <div className={s.teacher}>
            <CreateTeacher/>
            <div>{teacher.surname===''?'Выберите преподавателя, чтобы посмотреть отзывы и характеристики\n': showTeacherParam()}</div>
            <div>
                {rateAndReview()}
                {review.map((value, index)=>(
                    <div key={index} className={toggle===0?s.review_hide:s.review_show}>
                        {value.text}
                        <div>
                            {error===''?'':<ModalComponent text={error}/>}
                            {value.text==='Никто еще не оставлял отзывы'?'':<>
                                <svg style={{cursor:"pointer"}}
                                     onClick={()=>rateReview(rate_type.like,value.id)}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="16" height="16"
                                     fill="currentColor"
                                     className="bi bi-hand-thumbs-up"
                                     viewBox="0 0 16 16">
                                    <path d={like}/>
                                </svg> {value.pos_rate}
                                <svg style={{cursor:"pointer"}}
                                     onClick={()=>rateReview(rate_type.dislike,value.id)}
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="16" height="16"
                                     fill="currentColor"
                                     className="bi bi-hand-thumbs-down"
                                     viewBox="0 0 16 16">
                                    <path d={dislike}/>
                                </svg> {value.neg_rate}
                            </>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TeacherIndividualComponent