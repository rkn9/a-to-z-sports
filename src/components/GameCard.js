import Link from "next/link";
import React from "react";

function GameCard({ news, categoryName }) {
  news = news?.filter((item) => item.category == categoryName);
  const latestNews = news?.slice(news.length - 3, news.length);
  return (
    <>
      {latestNews?.map((item, id) => (
        <Link href={`detail/${item._id}`} key={id}>
          <div className="game-card-bottom slider">
            <h4>{item.title}</h4>
            <p className="time">
              <span>{item.category}</span>
              <span></span>
              <span>{item.date.slice(0, 10)}</span>
            </p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default GameCard;
