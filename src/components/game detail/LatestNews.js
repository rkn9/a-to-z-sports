import { TbSpeakerphone } from "react-icons/tb";
import Link from "next/link";
function LatestNews({ news }) {
  return (
    <div>
      <div className="latest-news">
        <strong>
          <TbSpeakerphone color="#ffde00" fontSize="20px" />
          LATEST NEWS
        </strong>
        <ul>
          {news?.map((item, id) => (
            <li key={id}>
              <Link href={`detail/${item._id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LatestNews;
