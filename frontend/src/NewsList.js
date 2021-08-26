import "./NewsList.css";
import NewsItem from "./NewsItem";
import { useContext, useEffect } from "react";
import ContextData from "./Context/Data/ContextData";
import fetchNews from "./ajax/fetchNews";

function NewsList() {
    const {stateData, dispatchData} = useContext(ContextData);

    useEffect(() => fetchNews('', 0, dispatchData), []);

    const handleData = (data) => {
        const news = data.news;
        const result = [];
        for (let postDate in news) {
            result.push(<h3 className="news-list__group" key={postDate}><time>{postDate}</time></h3>);
            news[postDate].forEach((item, i) => {
                result.push(
                    <NewsItem 
                        key={postDate + '-post-' + i} 
                        text={item.text} 
                        img={item.img_url} 
                        time={item.time} 
                    />
                );
            });
        }
       
        return result;
    }
    
    return(
        <div className="news-list">
            {handleData(stateData)}
            <button className="news-list__load">Загрузить больше</button>
        </div>
    );
}



export default NewsList;