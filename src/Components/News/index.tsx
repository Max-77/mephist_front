import * as React from "react"
import DarkThemeProvider from "../Themes/DarkThemeProvider";
import s from "./News.module.scss"
import FallingWordsComponent from "./FallingWordsComponent";
import NewsTextComponent from "./NewsTextComponent";
import AddNews from "./AddNews";

const NewsComponent: React.FC = ()=>{

    return(
        <DarkThemeProvider>
            <div className={s.biggrid}>
                <FallingWordsComponent/>
                <div className={s.grid}>
                <div className={s.greeting}>Добро пожаловать на страницу новостей. Кликните по заголовку, чтобы прочитать новость целиком!</div>
               <NewsTextComponent/>
               <AddNews/>
            </div>
        </div>
        </DarkThemeProvider>
    )
}

export default NewsComponent