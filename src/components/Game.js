import Image from "next/image";
import Link from "next/link";

function Game({ news, categoryName }) {
  news = news?.filter((item) => item.category == categoryName);
  const latestNews = news?.slice(news.length - 2, news.length);

  return (
    <>
      {latestNews?.map((item, id) => (
        <Link href={`detail/${item._id}`} key={id}>
          <div className="game-card">
            <Image
              src={`${item.photo}`}
              alt="img-card"
              width={500}
              height={300}
              priority
            />
            <div className="game-card-bottom">
              <h4>{item.title}</h4>
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

export default Game;
