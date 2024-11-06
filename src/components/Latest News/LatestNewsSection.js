"use client";
import Heading from "@/components/Heading";
import LatestNews from "./LatestNews";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllNews } from "@/lib/features/news/allNewsSlice";

function LatestNewsSection() {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const latestNews = data?.slice(data.length - 3, data.length);
  console.log(latestNews);

  const lastTwo = latestNews?.slice(1, 3);
  return (
    <>
      <section className="latest-news">
        <Heading heading="Latest" />
        <div className="about-section">
          <div className="left">
            <LatestNews latestNews={latestNews} />
          </div>
          <Link href="#">
            <div className="right">
              <h3>
                Dubosis Seeks “Justice” After Low Blow Call in Loss to Usyk
              </h3>
              <p className="time">
                <span>Shooting</span>
                <span></span>
                <span>30min ago</span>
              </p>
            </div>
          </Link>
        </div>
        <div className="slider">
          <LatestNews latestNews={lastTwo} />
        </div>
      </section>
    </>
  );
}

export default LatestNewsSection;
