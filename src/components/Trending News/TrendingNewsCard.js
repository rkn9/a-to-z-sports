import { getAllNews } from "@/lib/features/news/allNewsSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function TrendingNewsCard() {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const trendingNews = data?.filter((data) => data.is_trending == true);

  const ThreeTrendingNews = trendingNews?.reverse().slice(0, 3);
  return (
    <>
      {ThreeTrendingNews?.map((item, id) => (
        <Link href={`detail/${item._id}`} key={id}>
          <div className="tending-news-card">
            <Image
              src={`${item.photo}`}
              alt="img-card"
              width={500}
              height={300}
              priority
            />
            <div className="right-card">
              <h4>{item.category}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default TrendingNewsCard;
