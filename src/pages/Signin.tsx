import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signin } from "../api/auth";
import { useNavigate } from 'react-router-dom';

type Props = {};

type InputForm = {
    email: string;
    password: string;
};
 

const SignIn = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm<InputForm>();
    const onSubmit: SubmitHandler<InputForm> = async (data : InputForm) => {        
        const { data: user } = await signin(data);       
        if(user.user.status === "active"){
            if(user.user.role == "0"){
                // admin ở đây
                navigate('/admin/dashboard')
            }else{
                // user
                navigate('/')
            }
            localStorage.setItem("token", user.accessToken);
        }else{
          
            alert('Tài khoản của bạn bị khóa')
        }
        
    };
    return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" >
            <div className="max-w-md w-full space-y-8">
                <div>
                    <img
                        className="mx-auto h-12 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                    />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <a
                            href="#"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            {" "}
                            start your 14-day free trial{" "}
                        </a>
                    </p>
                </div>
                <form className="mt-8 space-y-6 " onSubmit={handleSubmit(onSubmit)}>
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">
                                Email address
                            </label>
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Password
                            </label>
                            <input
                                type="password"
                                {...register("password", { required: true })}
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label
                                htmlFor="remember-me"
                                className="ml-2 block text-sm text-gray-900"
                            >
                                {" "}
                                Remember me{" "}
                            </label>
                        </div>
                        <div className="text-sm">
                            <a
                                href="#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {" "}
                                Forgot your password?{" "}
                            </a>
                        </div>
                    </div>
                    <div>
                        <a
                            href="/signup"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                            {" "}
                            I don't have account!{" "}
                        </a>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* Heroicon name: solid/lock-closed */}
                                <svg
                                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;