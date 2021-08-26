import NET from "../network";

async function fetchNews(req, page, dispatch) {
    try {
        const res = await fetch(`${NET.APP_URL}/news?req=${req}&page=${page}`);
        if (res.status === 200) {
            const result = await res.json();
            dispatch({
                type: "REFETCH_NEWS",
                payload: result
            });
        }
    } catch(err) {
        console.error(err);
    }
    
}

export default fetchNews;