import React from 'react'
import { useForm } from 'react-hook-form';
import './Sign.css';

function Sign() {
  
    
        const {
    register,
    handleSubmit,
    formState:{errors}
  }=useForm();
  const onSubmit=(data)=>{
    console.log(data);
  }
 
  return (
    <>
    
   
    
    
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex justify-content-between'>
        <div className='form-group mb-3 name'>
          <label>Name</label>
          <input type="text" className='form-control' name='name' {...register("name",{
            required:true,
            
          })} />
          {errors.name && errors.name.type === "required"
          &&(<p className="errorMsg text-danger">Name required.</p>)
          }
          
        </div>
        <div className='form-group mb-3'>
          <label>Last Name</label>
          <input type="text" className='form-control' name='lname' {...register("lname",{
            required:true,
            
          })} />
          {errors.lname && errors.lname.type === "required"
          &&(<p className="errorMsg text-danger">Name required.</p>)
          }
          
        </div>
        </div>
        <div className='form-group mb-3'>
          <label>Email</label>
          <input type="text" className='form-control' name='email' {...register("email",{
            required:true,
            pattern:/^[^@]+@[^@]+\.[^@ .]{2,}$/
          })} />
          {errors.email && errors.email.type === "required"
          &&(<p className="errorMsg text-danger">Email required.</p>)
          }
          {errors.email && errors.email.type === "pattern"
          &&(<p className="errorMsg text-danger">Email is no valid.</p>)
          }
        </div>
        <div className='form-group mb-3'>
          <label>Password</label>
          <input type="password" className='form-control' name='password'{...register("password",{
            required:true,
            minLength:6
          })} />
          {errors.password && errors.password.type === "required"
          &&(<p className="errorMsg text-danger">password required.</p>)
          }
          {errors.password && errors.password.type === "minLangth"
          &&(<p className="errorMsg text-danger">password shold be at-last 6 caracter.</p>)
          }
        </div>
        <div className='form-group mb-3'>
          <label>Conferm Password</label>
          <input type="password" className='form-control' name='password2'{...register("password2",{
            required:true,
            minLength:6
          })} />
          {errors.password2 && errors.password2.type === "required"
          &&(<p className="errorMsg text-danger">password required.</p>)
          }
          {errors.password2 && errors.password2.type === "minLangth"
          &&(<p className="errorMsg text-danger">password shold be at-last 6 caracter.</p>)
          }
        </div>
        <div className='text-center'>
          
          <button type='submit' className='btn btn-warning'>Register</button>
        </div>
      </form>
    
    </>
  );
    
 
}

export default Sign