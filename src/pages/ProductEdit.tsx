import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams} from 'react-router-dom';
import { read } from '../api/product';
import { ProductType } from './types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}
const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: {errors}, reset} = useForm<FormInputs>();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            reset(data)
        }
        getProduct();
    }, [])

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data);
        navigate('/admin/product')
    }
  return (
    // <form action="" onSubmit={handleSubmit(onSubmit)}>
    //     <input type="text" {...register('name', { required: true})} />
    //     { errors.name && <span>Fields is required</span>}
    //     <input type="number" {...register('price')} />
    //     <button>Update</button>
    // </form>

    <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Sửa sản phẩm</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-6">
            <div>
                <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
                <input type="text"  {...register('name', {required: true})} id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  />
                { errors.name && <span>Fields is required</span>}
            </div>
    
            <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
            <input type="text" {...register('price')} id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  />
            </div>
        </div>
    
        <div className="space-x-4 mt-8">
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Sửa</button>
        </div>
        </form>
    </div>
  )
}

export default ProductEdit