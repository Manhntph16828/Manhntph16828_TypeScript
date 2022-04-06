import React, {useEffect,useState} from 'react'
import {useForm,SubmitHandler} from "react-hook-form"
import  {useNavigate,useParams} from "react-router-dom"
import {read} from "../api/product"
import { ProductType } from './types/product'

type ProductEditProps = {
    onUpdate : (product: ProductType) => void
}
type  FormInput = {
    name:string,
    price: number
} 
const ProductEdit = (props: ProductEditProps) => {
    const {register, handleSubmit ,formState:{errors},reset}= useForm<FormInput>();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        const getProduct = async () =>{
            const {data} = await read(id);
            // console.log(data);
            reset(data)
        }
        getProduct();
    })

    const onSubmit : SubmitHandler<FormInput> = data => {
       props.onUpdate(data);
       navigate("api/admin/product")
        
    }
  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name',{required:true})}/>
        {errors.name && <span>Trống</span>}
        <input type="number" {...register('price')}/>
        <button>Update</button>
    </form>
  )
}

export default ProductEdit