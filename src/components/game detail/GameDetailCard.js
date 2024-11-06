import Image from "next/image";
import Link from "next/link";

function GameDetailCard({ news }) {
  return (
    <>
      {news?.map((item, id) => (
        <div className="card" key={id}>
          <Link href={`detail/${item._id}`}>
            <Image
              src={`${item.photo}`}
              alt="img-card"
              width={500}
              height={300}
              priority
            />
          </Link>

          <div className="right">
            <Link href={`detail/${item._id}`}>
              <p>{item.title}</p>
            </Link>
            <Link href={`detail/${item._id}`}>
              <p>{item.description}</p>
            </Link>

            <Link href={`detail/${item._id}`}>
              <strong>{item.category}</strong>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}

export default GameDetailCard;
