import React from 'react'
import {useForm} from 'react-hook-form'

const FormBasic = () => {
  // membuat objek form dari libraries react hook form
  const {register, handleSubmit} = useForm();

  // membuat func ketika data di submit
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..." {...register("fullName")} />
        <input type="text" placeholder="Email..." {...register("email")} />
        <input type="number" placeholder="Age..." {...register("age")} />
        <input 
          type="password" 
          placeholder="Password..." 
          {...register("password")} 
        />
        <input 
          type="password" 
          placeholder="Confirm Password..." 
          {...register("confirmPassword")}
        />
        <input type="submit" />
    </form>
  )
}

export default FormBasic