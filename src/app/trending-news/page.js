"use client";
import GameDetailCard from "@/components/game detail/GameDetailCard";
import LatestNews from "@/components/Latest News/LatestNews";
import { getAllNews } from "@/lib/features/news/allNewsSlice";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function page() {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const news = data?.filter((data) => data.is_trending == true);
  return (
    <div className="trending-news-page">
      <div className="game-detail-page-heading">
        <Link href="/">Home</Link>
        <FaChevronRight color="#ffd900" />
        <Link href="#">Trending News</Link>
      </div>
      <div className="latest-news">
        <div className="slider">
          <LatestNews latestNews={news} />
        </div>
      </div>
    </div>
  );
}

export default page;
