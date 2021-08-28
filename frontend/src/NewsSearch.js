import { useContext, useRef } from "react";
import fetchNews from "./ajax/fetchNews";
import ContextData from "./Context/Data/ContextData";
import "./NewsSearch.css" ;

function NewsSearch() {
    const {dispatchData} = useContext(ContextData);

    const input = useRef(null);

    const clickHandler = () => {
        const req = input.current.value;

        dispatchData({
            type: "SEARCH_REQUEST",
            payload: req
        });

        fetchNews(req, 0, dispatchData, "REFETCH_NEWS");
    }

    return(
        <div className="news-search">
            <input type="text" placeholder="Введите запрос..." className="news-search__input" ref={input}></input>
            <button className="news-search__button" onClick={clickHandler}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
            </button>
        </div>
    );
}

export default NewsSearch