import TrendingNewsCard from "./TrendingNewsCard";
import Heading from "@/components/Heading";

export default function TrendingSection() {
  return (
    <>
      <section className="trending-section">
        <Heading heading="Trending" />
        <div className="trending-news">
          <TrendingNewsCard />
        </div>
      </section>
    </>
  );
}
