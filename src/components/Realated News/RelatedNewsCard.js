import Link from "next/link";
import React from "react";
import Image from "next/image";

function RelatedNewsCard({ relatedNews }) {
  return (
    <>
      {relatedNews?.map((data, id) => (
        <Link href={`/detail/${data._id}`} key={id}>
          <div className="related-news-card">
            <Image
              src={`${data.photo}`}
              alt="img-card"
              width={500}
              height={300}
              priority
            />
            <div className="related-news-card-bottom">
              <strong>{data.title}</strong>
              <p>{data.description}</p>
              <p className="time">
                <span>{data.category}</span>
                <span></span>
                <span>30min ago</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default RelatedNewsCard;
