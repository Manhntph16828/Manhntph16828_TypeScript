import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from './types/product';
import { useNavigate } from 'react-router-dom';
import { CategoriesType } from './types/category';
import { listCate } from '../api/category';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number,
    img?: string,
    desc: string,
    categoryPro: string
}
const ProductAdd = (props: ProductAddProps) => {
    const [categories, setCategories] = useState<CategoriesType[]>([])
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    
    const navigate = useNavigate();
    useEffect(() => {
        const getCategoryPro = async () => {
          const { data } = await listCate();
          setCategories(data)
        }
        getCategoryPro();
      }, [])
    
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
            <div className="grid grid-cols-2 gap-5">
              {/* <div className="m-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Image
                </label>
                <div className="mb-3">
                  <input
                    {...register('img', { required: true })}
                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    type="file"
                    id="img-product" />
                </div>
              </div> */}
              <div className="m-full mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Category Name
                </label>
                <select
                  {...register('categoryPro', { required: true })}
                  className="selected-cate form-select appearance-none block 
                                            w-full
                                            px-3
                                            py-[4px]
                                            text-base
                                            font-normal
                                            text-gray-700
                                            bg-white bg-clip-padding bg-no-repeat
                                            border border-solid border-gray-300
                                            rounded
                                            transition
                                            ease-in-out
                                            m-0
                                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example">
                  {categories?.map((item) => {
                    return <option className="" value={item._id}>{item.name}</option>
                  })}
                </select>
              </div>
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