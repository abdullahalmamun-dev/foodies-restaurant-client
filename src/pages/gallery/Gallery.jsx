import { Carousel } from "flowbite-react";

const Gallery = () => {
  return (
    <div className="md:my-10 my-4">
      <div>
        <div className="bg-banner h-[40vh] grid items-center justify-center text-center content-center">
          <h1 className="text-xl md:text-6xl dancing text-[#FFCE6D] md:mb-5">
            Gallery
          </h1>
          <h3 className="text-white text-sm md:text-xl">Home | Gallery</h3>
        </div>
      </div>
      <div>
        <h3 className="text-white text-center text-lg md:px-36 md:text-2xl my-4 md:my-10">
          Explore Foodies Restaurant&apos;s vibrant gallery, where captivating
          images showcase the ambiance of our culinary haven.
        </h3>
      </div>
      <div>
        <div className="h-96 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={3000}>
            <img
              src="banner.jpg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
