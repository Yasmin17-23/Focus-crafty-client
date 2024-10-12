import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";



const AllCategory = () => {
    const { subcategory } = useParams();
    const [allCategory, setAllCategory] = useState([]);



    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => {
                console.log(data);

                const showCard = data.filter(ct => ct.subcategory === subcategory);
                setAllCategory(showCard)
            })
    }, [])
    return (
        <div className="text-center my-10">
            <h2 className="text-3xl font-bold text-orange-700 mb-6">All SubCategory</h2>
            <div className="grid grid-cols-1 md:grid-cold-2 lg:grid-cols-3 gap-5">
                {
                    allCategory.map(item =>
                        <div className="card bg-rose-900 card-compact text-white" key={item._id}>
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="w-60 h-40 rounded-md mt-8" />
                            </figure>
                            <div className="card-body ">
                                <h2 className="card-title mx-auto">{item.itemName}</h2>
                                <p className="font-semibold text-orange-600">{item.subcategory}</p>
                                <div className="flex justify-between items-start">
                                    <p className="font-semibold"><span className="text-lg font-semibold 
                text-orange-600">Price: </span>{item.price}</p>

                                    <p className="font-semibold"><span className="text-lg font-semibold 
                text-orange-600">Rating: </span>{item.rating}</p>

                                </div>
                                <div className="card-actions justify-center mt-4">
                                    <Link to={`/categoryDetails/${item._id}`}>
                                        <button className="btn bg-orange-700 text-white 
                         hover:bg-orange-900">View Details</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default AllCategory;