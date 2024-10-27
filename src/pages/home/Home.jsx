import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Ingridients from "../../components/ingridients/Ingridients";
import Reviews from "../../components/reviews/Reviews";
import Special from "../../components/special/Special";
import Team from "../../components/team/Team";

const Home = () => {
  return (
    <div className="md:space-y-36 space-y-20 md:my-20">
      <Banner></Banner>
      <About></About>
      <Special></Special>
      <Ingridients></Ingridients>
      <Team></Team>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
