// // import React from 'react'
// import React, { useEffect, useState } from 'react';

// import { Link, useLocation, useNavigate } from 'react-router-dom';

// import axios from 'axios';
// import toast from "react-hot-toast"
// // import { FaCircleUser } from "react-icons/fa6";
// import Avatar from '../component/Avatar';
// const CheckPasswordPage = () => {
//     const [data,setdata]=useState({
      
//         password:"",
       
//     })
   
//     const navigate=useNavigate()
//     const location=useLocation()
//     console.log("location",location.state)

//     useEffect(()=>{
// if(!location?.state?.name){
//     navigate("/email")
// }
//     },[])
//     const handleOnChange=(e)=>{
// const {name,value}=e.target
// setdata((preve)=>{
//     return {
// ...preve,
// [name]:value
//     }
// })
//     }




//     const handleSubmit=async(e)=>{
// e.preventDefault()
// e.stopPropagation()
// const URL=`${process.env.REACT_APP_BACKEND_URL}/api/password`
// console.log(URL)
// try {
//     const response= await axios.post(URL,data)
//     console.log("responce",response)
//     toast.success(response.data.message)
//     if(response.data.success){
//         setdata({
          
//             password:"",
           
//         })
//         navigate("/")
//     }
// } catch (error) {
//     toast.error(error?.response?.data?.message)
   
// }
// // console.log("data",data)
//     }
//   return (
//     <div className='mt-5'>
//     <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>
// <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
// {/* <FaCircleUser
// size={80}/> */}
// <Avatar width={70}
// name={location?.state?.name}
// ImageUrl={location?.state?.profile_pic}
// height={70}/>
// <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
// </div>

//       <h3 >
//         Welcome to chat app!
//       </h3>
//       <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
    
//           {/* //2pas */}
//           <div className='flex flex-col gap-1'>
//               <label htmlFor='password'>
//                   password:
//               </label>
//               <input type="password" id="password" name="password" placeholder='enter your password' className='bg-slate-100 px-2 py-1 focus:outline-primary' value={data.password} onChange={handleOnChange} required/>
//           </div>

         
        
//           <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-3 font-bold text-white leading-relaxed tracking-wide'>
//           Login
//         </button>

//       </form>
//       <p className='my-3 text-center'> <Link to={"/register"} className='hover:text-primary font-semibold'>Forgot passowrd ?</Link></p>
//     </div>
//   </div>
//   )
// }

// export default CheckPasswordPage


// 2 code

// import React, { useEffect, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from "react-hot-toast";
// import Avatar from '../component/Avatar';

// const CheckPasswordPage = () => {
//     const [data, setData] = useState({
//         password: "",
//     });

//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log("location", location.state);

//     useEffect(() => {
//         if (!location?.state?.name) {
//             navigate("/email");
//         }
//     }, [location, navigate]);

//     const handleOnChange = (e) => {
//         const { name, value } = e.target;
//         setData((prev) => ({
//             ...prev,
//             [name]: value
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         e.stopPropagation();
//         const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`;
//         console.log(URL);
//         try {
//             const response = await axios.post(URL, data);
//             console.log("response", response);
//             toast.success(response.data.message);
//             if (response.data.success) {
//                 setData({
//                     password: "",
//                 });
//                 navigate("/");
//             }
//         } catch (error) {
//             toast.error(error?.response?.data?.message);
//         }
//     };

//     return (
//         <div className='mt-5'>
//             <div className='bg-white w-full max-w-md rounded overflow-hidden p-4 mx-auto'>
//                 <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
//                     <Avatar
//                         width={70}
//                         name={location?.state?.name}
//                         ImageUrl={location?.state?.profile_pic}
//                         height={70}
//                     />
//                     <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
//                 </div>
//                 <h3>Welcome to chat app!</h3>
//                 <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
//                     <div className='flex flex-col gap-1'>
//                         <label htmlFor='password'>Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             name="password"
//                             placeholder='Enter your password'
//                             className='bg-slate-100 px-2 py-1 focus:outline-primary'
//                             value={data.password}
//                             onChange={handleOnChange}
//                             required
//                         />
//                     </div>
//                     <button className='bg-primary text-lg px-4 py-1 hover:bg-secondary rounded mt-3 font-bold text-white leading-relaxed tracking-wide'>
//                         Login
//                     </button>
//                 </form>
//                 <p className='my-3 text-center'>
//                     <Link to={"/forgot-password"} className='hover:text-primary font-semibold'>
//                         Forgot password?
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default CheckPasswordPage;



import React, { useEffect, useState } from 'react'
// import { IoClose } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import uploadFile from '../helpers/uploadFile';
import axios from 'axios'
import toast from 'react-hot-toast';
// import { PiUserCircle } from "react-icons/pi";
import Avatar from "../component/Avatar";
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';

const CheckPasswordPage = () => {
  const [data,setData] = useState({
    password : "",
    userId : ""
  })
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!location?.state?.name){
      navigate('/email')
    }
  },[location, navigate])

  const handleOnChange = (e)=>{
    const { name, value} = e.target

    setData((preve)=>{
      return{
          ...preve,
          [name] : value
      }
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    e.stopPropagation()

    const URL = `${process.env.REACT_APP_BACKEND_URL}/api/password`

    try {
        const response = await axios({
          method :'post',
          url : URL,
          data : {
            userId : location?.state?._id,
            password : data.password
          },
          withCredentials : true
        })

        toast.success(response.data.message)

        if(response.data.success){
            dispatch(setToken(response?.data?.token))
            localStorage.setItem('token',response?.data?.token)
            

            setData({
              password : "",
            })
            navigate('/')
        }
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
  }


  return (
    <div className='mt-5'>
        <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>

            <div className='w-fit mx-auto mb-2 flex justify-center items-center flex-col'>
                {/* <PiUserCircle
                  size={80}
                /> */}
                <Avatar
                  width={70}
                  height={70}
                  name={location?.state?.name}
                  imageUrl={location?.state?.profile_pic}
                />
                <h2 className='font-semibold text-lg mt-1'>{location?.state?.name}</h2>
            </div>

          <form className='grid gap-4 mt-3' onSubmit={handleSubmit}>
              

          <div className='flex flex-col gap-1'>
                <label htmlFor='password'>Password :</label>
                <input
                  type='password'
                  id='password'
                  name='password'
                  placeholder='enter your password' 
                  className='bg-slate-100 px-2 py-1 focus:outline-primary'
                  value={data.password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button
               className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
              >
                Login
              </button>

          </form>

          <p className='my-3 text-center'><Link to={"/forgot-password"} className='hover:text-primary font-semibold'>Forgot password ?</Link></p>
        </div>
    </div>
  )
}

export default CheckPasswordPage
