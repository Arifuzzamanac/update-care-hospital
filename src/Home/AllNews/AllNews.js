import React, { useEffect, useState } from 'react';
import News from '../News/News';
import './AllNews.css'

const AllNews = () => {
    const [newses, setNewses] = useState([]);
    useEffect(() => {
        fetch('lNewz.json')
            .then(res => res.json())
            .then(data => setNewses(data))
    }, [])
    return (
        <div className="container">
            <h2 id='latestNews'>Latest News</h2>
            <p className='mb-5'>Know more about us and our succes</p>
            <div className="row">
                {
                    newses.map(news => <News
                        key={news.id}
                        news={news}
                    ></News>)
                }
            </div>
        </div>
    );
};

export default AllNews;