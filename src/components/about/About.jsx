import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div className="md:flex  text-center md:text-left px-2 md:px-0 my-auto">
            <div className="md:w-1/2 md:gap-10 md:pr-24 mx-auto">
                <h1 className="text-3xl md:text-4xl md:pt-20 pb-5 md:pb-10 text-[#FFCE6D] dancing ">About Us</h1>
                <h3 className="text-white pb-3 md:pb-10  md:text-3xl text-justify">Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine</h3>
                <p className="text-white text-xs md:text-lg pb-2 md:pb-10 text-justify">Founded in 2010 by the Rossi family, Bella Italia was born out of a love for authentic Italian cuisine and a desire to share these flavors with our community. Our journey began in a small kitchen, crafting dishes inspired by family recipes passed down through generations.</p>
                <p className="text-white text-xs pb-2 md:text-lg md:pb-10 text-justify">Our mission is to provide delicious, high-quality meals made from the freshest ingredients, served in a warm and inviting atmosphere. From classic pasta dishes to innovative pizzas, our menu offers something for everyone, including vegetarian and gluten-free options.</p>
                <NavLink to={'/about'} className="text-white text-xs md:text-lg border-solid border-white border-2 p-2 rounded-xl hover:text-[#FFCE6D] hover:border-[#FFCE6D]">Read more</NavLink>
            </div>
            <div className="mx-auto mt-5 md:mt-10">
                <img src="/about.png" alt="" />
            </div>
        </div>
    );
};

export default About;