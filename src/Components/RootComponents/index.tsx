import * as React from "react"
import s from "./Root.module.scss"
import "animate.css/animate.min.css";

const RootComp: React.FC = () =>{
    return(<div className={s.root}>
        Welcome on the main page!
    </div>)
}
export default RootComp