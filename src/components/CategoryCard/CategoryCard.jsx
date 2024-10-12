import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {
    const { _id, itemName, image, subcategory, price, rating, processTime, description } = category;

    return (
        <Link to={`/category/${category.subcategory}`} >

            <div className="card bg-orange-300 card-compact ">
                <figure>
                    <img
                        src={image}
                        alt="Shoes"
                        className="w-40 h-32 rounded-md mt-8" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title mx-auto">{subcategory}</h2>

                    <p className="font-semibold"><span className="text-lg font-semibold 
                text-orange-600">Price: </span>{price}</p>

                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;