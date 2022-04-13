import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type FormInputs = {
    name: string,
    email: string,
    password: string | number
}
const Signup = () => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        signup(data);
        navigate("/signin");
    }
  return (
    // <form action="" onSubmit={handleSubmit(onSubmit)}>
    //     <input type="text" {...register('name', {required: true})}/>
    //     <input type="text" {...register('email', {required: true})}/>
    //     <input type="number"{...register('password', {required: true})} />
    //     <button>Đăng ký</button>
    // </form>
    <form action="" onSubmit={handleSubmit(onSubmit)} className='border-green-500	w-auto'>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
            <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        
                        placeholder="Name" {...register('name', {required: true})}/>

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        {...register('email', {required: true})}
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        {...register('password', {required: true})} 
                        placeholder="Password" />
                    

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-teal-500 text-white hover:bg-green-dark focus:outline-none my-1"
                    >Create Account</button>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <NavLink className="no-underline border-b border-blue text-blue" to="/signin">
                        Log in
                    </NavLink>.
                </div>
            </div>
        </div>
        </form>
  )
}

export default Signup