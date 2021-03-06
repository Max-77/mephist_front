import * as React from "react"
import {CssTextField} from "../LoginComponent/@slice";
import {useState} from "react";
import {Button} from "@material-ui/core";
import ModalComponent from "../ModalComponent/ModalComponent";
import s from './Teacher.module.scss'
import {headers, IProps} from './config'

const WriteReviewComponent : React.FC<IProps> = ({teacher_id})=>{
    const [review, setReview] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)
    const [isWroten, setIsWroten] = useState(false)
    const handleChange = (event)=>{
        setIsEmpty(false)
        setReview(event.target.value);
    }

    const sendReview = ()=>{
        if (review===''){
            setIsEmpty(true);
            return;
        }
        fetch('/api/review',{
            method:"POST",
            headers: headers,
            body: JSON.stringify({
                'pos_rate':0,
                'neg_rate':0,
                'teacher_id': teacher_id,
                'text':review
            })
        })
            .then((res)=>res.json())
            .then((result)=>{
            })
            .catch((err)=>{
                window.location.reload();
                setIsWroten(true);
                return;
            })
    }

    return(
        <div>
            {isEmpty?<ModalComponent text={'Поля не могут быть пустыми'}/>:''}
            <div className={s.rate_teacher}>
                <div className={s.rate_teacher_fields}>
                    <CssTextField id='review'
                                  variant='outlined'
                                  value={review}
                                  label="Your review"
                                  onChange={(e)=>handleChange(e)}
                                  style={{width:'100%'}}
                    /></div>
                <div className={s.rate_teacher_button}>
                    <Button variant="contained"
                            color='primary'
                            style={{maxHeight:"30px", maxWidth:'75px'}}
                            onClick={sendReview}>
                        Готово
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default WriteReviewComponent