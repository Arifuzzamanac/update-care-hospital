import React from 'react';
import './News.css'

const News = ({ news }) => {
    const { img, description, title } = news;
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className='news'>
                <img className='img-fluid' src={img} alt="" />
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default News;