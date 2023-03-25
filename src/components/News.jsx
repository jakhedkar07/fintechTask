import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import Newscard from "./Newscard";

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  
  const { country, pageSize, category } = props;
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c935ba336914df3938fb72d502d5567
    `;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  const fetchMoreData = async () => {
     setPage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1c935ba336914df3938fb72d502d5567
    `;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData);
     setTotalResults(parsedData.totalResults);
     setLoading(false);
  };

  return (
    
    <>
       {loading && <Spinner />}
       <InfiniteScroll
        dataLength={articles.length}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <Newscard
                    title={element.title ? element.title : ""}
                    description={element.body ? element.body : ""}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
     </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
