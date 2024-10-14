import About from "../../components/about/About";
import Banner from "../../components/banner/Banner";
import Ingridients from "../../components/ingridients/Ingridients";
import Reviews from "../../components/reviews/Reviews";
import Special from "../../components/special/Special";
import Team from "../../components/team/Team";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Special></Special>
      <Ingridients></Ingridients>
      <Team></Team>
      <Reviews></Reviews>
    </>
  );
};

export default Home;
