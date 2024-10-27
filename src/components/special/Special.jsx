const Special = () => {
  return (
    <div className="bg-[#101418] bg-opacity-70 py-12 md:py-20 px-4 md:px-10 my-5">
      <h1 className="text-3xl md:text-4xl pb-5 md:pb-10 text-[#FFCE6D] dancing text-center">
        Special
      </h1>
      <h2 className="text-white text-center md:text-4xl pb-10 md:pb-16">
        What makes us Special
      </h2>
      <div className="grid md:flex gap-10 md:gap-20 mx-4 md:mx-0">
        <div className="bg-[#a08040] bg-opacity-30 p-5 md:py-16 w-full">
          <img
            className="mx-auto pb-4"
            src="/Special/orange-juice.png"
            alt=""
          />
          <h1 className="text-white text-center md:text-2xl pb-4">
            Fresh food
          </h1>
          <p className="text-white md:text-lg text-xs md:px-10 text-justify">
            At Foodies Restaurant, we prioritize freshness by sourcing local and
            seasonal ingredients. Our commitment to quality ensures every dish
            is packed with flavor and nutrition, supporting sustainable
            practices in our community.
          </p>
        </div>
        <div className="bg-[#a08040] bg-opacity-30 p-5 md:py-16 w-full">
          <img
            className="mx-auto pb-4"
            src="/Special/orange-juice.png"
            alt=""
          />
          <h1 className="text-white text-center md:text-2xl pb-4">
            Fresh food
          </h1>
          <p className="text-white md:text-lg text-xs md:px-10 text-justify">
            Led by Chef Jong Lee, our culinary team brings creativity and
            expertise to every meal. With experience from renowned kitchens, he
            crafts dishes that create unforgettable flavor experiences.
          </p>
        </div>
        <div className="bg-[#a08040] bg-opacity-30 py-4 px-4 md:py-16 w-full">
          <img
            className="mx-auto pb-4"
            src="/Special/orange-juice.png"
            alt=""
          />
          <h1 className="text-white text-center md:text-2xl pb-4">
            Fresh food
          </h1>
          <p className="text-white md:text-lg text-xs md:px-10 text-justify">
            Our diverse menu features exotic dishes inspired by global cuisines.
            Each plate offers bold flavors and unique combinations, inviting you
            on a culinary journey with every visit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Special;
