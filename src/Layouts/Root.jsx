import { Outlet } from "react-router-dom";
import Header from "../components/Shared/Header/Header";
import Footer from "../components/Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="md:max-w-6xl mx-8 md:mx-auto pl-8 md:py-6">
                <Header></Header>
                <Outlet></Outlet>
            </div>
           <div className="pl-16 md:pl-0">
            <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;