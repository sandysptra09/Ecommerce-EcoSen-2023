import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "./LatestNews.css";

export default function LatestNews() {

    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchDataNews = async () => {
            try {
                const response = await axios.get('http://192.168.1.101:9000/news')
                setNews(response.data);
            }
            catch (error) {
                console.log('Failed to fecth Data News', error);
            }
        }
        fetchDataNews();
    }, [])

    if (!news) {
        return (
            <div>
                <h5>Loading...</h5>
            </div>
        );
    }

    console.log(news.data);

    return (
        <div className="container-latest-news">
            <div className="latest-news">
                <h3 className="title-latest-news">Latest News</h3>
                <div className="content-news">
                    {news.data.map((itemNews) => (
                        <div className="news-1" key={itemNews.id}>
                            <img className="img-news" src={itemNews.image_news} alt="" />
                            <div className="content-blog">
                                <h4 className="title-news">
                                    {itemNews.title_news}
                                </h4>
                                <p className="desc-news">
                                    {itemNews.news}
                                </p>
                                <div className="poster">
                                    <img className="img-poster" src={itemNews.image_author} alt="" />
                                    <h5 className="name-by-poster">{itemNews.author}</h5>
                                </div>
                                <div className="folder-comment">
                                    <div className="folder-post">
                                        <img className="icon-folder" src="/assets/elements/folder.png" alt="" />
                                        <h5 className="name-folder">health care</h5>
                                    </div>
                                    <div className="comment">
                                        <img className="icon-comment" src="/assets/elements/comment.png" alt="" />
                                        <h5 className="name-comment">02 Comments</h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>

            </div>
        </div>
    );
}
