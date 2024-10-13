import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const ArtCraftCategory = () => {
    const [categories, setCategories] = useState([]);
    const [categoryLength, setCategoryLength] = useState(6);

    useEffect(() => {
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCategories(data);
        })
    }, [])
    return (
        <div className="text-center my-12">
            <h2 className="text-3xl font-bold text-red-800 ">Art & Craft Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 md:mt-10">
                {
                     categories.slice(0, categoryLength).map(category => <CategoryCard key={category._id}
                        category={category}
                        ></CategoryCard>)
                }
            </div>
        </div>
    );
};

export default ArtCraftCategory;