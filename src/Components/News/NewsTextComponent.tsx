import * as React from "react"
import {useState} from "react";
import s from "./News.module.scss"

const NewsTextComponent: React.FC = ()=>{
    let [titles, setTitles] = useState([])
    let [news, setNews] = useState([])
    let [dates, setDates] = useState([])
    let [active, setActive] = useState(-1);

    const changeActive = (e, index) =>{
        e.preventDefault();
        if (active == index){
            setActive(-1);
            return;
        }
        setActive(index);
    }

    React.useEffect(()=>{
        getTitlesAndNews()
    }, [])

    const getTitlesAndNews = () =>{
        fetch('/api/news')
            .then((res)=>res.json())
            .then((result) => {
                const countOfNews = result.length;
                let titles = [];
                let news = [];
                let dates = []
                for (let i=0; i<countOfNews; i++){
                    titles.push(result[i].title)
                    news.push(result[i].text)
                    let str = result[i].createdDate.replace(/T.*$/,'')
                    dates.push(str)
                }
                setTitles(titles)
                setNews(news)
                setDates(dates)
            })
        return ''
    }

    return(
       <div>
           <div>
               {titles.map((item, index)=>(
                   <div key={index} className={s.news_full}>
                       <div className={active!=index?s.news_title_unchosen:s.news_title_chosen} onClick={(e)=>changeActive(e,index)}>
                           {item}
                       </div>
                       <div className={active!=index? s.news_text_hidden:s.news_text_shown}>
                           {news[index]}
                           <p>Created at: {dates[index]}</p>
                       </div>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default NewsTextComponent