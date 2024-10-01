import { Link } from 'react-router-dom';
import registerImg from '../../assets/registerImg.jpg';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
   

    const { register, handleSubmit,  formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data;
        createUser(email, password)
            .then(result => {
                console.log(result);
                toast.success('User Created Successfully');
            })
            .catch(error => {
                console.error(error);
                toast.warning(error.message);
            })

    }
    const passwordValidation = (value) => {
        if (value.length < 6) {
            return toast.error('Password must be at least 6 characters or longer');
        }
        else if (!/[A-Z]/.test(value)) {
            return toast.error('Password must contain at least one uppercase letter');
        }
        else if (!/[a-z]/.test(value)) {
            return toast.error('Password must contain at least one lowercase letter');
        }
        return true;
    };
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col md:flex-row">

                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold text-center mb-6">Register Here!</h1>
                    <img src={registerImg} alt="" className="mt-12" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body mt-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" placeholder="Enter Name" className="input input-bordered"
                                {...register("name", { required: true })} />
                            {errors.name && <span className='text-red-600 mt-2 text-md'>This name field is required</span>}
                        </div>
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
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" placeholder="PhotoURL" className="input input-bordered"
                                {...register("photo")} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" className="input input-bordered"
                                {...register("password", { required: true, validate: passwordValidation })} />
                            {errors.password && <span className='text-red-600 mt-2 text-md'>This password field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">REGISTER</button>
                        </div>
                    </form>
                    <div className='mx-4 text-center mb-2'>
                        <p className='text-orange-700'>Already have an account. Please <Link to="/login"
                            className='text-blue-900 text-md font-semibold'>LOGIN</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;