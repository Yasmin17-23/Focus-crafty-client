import { Link } from "react-router-dom";


const CraftCard = ({ craft }) => {
    const { _id, itemName, image, subcategory, customization, price, rating, processTime,
        stockStatus, userName, email, description } = craft;
    return (
        <div className="card card-compact  ">
            <figure>
                <img
                    src={image}
                    alt="Shoes"
                    className="w-60 h-40 rounded-md" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title mx-auto">{itemName}</h2>
                <p className="font-semibold"><span className="text-lg font-semibold text-orange-600">StockStatus: </span>{stockStatus}</p>
                <p className="font-semibold"><span className="text-lg font-semibold text-orange-600">Price: </span>{price}</p>
                <div className="card-actions justify-center">
                    <Link to={`/itemDetails/${_id}`}>
                        <button className="btn bg-orange-700 text-white 
                         hover:bg-orange-900">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CraftCard;