import { useForm } from 'react-hook-form';
import loginImg from '../../assets/loginImg.jpg';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import SocialMedia from '../../components/SocialMedia/SocialMedia';

const Login = () => {
    const { signInUser,  googleLogin } = useContext(AuthContext);

    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('User Logged In Successfully');
            })
            .catch(error => {
                console.error(error);
                toast.warning(error.message);
            })

    }
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col md:flex-row">

                <div className="text-center lg:text-left">
                   
                    <img src={loginImg} alt="" className="mt-12" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body mt-10 p-4">
                    <h1 className="text-2xl font-bold text-center mb-6">Please Login Now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Email" className="input input-bordered"
                                {...register("email", { required: true })} />
                            {errors.email && <span className='text-red-600 mt-2 text-md'>This email field is required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true })} />
                            {errors.password && <span className='text-red-600 mt-2 text-md'>This password field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">LOGIN</button>
                        </div>
                    </form>
                    <SocialMedia></SocialMedia>
                    <div className='mx-4 text-center mb-2'>
                        <p className='text-orange-700'>Do not have an account?. Please <Link to="/register"
                            className='text-blue-900 text-md font-semibold'>REGISTER</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;