import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from './types/product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    desc: string
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }
  return (
    <div className="p-8 rounded border border-gray-200">
        <h1 className="font-medium text-3xl">Thêm sản phẩm</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 space-y-6">
            <div>
            <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
            <input type="text"  {...register('name', {required: true})} id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  />
            </div>
            <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>
            <input type="text" {...register('price')} id="price" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  />
            </div>
            <div>
            <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Mô tả</label>
            <input type="text" {...register('desc')} id="desc" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"  />
            </div>
        </div>
    
        <div className="space-x-4 mt-8">
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50">Thêm</button>
        </div>
        </form>
    </div>
  )
}

export default ProductAdd