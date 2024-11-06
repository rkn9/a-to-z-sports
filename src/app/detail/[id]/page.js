"use client";
import RelatedNewsSection from "@/components/Realated News/RelatedNewsSection";
import Link from "next/link";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "@/lib/features/news/allNewsSlice";
import { useEffect } from "react";

function page({ params }) {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);

  const detailNews = data?.filter((data) => data._id == params.id);

  return (
    <>
      {detailNews?.map((item, id) => (
        <Link href="#">
          <section
            className="hero-section"
            key={id}
            style={{
              background: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(255, 255, 200, 0), rgba(0, 0, 0, 0.9)),
                    linear-gradient(180deg, rgba(0, 128, 0, 0), rgba(255, 166, 0, 0), rgba(0, 0, 0, 0.9)),
                    url(${item.photo})
                  `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div className="about-section">
              <h1>{item.title}</h1>
              <p className="time">
                <span>{item.category}</span>
                <span></span>
                <span>30min ago</span>
              </p>
            </div>
          </section>
        </Link>
      ))}

      <div className="detail-page">
        {detailNews?.map((item, id) => (
          <div className="left-detail-page" key={id}>
            <div className="about-detail">
              <p>{item.description}</p>

              <strong>The NADA notice</strong>
              <section
                dangerouslySetInnerHTML={{ __html: item.newsdetails }}
                className="detail-editor"
              ></section>
            </div>

            <div className="show-comment">
              <div className="show-commnet-header">
                <strong>0 comments</strong>
                <div className="short-comment">
                  <label htmlFor="sort">Sort by</label>
                  <select id="sort">
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
              <div className="our-comments"></div>
            </div>
            <div className="input-comment">
              <div className="img">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/87c7/b64d/4ad94c5d57e2fbf1f4ab06ee8bf16fd1?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bJif3ARfEmlp1sukfPnEqjQEVgOVXCNfWF4WZjICVyPEJYscflq7j0Bb8ZAzS3Vkf6Vc-OOaY0DLS39f3P6GCbIDPnENg5gjOJawv5smOyLqVjlw-bfNCkL8kLZIlByg7GJl0zICx2cKhoAr9lgX-y2Fa49rqNYppS7PuMRzLEgoZ8e80G4QnFHyHeHNGkwQ12axGJRbpocyYANPtdEIix7Iqhd2pM8shClszCgXH5msVUfYLHpHZGC8cEeb2F4-JgcN~xDwE1CbHZMTIs8pB9mbU9~gPj4D7jh9KPaEsTjbiW33fGU1zn78~6le3fBY0jVtIuEy5Sm3btf26ocybA__"
                  alt="logo"
                  width={100}
                  height={50}
                />
              </div>
              <textarea
                name="commenet"
                id="comment"
                placeholder="Add a comment..."
              />
            </div>
          </div>
        ))}
        {detailNews?.map((item, id) => (
          <RelatedNewsSection res={data} category={item} key={id} />
        ))}
      </div>
    </>
  );
}

export default page;
