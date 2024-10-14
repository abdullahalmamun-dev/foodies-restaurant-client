import { Card } from "flowbite-react";

const All_Foods_Card = ({ food }) => {
  const { name, photoUrl, description, price } = food;

  return (
    <div className="">
      <Card className="bg-black bg-opacity-30">
        <img
         className="md:w-96 md:h-96"

          src={photoUrl}
          alt={`Image of ${name}`}
        />
        <h5 className="text-[#FFC] md:text-2xl text-center font-bold tracking-tight ">
          {name}
        </h5>
        <p className="font-normal text-white text-center">
          {description}
        </p>
        <p className="bg-[#FFC] text-xl text-gray-800 px-5 rounded-xl text-center py-2 font-bold">Price: ${price}</p>
      </Card>
    </div>
  );
};

export default All_Foods_Card;