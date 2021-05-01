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
                <div className={s.greeting}>Welcome on the news page! Click on title to read a full news!</div>
               <NewsTextComponent/>
            </div>
        </div>
        </DarkThemeProvider>
    )
}

export default NewsComponent