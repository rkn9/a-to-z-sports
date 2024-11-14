"use client";
import GameDetailCard from "@/components/game detail/GameDetailCard";
import LatestNews from "@/components/game detail/LatestNews";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import { getAllNews } from "@/lib/features/news/allNewsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function page({ params }) {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const decodedUrl = decodeURIComponent(params.category);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const news = data?.filter((data) => data.category == decodedUrl);

  const latestNews = data?.slice(data.length - 3, data.length);

  return (
    <>
      <div className="game-detail-page-heading">
        <Link href="/">Home</Link>
        <FaChevronRight color="#ffd900" />
        <Link href="#">{decodedUrl}</Link>
      </div>
      <div className="game-detail-page">
        <div className="left-game-detail-page-section grow">
          <GameDetailCard news={news} />
        </div>
        <div className="right-game-detail-page-section grow">
          <LatestNews news={latestNews} />
        </div>
      </div>
    </>
  );
}

export default page;
