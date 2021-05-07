import * as React from "react"
import s from "./Root.module.scss"
import "animate.css/animate.min.css";

const RootComp: React.FC = () =>{
    return(<div className={s.root}>
        Добро пожаловать на главную страницу!
    </div>)
}
export default RootComp