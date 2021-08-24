import "./NewsItem.css";

function NewsItem() {
    return(
        <div className="news-item">
            <p className="news-item__text">
                Text
            </p>
            <img className="news-item__img" src="https://via.placeholder.com/680x383"></img>
            <div news-item__date>date</div>
        </div>
    );
}

export default NewsItem