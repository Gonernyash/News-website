import "./NewsList.css";
import NewsItem from "./NewsItem";
import { useContext } from "react";
import ContextData from "./Context/Data/ContextData";

function NewsList() {
    const {stateData} = useContext(ContextData);

    console.log(stateData);
    return(
        <div>
            Новости
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <button className="news-list__load">Загрузить больше</button>
        </div>
    );
}

export default NewsList;