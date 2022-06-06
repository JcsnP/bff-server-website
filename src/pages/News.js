import NewsCard from "../components/NewsCard";
import AllNews from "../assets/news";

export default function News() {
    return(
        <>
            <div className="container pb-4 pt-4">
                <h2 className="title is-2 mt-4">News</h2>
                <div className="columns">
                    <NewsCard allNews={AllNews} />
                </div>
            </div>
        </>
    );
}