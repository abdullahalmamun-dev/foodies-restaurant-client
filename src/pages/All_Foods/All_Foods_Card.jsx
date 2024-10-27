import { Card } from "flowbite-react";
import { NavLink } from "react-router-dom";

const All_Foods_Card = ({ food }) => {
  const { _id, name, photoUrl, description, price } = food;

  return (
    <div className="">
      <Card className="bg-black bg-opacity-30">
        <img
         className="md:w-96 md:h-96"

          src={photoUrl}
          alt={`Image of ${name}`}
        />
        <h5 className="text-[#FFC] md:text-3xl text-center font-bold tracking-tight ">
          {name}
        </h5>
        <p className="font-normal md:text-lg text-white text-center">
          {description}
        </p>
        <div className="flex justify-between items-center">
        <p className=" md:text-2xl text-[#FFC] md:px-5 rounded-xl text-center py-2 md:font-bold">Price: <span className="font-bold text-xl">${price}</span></p>
        <NavLink to={`/AllFoods/${_id}`} className="bg-[#FFC] text-xs md:text-xl hover:text-[#FFCE6D] hover:bg-[#101418] text-gray-800 px-3 md:px-5 rounded-md text-center py-2 ">View More</NavLink>
        </div>
      </Card>
    </div>
  );
};

export default All_Foods_Card;