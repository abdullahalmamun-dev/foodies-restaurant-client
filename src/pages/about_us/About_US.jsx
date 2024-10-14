import { NavLink } from "react-router-dom";

const About_US = () => {
  return (
    <div className="my-10">
      <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center">
        <h1 className="text-xl md:text-6xl dancing text-[#FFCE6D] mb-5">
          About Us
        </h1>
        <h3 className="text-white text-sm md:text-xl"><NavLink to={'/'}>Home</NavLink> | About Us</h3>
      </div>
      <div className="md:flex  my-5">
        <div className="md:w-1/2 grid items-center justify-center text-center content-center md:px-20">
          <h1 className="text-[#FFFCCC] text-lg md:text-5xl md:pb-10">
            Our Story
          </h1>
          <p className="text-white text-xs md:text-2xl pb-4 px-5 text-justify">
            Nestled in the vibrant city of Regina, Saskatchewan, Ginger Garlic
            is a culinary oasis dedicated to delivering the rich and diverse
            flavors of Nepalese cuisine.
          </p>
        </div>
        <div>
          <img className="w-full" src="/About/1.png" alt="" />
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col-reverse my-5">
        <div>
          <img className="w-full" src="/About/2.png" alt="" />
        </div>
        <div className="md:w-1/2 grid items-center justify-center text-center content-center md:px-20">
          <p className="text-white text-xs md:text-2xl pb-4 px-5 text-justify">
            Our story is one of passion, where the traditional aromas and tastes
            of the Himalayan region come to life in every dish.
          </p>
        </div>
      </div>
      <div className="md:flex md:flex-row my-5">
        <div className="md:w-1/2 grid items-center justify-center text-center content-center md:px-20">

          <p className="text-white text-xs md:text-2xl pb-4 px-5 text-justify">
            From the warmth of our hospitality to the authenticity infused into
            each recipe, we invite you to join us on a gastronomic journey that
            celebrates the unique blend of spices and culinary traditions that
            define Nepalese cooking.
          </p>
        </div>
        <div>
          <img className="w-full" src="/About/3.png" alt="" />
        </div>
      </div>
      <div className="md:flex md:flex-row flex flex-col-reverse my-5">
        <div>
          <img className="w-full" src="/About/4.png" alt="" />
        </div>
        <div className="md:w-1/2 grid items-center justify-center text-center content-center md:px-20">

          <p className="text-white text-xs md:text-2xl pb-4 px-5 text-justify">
            At Foodies Restaurant, we strive to create not just meals but
            memorable experiences, weaving the cultural tapestry of Nepal into
            the fabric of our restaurant in the heart of Regina.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About_US;
