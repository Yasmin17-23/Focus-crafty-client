import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import { useState } from "react";
import CraftCard from "../../components/CraftCard/CraftCard";
import ArtCraftCategory from "../../components/ArtCraftCategory/ArtCraftCategory";
import FamousArtist from "../../components/FamousArtist/FamousArtist";
import Partner from "../../components/Partner/Partner";



const Home = () => {
    const loadedCraftItems = useLoaderData();
    const [craftItems, setCraftItems] = useState(loadedCraftItems);
    const [itemLength, setItemLength] = useState(6)

    return (
        <div>
             <div className="pl-6">
               <Banner></Banner>
             </div>
            <div className="text-center my-10">
                <h2 className="text-xl md:text-3xl font-bold text-red-700">Craft Items</h2>
                <p className="py-3">Here our beautiful art & craft item section</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mt-10">
                    {
                        craftItems.slice(0,itemLength).map(craft => <CraftCard key={craft._id}
                            craft={craft}></CraftCard>)
                    }
                </div>
            </div>
            <div className="pl-6">
              <ArtCraftCategory></ArtCraftCategory>
            </div>
            <FamousArtist></FamousArtist>
            <Partner></Partner>
        </div>
    );
};

export default Home;