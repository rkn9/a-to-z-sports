import React from "react";
import Heading from "../Heading";
import RelatedNewsCard from "./RelatedNewsCard";

function RelatedNewsSection({ res, category }) {
  const relatedNews = res.filter((data) => data.category == category.category);

  return (
    <>
      <div className="related-news-section">
        <Heading heading="Related" />
        <div className="all-related-news-section">
          <RelatedNewsCard relatedNews={relatedNews} />
        </div>
      </div>
    </>
  );
}

export default RelatedNewsSection;
