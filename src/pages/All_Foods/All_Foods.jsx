import { useEffect, useState } from "react";
import All_Foods_Card from "./All_Foods_Card";

const All_Foods = () => {
  const [all_Foods, setAll_Foods] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => setAll_Foods(data));
  }, []);

  const groupedFoods = all_Foods.reduce((acc, food) => {
    if (!acc[food.category]) {
      acc[food.category] = [];
    }
    acc[food.category].push(food);
    return acc;
  }, {});

  const categories = ["All", ...Object.keys(groupedFoods)];

  const filteredFoods =
    selectedCategory === "All"
      ? all_Foods
      : groupedFoods[selectedCategory] || [];

  return (
    <div className="px-5">
              <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center my-10">
        <h1 className="text-3xl md:text-6xl dancing text-[#FFCE6D] mb-5">
          All Foods
        </h1>
        <h3 className="text-white text-sm md:text-xl">
          <a href="/">Home</a> | <a href="/AllFoods">All Foods</a>
        </h3>
      </div>
      <div className="flex flex-wrap mb-5 gap-2 md:gap-5">
        {categories.map((category) => (
          <button
            key={category}
            className={`md:text-2xl justify-between mx-auto mb-2 md:mb-10 px-2 md:px-4 py-2 rounded ${
              selectedCategory === category ? "bg-[#FFCE6D] text-[#101418]" : "bg-[#101418] text-[#FFCE6D]"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredFoods.map((food) => (
          <All_Foods_Card key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
};

export default All_Foods;