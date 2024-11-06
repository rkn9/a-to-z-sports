import Game from "@/components/Game";
import GameCard from "@/components/GameCard";
import Heading from "@/components/Heading";

function HomeFeatureCategory({ res, categoryData }) {
  categoryData = categoryData?.filter((data) => data.add_page == true);
  console.log(categoryData, "ss");

  return (
    <>
      {categoryData?.map((item, id) => (
        <section className="paraolampic game-section" key={id}>
          <Heading heading={item.category} />
          <div className="about-section">
            <Game news={res} categoryName={item.category} />
          </div>
          <div className="slider">
            <GameCard news={res} categoryName={item.category} />
          </div>
        </section>
      ))}
    </>
  );
}

export default HomeFeatureCategory;
