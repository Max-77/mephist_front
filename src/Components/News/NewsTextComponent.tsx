import * as React from "react"
import {useState} from "react";
import s from "./News.module.scss"
import {role} from "../RootComponents/config";
import {headers} from "../Teachers/config";

const NewsTextComponent: React.FC = ()=>{
    let [titles, setTitles] = useState([])
    let [news, setNews] = useState([])
    let [dates, setDates] = useState([])
    let [active, setActive] = useState(-1);
    let [ids, setIds] = useState([])

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
                let dates = [];
                let ids = [];
                for (let i=0; i<countOfNews; i++){
                    ids.push(result[i].id)
                    titles.push(result[i].title)
                    news.push(result[i].text)
                    let str = result[i].createdDate.replace(/T.*$/,'')
                    dates.push(str)
                }
                setTitles(titles)
                setNews(news)
                setDates(dates)
                setIds(ids)
            })
        return ''
    }

    const checkIfEditor = () =>{
        const curr_role = localStorage.getItem('role');
        return curr_role === role.admin || curr_role === role.editor;
    }

    const removeNews = (id) =>{
        fetch('/api/news/rm/'+id.toString(),{
            method: "DELETE",
            headers: headers,
            body: JSON.stringify({
            })
        })
            .then((res)=>res.json)
            .then((result)=>{
                console.log(result);
            })
            .catch((err)=>{
                console.log(err);
            })
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
                           {checkIfEditor()?<>
                               <svg xmlns="http://www.w3.org/2000/svg"
                                    width="20" height="20"
                                    style={{cursor:"pointer"}}
                                    fill="currentColor"
                                    onClick={()=>removeNews(ids[index])}
                                    className="bi bi-trash"
                                    viewBox="0 0 16 16">
                                   <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                   <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                               </svg>
                           </>:''}
                       </div>
                   </div>
               ))}
           </div>
       </div>
    )
}

export default NewsTextComponent