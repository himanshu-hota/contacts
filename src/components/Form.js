import React from 'react';
import { useForm } from "react-hook-form";
const Form = ({submitFunction,data,children}) => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    return (<>
        <form className='w-full h-full' onSubmit={handleSubmit(submitFunction)}>
            <div className='w-full text-xl grid grid-cols-1 md:grid-cols-2'>
                <label htmlFor="name" >Name : </label>
                <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.name && 'border-solid border-[2px] border-red-600 '}`} id='name' placeholder='Please enter your name' defaultValue={data?.name || ''} {...register("name", { required: true })} />
            </div>
            <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>

                <label htmlFor="email">Email : </label>
                <input type="email" className={`outline-none p-1 my-1 rounded-md ${errors.email && 'border-solid border-[2px] border-red-600 '}`} id='email' placeholder='Please enter your email' defaultValue={data?.email || ''}  {...register("email", { required: true })} />


            </div>
            <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                <label htmlFor="phone">Phone : </label>
                <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.phone && 'border-solid border-[2px] border-red-600 '}`} id='phone' placeholder='Please enter your phone number' defaultValue={data?.phone || ''} {...register("phone", { required: true, maxLength: 20 })} />

            </div>
            <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                <label htmlFor="website">Website : </label>
                <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.website && 'border-solid border-[2px] border-red-600 '}`} id='website' placeholder='Please enter your website' defaultValue={data?.website || 'www.dash.com'}  {...register("website", { required: true })} />

            </div>
            <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                <label htmlFor="username">Username : </label>
                <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.username && 'border-solid border-[2px] border-red-600 '}`} id='username' placeholder='Please enter your username' defaultValue={data?.username || ''}  {...register("username", { required: true })} />

            </div>
            <div className='w-full py-2 text-xl grid grid-cols-1 md:grid-cols-2'>
                <label htmlFor="address">Address : </label>
                <div className="address grid grid-cols-3 gap-3" id='address'>

                    <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.street && 'border-solid border-[2px] border-red-600 '}`} id='street' placeholder='Enter street' defaultValue={data?.address?.street || ''}  {...register("street", { required: true, maxLength: 15 })} />


                    <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.city && 'border-solid border-[2px] border-red-600 '}`} id='city' placeholder='Enter city' defaultValue={data?.address?.city || ''}  {...register("city", { required: true, maxLength: 15 })} />

                    <input type="text" className={`outline-none p-1 my-1 rounded-md ${errors.zipcode && 'border-solid border-[2px] border-red-600 '}`} id='zip' placeholder='Enter zip' defaultValue={data?.address?.zipcode || ''}  {...register("zipcode", { required: true, maxLength: 10 })} />

                </div>

            </div>
            
                {children}
      
        </form>

    </>)
}

export default Form;