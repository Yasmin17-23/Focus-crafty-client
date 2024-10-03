import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemDetails = () => {
    const { id } = useParams();
    const [items, setItems] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/crafts/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [id])

    return (
        <div>
            <div className="text-center">
                <h2>Craft Item Details</h2>
            </div>
           <div className="hero">
           <div className="hero-content flex-col lg:flex-row">
             <img
               src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
               className="max-w-sm rounded-lg shadow-2xl" />
             <div>
               <h1 className="text-5xl font-bold">Box Office News!</h1>
               <p className="py-6">
                 Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                 quasi. In deleniti eaque aut repudiandae et a id nisi.
               </p>
               <button className="btn btn-primary">Get Started</button>
             </div>
           </div>
         </div>
        </div>
        
    );
};

export default ItemDetails;