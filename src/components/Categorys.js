"use client";
import { TbSpeakerphone } from "react-icons/tb";
import { PiCricketFill } from "react-icons/pi";
import { BsFillSendFill } from "react-icons/bs";
import Link from "next/link";
import axios from "axios";
import api_url from "@/app/utils/urls";
import { useEffect, useState } from "react";

function Categorys({ categoryValue, setCategoryValue }) {
  const [data, setData] = useState();

  async function allCategory() {
    try {
      const res = await axios.get(`${api_url}category/allcategory`);
      setData(res.data.category);
    } catch (error) {
      console.log("error:" + error);
    }
    return api_url;
  }

  useEffect(() => {
    allCategory();
  }, []);

  const trendingCategory = data?.filter((data) => data.is_trending == true);
  const featuredSports = data?.filter((data) => data.is_trending == false);

  return (
    <>
      <div
        className="category-button-container"
        onClick={() => setCategoryValue(!categoryValue)}
      >
        <div className="category-trending-section">
          <h5>
            <TbSpeakerphone color="#000000dc" />
            TRENDING
          </h5>
          <ul>
            {trendingCategory?.map((item, id) => (
              <li key={id}>
                <Link href={`/${item.slug}`}>{item.category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="features-sports-section">
          <h5>
            <BsFillSendFill color="#000000dc" />
            FEATURED SPORTS
          </h5>
          <ul style={{ listStyleType: "none" }}>
            {featuredSports?.map((item, id) => (
              <li key={id}>
                <PiCricketFill color="#000000dc" />
                <Link href={`/${item.slug}`}> {item.category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Categorys;
