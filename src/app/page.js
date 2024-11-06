"use client";
import dynamic from "next/dynamic";
const LatestNewsSection = dynamic(
  () => import("@/components/Latest News/LatestNewsSection"),
  { ssr: false }
);

const HomeFeatureCategory = dynamic(
  () => import("@/components/HomeFeatureCategory/HomeFeatureCategory"),
  { ssr: false }
);

import Herosection from "@/components/Herosection";
import TrendingSection from "@/components/Trending News/TrendingSection";

import { getAllNews } from "@/lib/features/news/allNewsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllCategorySlice,
  getAllCategory,
} from "@/lib/features/category/allCategorySlice";

export default function Home() {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const categoryData = useSelector(
    (data) => data.AllCategorySlice.category.category
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
    dispatch(getAllCategory());
  }, [dispatch]);

  return (
    <>
      <Herosection />
      <TrendingSection />
      <LatestNewsSection />
      <HomeFeatureCategory res={data} categoryData={categoryData} />
    </>
  );
}
