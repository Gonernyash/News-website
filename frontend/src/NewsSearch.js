import "./NewsSearch.css" ;

function NewsSearch() {
    return(
        <div className="news-search">
            <input type="text" placeholder="Введите запрос..." className="news-search__input"></input>
            <button className="news-search__button"></button>
        </div>
    );
}

export default NewsSearch