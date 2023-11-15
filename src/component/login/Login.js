import { useForm } from 'react-hook-form';
import './Login.css';



function Login(props) {
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
          <input type="text" className='form-control' name='password'{...register("password",{
            required:true,
            minLength:6
          })} />
          {errors.email && errors.email.type === "required"
          &&(<p className="errorMsg text-danger">password required.</p>)
          }
          {errors.email && errors.email.type === "minLangth"
          &&(<p className="errorMsg text-danger">password shold be at-last 6 caracter.</p>)
          }
        </div>
        <div className='text-center'>
          
          <button type='submit' className='btn btn-warning'>Login</button>
        </div>
      </form>
    
    </>
  );
}

export default Login;
