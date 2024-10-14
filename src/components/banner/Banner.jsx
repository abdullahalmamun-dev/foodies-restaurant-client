const Banner = () => {
  return (
    <div className="relative bg-banner h-screen my-5 md:my-10 flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 p-10">
        <h1 className="md:px-72  text-3xl md:text-7xl font-bold text-[#FFC] mb-5 md:mb-16">
          Welcome To Foodies Restaurant
        </h1>
        <p className="md:text-4xl text-lg text-[#FFC] mb-5 md:mb-10">
          Savor the Flavors of Authentic Italian Cuisine
        </p>
        <p className="md:text-2xl text-sm text-[#FFC] mb-5 md:mb-10">
          <span className="font-bold">Join Us for Happy Hour:</span>{" "}
          <span>Every Friday from 5 PM to 7 PM</span>
        </p>
        <button className="text-xs md:text-lg text-[#FFC] bg-[#101418] hover:bg-black hover:text-white rounded-xl p-2 md:p-5">
          Reserve Your Table Today!
        </button>
        <p className=""></p>
      </div>
    </div>
  );
};

export default Banner;
