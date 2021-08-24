import "./NewsList.css";
import NewsItem from "./NewsItem";

function NewsList() {
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