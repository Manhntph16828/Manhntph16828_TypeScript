import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from './types/product';
import { useNavigate } from 'react-router-dom';

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState} = useForm<FormInputs>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onAdd(data);
        navigate('/admin/product')
    }
  return (
      <div>
         <h1>Thêm sản phẩm</h1>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <label>Tên sản phẩm</label><br/>
            <input style={{width:'500px'}} type="text" {...register('name', {required: true})}/><br/>
            <label>Gía</label><br/>
            <input style={{width:'500px'}}  type="number"{...register('price')} /><br/>
            <button style={{background:'green'}}>Thêm sản phẩm</button>
            
        </form>
      </div>
     
  )
}

export default ProductAdd