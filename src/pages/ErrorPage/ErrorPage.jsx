import { useRouteError } from "react-router-dom";
import 'animate.css';
import { BsEmojiFrown } from "react-icons/bs";


const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div className="max-w-7xl mx-auto text-center my-20">
            <h1 className="text-4xl font-bold animate__animated animate__bounce  animate__delay-2s
              bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500 bg-clip-text text-transparent">Ooppss!!!</h1>
            <p className="text-2xl font-semibold text-yellow-800 my-4">Sorry, an unexpected error has occurred.</p>
            <p className="text-2xl font-semibold text-red-600 my-4">
              <i>{error.statusText || error.message}</i>
            </p>
             <div className="flex justify-center items-center">
              <BsEmojiFrown className="text-3xl text-yellow-400"/>
             </div>
        </div>
    );
};

export default ErrorPage;