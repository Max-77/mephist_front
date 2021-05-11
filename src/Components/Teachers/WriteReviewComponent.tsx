import * as React from "react"
import {CssTextField, useStyles} from "../LoginComponent/@slice";
import {useState} from "react";
import {Button} from "@material-ui/core";
import ModalComponent from "../LoginComponent/ModalComponent";

interface IProps{
    teacher_id:number
}

const WriteReviewComponent : React.FC<IProps> = ({teacher_id})=>{
    const classes = useStyles();
    const [review, setReview] = useState('')
    const [isEmpty, setIsEmpty] = useState(false)

    const handleChange = (event)=>{
        setIsEmpty(false)
        setReview(event.target.value);
    }

    const sendReview = ()=>{
        if (review===''){
            setIsEmpty(true);
            return;
        }
        fetch('http://localhost:8080/api/review',{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "Connection": "keep-alive",
                "Accept": "*/*"
            },
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

                return;
            })
    }

    return(
        <div>
            {isEmpty?<ModalComponent text={'Поля не могут быть пустыми'}/>:''}
            <form method='POST' className={classes.root}>
                <CssTextField id='review'
                              variant='outlined'
                              value={review}
                              label="Your review"
                              onChange={(e)=>handleChange(e)}
                              className={classes.margin}/>
                    <Button variant="contained"
                            color='primary'
                            onClick={sendReview}>
                        <p>Оставить отзыв</p>
                    </Button>
                </form>
        </div>
    )
}

export default WriteReviewComponent