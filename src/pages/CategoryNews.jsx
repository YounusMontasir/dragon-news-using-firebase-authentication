import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    const {data: news} = useLoaderData()
    
    
    return (
        <div>
            <p>Dragon News Home</p>
            <p>{news.length}</p>
            <div>
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;