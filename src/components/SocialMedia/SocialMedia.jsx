import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const SocialMedia = () => {
    const {  googleLogin,  githubLogin } = useContext(AuthContext);

    const handleSocialLogin = socialLogin => {
        socialLogin()
        .then(result => {
            console.log(result.user);
            toast.success('User Logged In Successfully');
        })
        //.catch(error => {
           // console.error(error);
        //})
    }
    return (
        <div className='md:flex pb-4 pl-2'>
            <button onClick={() => handleSocialLogin(googleLogin)}
            className="btn bg-sky-300">
                <FcGoogle className='text-xl' />
                <p className='text-white'> Login With Google</p>
            </button>
            <button onClick={() => handleSocialLogin(githubLogin)}
            className="btn bg-sky-300">
                <FaGithub className='text-xl' />
                <p className='text-white'>Login With Github</p>
            </button>
        </div>
    );
};

export default SocialMedia;