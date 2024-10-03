import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import CraftCard from "../../components/CraftCard/CraftCard";


const Home = () => {
    const loadedCraftItems = useLoaderData();
    const [craftItems, setCraftItems] = useState(loadedCraftItems);

    return (
        <div>
            <Banner></Banner>
            <div className="text-center my-10">
                <h2 className="text-3xl font-bold text-red-700">Craft Items: {craftItems.length}</h2>
                <p className="py-3">Here our beautiful art & craft item section</p>
                <div>
                    {
                        craftItems.map(craft => <CraftCard key={craft._id}
                            craft={craft}
                            craftItems={craftItems}
                            setCraftItems={setCraftItems}></CraftCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;