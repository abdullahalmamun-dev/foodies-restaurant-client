import { Avatar, Carousel } from "flowbite-react";

const Reviews = () => {
  return (
    <div className="bg-slate-500 bg-opacity-20 px-4 md:px-10 md:py-20 py-4 rounded-sm my-10">
      <h1 className="text-3xl md:text-4xl pb-5 text-[#FFCE6D] dancing text-center">
        Reviews
      </h1>
      <h3 className="text-white text-center pb-5 text-2xl">
        Words from our food lovers
      </h3>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel indicators={false}>
          <div className=" h-full items-center justify-center">
          <Avatar img="/public/Reviews/1.svg" alt="avatar of Jese" rounded className="w-10 md:w-20 mx-auto pt-1 md:pt-20" />
            <h1 className="text-white text-center text-2xl md:text-xl md:pt-5 md:pb-10">&quot;A Culinary Delight!&quot;</h1>
            <p className="text-white text-center md:text-xl text-xs md:px-36">
              I had the pleasure of dining at Foodies Restaurant Name last weekend,
              and it was an unforgettable experience! The ambiance is warm and
              inviting, making it the perfect spot for a special night out. I
              ordered the Signature Dish, and it was absolutely
              delicious—perfectly cooked and bursting with flavor. The staff was
              attentive and friendly, ensuring we had everything we needed. I
              can&apos;t wait to return and try more of their incredible menu!
            </p>
          </div>
          <div className=" h-full items-center justify-center">
          <Avatar img="/public/Reviews/2.svg" alt="avatar of Jese" rounded className="w-10 md:w-20 mx-auto pt-1 md:pt-20"/>
            <h1 className="text-white text-center text-2xl md:text-xl md:pt-5 md:pb-10">&quot;Great Food, Great Service!&quot;</h1>
            <p className="text-white text-center md:text-xl text-xs md:px-36">
            Foodies Restaurant is a gem in the heart of the city! I visited with friends for dinner, and we were all impressed by the quality of the food. The Soup was a standout, and the portion sizes were generous. Our server was knowledgeable about the menu and made excellent recommendations. The only downside was a slight wait for our food, but it was worth it! Highly recommend for anyone looking for a great meal!
            </p>
          </div>
          <div className=" h-full items-center justify-center">
          <Avatar img="/public/Reviews/2.svg" alt="avatar of Jese" rounded className="w-10 md:w-20 mx-auto pt-1 md:pt-20"/>
            <h1 className="text-white text-center text-2xl md:text-xl md:pt-5 md:pb-10">&quot;A Culinary Delight!&quot;</h1>
            <p className="text-white text-center md:text-xl text-xs md:px-36">
              I had the pleasure of dining at Foodies Restaurant Name last weekend,
              and it was an unforgettable experience! The ambiance is warm and
              inviting, making it the perfect spot for a special night out. I
              ordered the Signature Dish, and it was absolutely
              delicious—perfectly cooked and bursting with flavor. The staff was
              attentive and friendly, ensuring we had everything we needed. I
              can&apos;t wait to return and try more of their incredible menu!
            </p>
          </div>

        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
