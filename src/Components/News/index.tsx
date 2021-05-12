import * as React from "react"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import s from "./News.module.scss"
import FallingWordsComponent from "./FallingWordsComponent";
import NewsTextComponent from "./NewsTextComponent";

const NewsComponent: React.FC = ()=>{

    return(
        <DarkThemeProvider>
            <div className={s.biggrid}>
                <FallingWordsComponent/>
                <div className={s.grid}>
                <div className={s.greeting}>Добро пожаловать на страницу новостей. Кликните по заголовку, чтобы прочитать новость целиком!</div>
               <NewsTextComponent/>
            </div>
        </div>
        </DarkThemeProvider>
    )
}

export default NewsComponent