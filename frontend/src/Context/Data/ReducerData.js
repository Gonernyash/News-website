const ReducerData = (state, action) => {
    switch (action.type) {
        case "FETCH_NEWS":
            return {
                ...state,
                news: concatNews(state.news, action.payload),
            }
        case "REFETCH_NEWS":
            return {
                ...state,
                news: action.payload
            }
        case "SEARCH_REQUEST":
            return {
                ...state,
                searchRequest: action.payload
            }
        default: 
        return state
    }
}

function concatNews(oldNews, newNews) {
    let result = oldNews;
    for (let date in newNews) {
        if (oldNews.hasOwnProperty(date)) {
            result[date] = [].concat(oldNews[date], newNews[date]);
        } else {
            result[date] = newNews[date];
        }
    }
    return result;
}

export default ReducerData