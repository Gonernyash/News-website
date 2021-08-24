import "./NewsList.css";
import NewsItem from "./NewsItem";
import { useContext, useEffect } from "react";
import ContextData from "./Context/Data/ContextData";
import NET from "./network";

function NewsList() {
    const {stateData, dispatchData} = useContext(ContextData);

    useEffect(()=> {
        try {
            const fetchNews = async () => {
                const res = await fetch(`${NET.APP_URL}/news`);
                if (res.status === 200) {
                    const result = await res.json();
                    dispatchData({
                        type: "FETCH_NEWS",
                        payload: result
                    });
                }
            }
            fetchNews();
        } catch(e) {
            console.log(e);
        }
    }, [])

    const handleData = (data) => {
        const result = [];
        data.news.forEach(newsGroup => {
            const groupName = <h5>{newsGroup.date}</h5>;
            result.push(groupName);
            newsGroup.news.forEach(item => {
                result.push(<NewsItem text={item.text} img={item.img_url} time={item.time} />);
            })
        });
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