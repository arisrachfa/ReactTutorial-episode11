import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValidation = () => {
  // membuat schema untuk settings form validation menggunakan YUP
  const schema = yup.object().shape({
    fullName: yup.string().required("Full Name is Required"),
    email: yup.string().email().required(),
    age: yup.number().integer().positive().min(18).required(),
    password: yup.string().min(4).max(20).required(),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Password is not match").required(),
  });

  // membuat objek form dari libraries react-hook-form
  // dan membuat objek error ketika user menginputkan value kedalam schema form yang telah dibuat   
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  });

  // membuat func ketika data di submit
  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="Full Name..." {...register("fullName")} />
        <p className='errorMessage'>{errors.fullName?.message}</p>

        <input type="text" placeholder="Email..." {...register("email")} />
        <p className='errorMessage'>{errors.email?.message}</p>

        <input type="number" placeholder="Age..." {...register("age")} />
        <p className='errorMessage'>{errors.age?.message}</p>

        <input 
          type="password" 
          placeholder="Password..." 
          {...register("password")} 
        />
        <p className='errorMessage'>{errors.password?.message}</p>

        <input 
          type="password" 
          placeholder="Confirm Password..." 
          {...register("confirmPassword")}
        />
        <p className='errorMessage'>{errors.confirmPassword?.message}</p>
        <input type="submit" />
    </form>
  )
}

export default FormValidation