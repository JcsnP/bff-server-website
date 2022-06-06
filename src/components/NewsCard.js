export default function NewsCard(props) {
    return(
        <>
            {
            props.allNews.map(news => {
                return(
                    <div className="column is-full-mobile">
                        <div className="card" style={{height: "60vh"}}>
                            <div className="card-image">
                                <figure className="image is-16by9">
                                    <img src={news.image} alt="" />
                                </figure>
                                <div className="card-content">
                                    <div className="content" style={{height: "25vh"}}>
                                        <h4 className="title is-4">{news.title}</h4>
                                        <p className="subtitle is-6 mt-1">{news.description}</p>
                                    </div>
                                    <span className="has-text-weight-bold" style={{color: "#E20000"}}>{news.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        </>
        
    );
}