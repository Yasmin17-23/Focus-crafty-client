import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaAngleDown } from "react-icons/fa6";


const MyCraftList = () => {
    const { user } = useContext(AuthContext);
    const [myCraft, setMyCraft] = useState([]);
    const { _id } = myCraft;
    const [displayCraft, setDisplayCraft] = useState([]);

    const handleFilterCraft = filter => {
        if(filter === 'All'){
            setDisplayCraft(myCraft);
        }
        else if(filter === 'Yes'){
            const yesCustomization = myCraft.filter(craft => craft.customization === 'Yes');
            setDisplayCraft(yesCustomization);
        }
        else if(filter === 'No'){
            const noCustomization = myCraft.filter(craft => craft.customization === 'No');
            setDisplayCraft(noCustomization);
        }
    }

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyCraft(data);
                setDisplayCraft(data);
            })
    }, [user]);



    const handleDeleteCraft = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/crafts/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Craft Item has been deleted.",
                                icon: "success"
                            });

                            const remainingCraft = myCraft.filter(crf => crf._id !== _id);
                            setMyCraft(remainingCraft);
                        }
                    })
            }
        });
    }

    return (

        <div className="text-center my-10 space-y-5">
            <h2 className="text-3xl font-bold mt-4 mb-6 text-orange-800">My craft List: {myCraft.length}</h2>
            <div className="flex justify-center items-center md:justify-end md:items-end">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1 mb-5">Customization <FaAngleDown /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleFilterCraft('All')}><a>All</a></li>
                    <li onClick={() => handleFilterCraft('Yes')}><a>Yes</a></li>
                    <li onClick={() => handleFilterCraft('No')}><a>No</a></li>
                </ul>
            </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 ">
                {
                    displayCraft.map(item =>

                        <div className="card bg-orange-200 pt-5 w-96 shadow-xl" key={item._id}>
                            <figure>
                                <img
                                    src={item.image}
                                    alt="Shoes"
                                    className="w-80 h-60 rounded-xl" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-white text-xl">
                                    {item.itemName}
                                </h2>
                                <div className="flex justify-between items-center">
                                    <p className="font-semibold text-md"><span className="text-lg font-semibold 
                                   text-orange-600">Price: </span>{item.price}</p>
                                    <p className="font-semibold text-md"><span className="text-lg font-semibold 
                                   text-orange-600">Rating: </span>{item.rating}</p>
                                </div>

                                <div className="flex flex-col justify-start items-start">
                                    <p className="font-semibold"><span className="text-lg font-semibold 
                                text-orange-600">Customization: </span>{item.customization}</p>

                                    <p className="font-semibold"><span className="text-lg font-semibold 
                                text-orange-600">StockStatus: </span>{item.stockStatus}</p>
                                </div>
                                <div className="card-actions justify-center mt-3">
                                    <div className="flex justify-between items-center space-x-4">
                                        <div>
                                            <button onClick={() => handleDeleteCraft(item._id)}
                                                className="btn rounded-full bg-yellow-700 text-white hover:bg-orange-900">
                                                <MdDelete className="text-xl" />
                                                DELETE
                                            </button>
                                        </div>
                                        <div>
                                            <Link to={`/updateCraft/${item._id}`}>
                                                <button className="btn rounded-full bg-yellow-700 text-white hover:bg-orange-900">
                                                    <MdEdit className="text-xl" />
                                                    UPDATE
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default MyCraftList;