import Image from "next/image";
import Link from "next/link";

function LatestNews({ latestNews }) {
  return (
    <>
      {latestNews?.map((item, id) => (
        <Link href={`detail/${item._id}`} key={id}>
          <div className="latest-news-card">
            <Image
              src={`${item.photo}`}
              alt="img-card"
              width={500}
              height={300}
              priority
            />
            <div className="right-card">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p className="time">
                <span>{item.category}</span>
                <span></span>
                <span>{item.date.slice(0, 10)}</span>
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default LatestNews;
