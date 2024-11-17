import React from 'react';
import { FaShareAlt, FaStar, FaStarHalfAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const singleNewsCard = ({ singleNews }) => {
    return (
        <div className='mb-6'>
            <div className=" mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Author Section */}
            <div className="p-4 flex items-center">
                <img
                    className="w-10 h-10 rounded-full mr-4"
                    src={singleNews.author.img}
                    alt={singleNews.author.name}
                />
                <div>
                    <p className="font-bold text-gray-800">{singleNews.author.name}</p>
                    <p className="text-gray-500 text-sm">{new Date(singleNews.author.published_date).toLocaleDateString()}</p>
                </div>
                <div className="ml-auto text-gray-400 cursor-pointer hover:text-gray-600">
                    <FaShareAlt size={20} />
                </div>
            </div>

            {/* Title and Image */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{singleNews.title}</h2>
                <img
                    className="w-full h-48 object-cover mb-4 rounded"
                    src={singleNews.thumbnail_url}
                    alt={singleNews.title}
                />

                {/* Details */}
                <p className="text-gray-600 text-sm mb-4">
                    {singleNews.details.slice(0, 150)}... 
                    <Link to={`/news/${singleNews._id}`} className="text-blue-500 cursor-pointer"> Read More</Link>
                </p>

                {/* Rating and Views */}
                <div className="flex items-center">
                    <div className="flex text-yellow-400">
                        {Array.from({ length: Math.floor(singleNews.rating.number) }, (_, i) => (
                            <FaStar key={i} />
                        ))}
                        {singleNews.rating.number % 1 !== 0 && <FaStarHalfAlt />}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">{singleNews.rating.number}</span>
                    <span className="text-gray-600 text-sm ml-auto flex items-center">
                        <FaEye className="mr-1" /> {singleNews.total_view}
                    </span>
                </div>
            </div>
        </div>
        </div>
    );
};

export default singleNewsCard;
