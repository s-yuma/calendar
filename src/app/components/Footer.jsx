 "use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Footer = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=jp&apiKey=d2ed88772a9e47999398796fba7456fb'
          );
  
          setArticles(response.data.articles);
          
          
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchNews();
    }, []);

    return(
        <>
            <footer className= "bottom-0 text-center sm:p-3 p-1.5">
                <div className='scroll'>
                    <div className='news'>
                {articles.map((article, index) => (
                 <div key={index} className="news-item">
                    <a href={article.url} >{article.title} {article.description}</a>
                
                    </div>
        ))}
        </div>
                </div>
            </footer>
        </>
    )
}

export default Footer