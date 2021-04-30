import * as React from "react"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import s from "./News.module.scss"
import {useState} from "react";

import styled from "styled-components";

import * as AOS from "aos"
import 'aos/dist/aos.css'

let news_tittles = ["Mephist started!", "Mephi against holidays!"]
let news_texts = ["Mephist started his work, or not? We decide to build another mephist, because 1 mephist is good, 2 - are better.",
                  "Mephi decided not to celebrate holidays from 1 to 10th of May. What are students think about it?"]
let nrnuWords =['','Russian','National','Nuclear','Researching','University','']
let mephiWords = ['','Moscow','Physical','Engeneering','Institute','']
const Container = styled.div`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  height: auto;
  text-align: center;
  width: 20%;
  position: absolute;
  margin-top: ${props=>props.index};
`;
const Container2 = styled.div`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;
  height: auto;
  text-align: center;
  width: 20%;
  position: absolute;
  margin-top: ${props=>props.index + 40};
  margin-left: 80%;
`;
const NewsComponent: React.FC = ()=>{
    let [active, setActive] = useState(-1);

    React.useEffect(()=>{
        AOS.init({
            delay: 250, // values from 0 to 3000, with step 50ms
            duration: 750, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
    })

    const changeActive = (e, index) =>{
        e.preventDefault();
        if (active == index){
            setActive(-1);
            return;
        }
        setActive(index);
    }
    return(
        <DarkThemeProvider>
            <div className={s.biggrid}>
                {nrnuWords.map((value, index)=>(
                       <Container key={index} index={index*80}>
                           <div data-aos="fade-down" data-aos-delay="50">
                           {value}
                       </div>
                       </Container>
                ))}
                <div className={s.grid}>
                <div className={s.greeting}>Welcome on the news page! Click on title to read a full news!</div>
                <div>
                    {news_tittles.map((item, index)=>(
                        <div key={index} className={s.news_full}>
                            <div className={active!=index?s.news_title_unchosen:s.news_title_chosen} onClick={(e)=>changeActive(e,index)}>
                                {item}
                            </div>
                            <div className={active!=index? s.news_text_hidden:s.news_text_shown}>
                                {news_texts[index]}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
                {mephiWords.map((value, index)=>(
                    <Container2 key={index} index={index*80}>
                        <div data-aos="fade-down" data-aos-delay="50">
                            {value}
                        </div>
                    </Container2>
                ))}
        </div>
        </DarkThemeProvider>
    )
}

export default NewsComponent