import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getAllNews } from "@/lib/features/news/allNewsSlice";

function Herosection() {
  const data = useSelector((data) => data.AllNewsSlice.news.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllNews());
  }, [dispatch]);
  const banner = data?.filter((data) => data.banner == true);

  // swiper js
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="heroSection">
        <Swiper
          pagination={pagination}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {banner?.map((item, id) => (
            <SwiperSlide key={id}>
              <Link href={`detail/${item._id}`}>
                <section
                  className="hero-section"
                  style={{
                    background: `
                    linear-gradient(90deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0), rgba(255, 255, 200, 0), rgba(0, 0, 0, 0.9)),
                    linear-gradient(180deg, rgba(0, 128, 0, 0), rgba(255, 166, 0, 0), rgba(0, 0, 0, 0.9)),
                    url(${item.photo})
                  `,
                    backgroundSize: "cover",
                    position: "relative",
                  }}
                >
                  <div className="about-section">
                    <h1>{item.title}</h1>
                    <p className="time">
                      <span>{item.category}</span>
                      <span></span>
                      <span>{item.date.slice(0, 10)}</span>
                    </p>
                  </div>
                </section>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Herosection;
