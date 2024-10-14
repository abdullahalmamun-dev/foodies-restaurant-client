const Ingridients = () => {
  return (
    <div>
      <div className="md:flex gap-20 px-2 md:px-0 my-auto text-center">
        <div className=" ">
          <img
            className="mt-5 md:mt-10 md:ml-12"
            src="/ingridients.png"
            alt=""
          />
        </div>
        <div className="md:w-1/2 md:">
          <h1 className="text-3xl md:text-4xl pt-4 md:pt-10 pb-5 md:pb-4 text-[#FFCE6D] dancing text-center md:text-right ">
            Ingridients
          </h1>
          <h3 className="text-white pb-3 md:pb-10  md:text-3xl text-center md:text-right">
            What goes in
          </h3>
          <p className="text-white text-xs md:text-lg pb-4 md:pb-10 text-justify">
            Cooking ingredients are the foundation of every dish, and their
            quality greatly influences the final flavor. Fresh produce,
            high-quality proteins, and aromatic herbs and spices are essential
            for vibrant taste. Each component plays a role: vegetables add
            texture, spices enhance flavor, and oils provide richness. At Fodies
            Restaurant, we carefully select each ingredient to ensure every dish
            reflects our commitment to culinary excellence.
          </p>
          <button className="text-white text-center text-xs md:text-lg border-solid border-white border-2 p-2 rounded-xl hover:text-[#FFCE6D] hover:border-[#FFCE6D]">
            Read more
          </button>
        </div>
      </div>
      <div className="bg-[#101418] bg-opacity-70 justify-center my-5 md:my-20 py-5 md:py-16 md:flex md:px-32 md:gap-48 mx-auto grid gap-5">
        <div className="flex md:gap-5 items-center">
            <div>
                <img className="w-12" src="/Special/dish 1.png" alt="" />
            </div>
            <div>
                <p className="text-[#FFCE6D] text-2xl md:text-5xl font-bold">250+</p>
                <p className="text-white text-xs text-center">Delicacy</p>
            </div>
        </div>
        <div className="flex md:gap-5 items-center">
            <div>
                <img className="w-12" src="/Special/chef1.png" alt="" />
            </div>
            <div>
                <p className="text-[#FFCE6D] text-2xl md:text-5xl font-bold">10+</p>
                <p className="text-white text-xs text-center">Reknowned Chefs</p>
            </div>
        </div>
        <div className="flex md:gap-5 items-center">
            <div>
                <img className="w-12" src="/Special/team.png" alt="" />
            </div>
            <div>
                <p className="text-[#FFCE6D] text-2xl md:text-5xl font-bold">30+</p>
                <p className="text-white text-xs text-center">Members</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Ingridients;
