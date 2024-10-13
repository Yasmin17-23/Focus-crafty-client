import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
    const {id} = useParams();
    console.log(id);
    const [categoryData, setCategoryData] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/category/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                //setCategoryData(data)
            })
    }, [id])


    return (
        <div>
            <h2>{categoryData.itemName} </h2>
        </div>
    );
};

export default CategoryDetails;