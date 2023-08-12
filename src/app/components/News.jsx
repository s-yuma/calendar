'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
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

  return (
    <div>
      <h1>日本のニュース</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;