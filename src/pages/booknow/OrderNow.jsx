import { useLoaderData } from "react-router-dom";

const BookNow = () => {
    const menu = useLoaderData();
    const {
      _id,
      name,
      photoUrl,
      description,
      quantity,
      numberOfSales,
      category,
      price,
    } = menu;
    return (
        <div className="md:my-10">
            <h1 className="text-3xl text-white">Selected Item: {menu.name}</h1>
        </div>
    );
};

export default BookNow;