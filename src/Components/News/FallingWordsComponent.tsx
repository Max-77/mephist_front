import * as React from "react"
import s from "./News.module.scss"

import styled from "styled-components";

import * as AOS from "aos"
import 'aos/dist/aos.css'

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
const FallingWordsComponent: React.FC = ()=>{

    React.useEffect(()=>{
        AOS.init({
            delay: 250, // values from 0 to 3000, with step 50ms
            duration: 750, // values from 0 to 3000, with step 50ms
            easing: 'ease-in-out', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: true, // whether elements should animate out while scrolling past them
        });
    })

    return(
                 <div className={s.biggrid}>
                {nrnuWords.map((value, index)=>(
                    <Container key={index} index={index*80}>
                        <div data-aos="fade-down" data-aos-delay="50">
                            {value}
                        </div>
                    </Container>
                ))}

                {mephiWords.map((value, index)=>(
                    <Container2 key={index} index={index*80}>
                        <div data-aos="fade-down" data-aos-delay="50">
                            {value}
                        </div>
                    </Container2>
                ))}
            </div>
    )
}

export default FallingWordsComponent