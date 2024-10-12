//import { useEffect, useState } from "react";

import { Link, useLoaderData, useParams } from "react-router-dom";


const AllCraftItems = () => {
    const loadedAllCrafts = useLoaderData();
    
    //const { _id } = loadedAllCrafts;
 
    //const [allCraft, setAllCraft] = useState(loadedAllCrafts);
    return (
        <div className="my-6 text-center">
            <h2 className="text-3xl font-bold">Here All <span className="text-orange-800">Art & Craft
            </span> Items: {loadedAllCrafts.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                            </th>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Stcock Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loadedAllCrafts.map(art =>
                                <tr key={art._id}>
                                    <th>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={art.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <h4 className="font-bold">{art.itemName}</h4>

                                        </div>
                                    </td>
                                    <td>
                                        <span className="badge badge-ghost badge-sm">
                                            {art.price}</span>
                                    </td>
                                    <td>{art.stockStatus}</td>
                                    <th>
                                        <Link to={`/itemDetails/${art._id}`}>
                                            <button className="btn bg-orange-700 text-white 
                                           hover:bg-orange-900">View Details</button>
                                        </Link>
                                    </th>
                                </tr>
                            )
                        }




                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllCraftItems;