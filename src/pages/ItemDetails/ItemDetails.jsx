//import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";
import { useEffect, useState } from "react";


const ItemDetails = () => {
  const { id } = useParams();
  const [craftItem, setCraftItem] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/crafts/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCraftItem(data);
      })
  }, [id])

  return (
    <div>
        <div className="text-center my-7">
            <h2 className="text-3xl font-bold text-cyan-700 mb-5">Craft <span className="text-orange-800">Item</span> Details</h2>
        </div>
       <div className="hero">
       <div className="hero-content flex-col lg:flex-row">
         <img
           src={craftItem.image}
           className="max-w-md h-[350px] rounded-lg shadow-2xl mr-4" />
         <div className="space-y-3 text-md font-semibold">
           <Bounce delay={500} duration={1500} triggerOnce>
             <h1 className="text-5xl font-bold">{craftItem.itemName}</h1>
           </Bounce>
           <p className=""><span className="text-yellow-600">Category:</span> {craftItem.subcategory}</p>
           <p className=""><span className="text-yellow-600">Customization: </span> {craftItem.customization}</p>
           <p className=""><span  className="text-yellow-600">Description: </span> {craftItem.description}</p>
           <p><span className="text-yellow-600">Price: </span> {craftItem.price}</p>
           <p className="font-semibold"><span className="text-yellow-600">Rating: </span> {craftItem.rating} Out of 5</p>
           <p className="font-semibold"><span className="text-yellow-600">Processing Time: </span> {craftItem.processTime} Days</p>
           <p className="font-semibold"><span className="text-yellow-600">Stock Status: </span> {craftItem.stockStatus}</p>
           
         </div>
       </div>
     </div>
    </div>

  );
};

export default ItemDetails;