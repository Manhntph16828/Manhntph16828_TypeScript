import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';
import { ProductType } from './types/product';
import { NavLink, useNavigate } from 'react-router-dom';

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
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name', {required: true})}/>
        <input type="number"{...register('price')} />
        <button>Add</button>
        <NavLink to="/admin/product">Quay lại</NavLink>
    </form>
  )
}

export default ProductAdd