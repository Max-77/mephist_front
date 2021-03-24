import * as React from "react"
import s from "./Teacher.module.scss"

const TeachersComponent: React.FC = () =>{
    return(<div>
        Welcome on the teachers page!
        <div className={s.content}>
        <div>
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
                <li>F</li>
                <li>G</li>
                <li>H</li>
            </ul>
        </div>
            <div>
        <input type="text" placeholder="Start typo.." autoComplete="false" className={s.btn}/>
        <input type="button" className={s.btn} value={"Find!"}/>
            </div>
        <div className={s.best}>
            /* Best Rated Teachers */
        </div>
        </div>
    </div>)
}
export default TeachersComponent