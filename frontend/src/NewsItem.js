import "./NewsItem.css";

function NewsItem(props) {
    return(
        <div className="news-item">
            <p className="news-item__text">
                {props.text}
            </p>
            <img className="news-item__img" src={props.img} alt=""></img>
            <div className="news-item__time">{props.time}</div>
        </div>
    );
}

export default NewsItem