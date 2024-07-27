// import axios from 'axios'
// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Outlet, useLocation, useNavigate } from 'react-router-dom'
// import { logout, setUser } from '../redux/userSlice'
// import Sidebar from '../component/Sidebar'
// import logo from "../assets/logo.png"
// import io from "socket.io-client"
// const Home = () => {
//     const user=useSelector(state=>state.user)
//     const dispatch=useDispatch()
//     const navigate=useNavigate()
//     const location = useLocation()
//     console.log("redux user",user)
//     const fetchUserDetails=async ()=>{
//         try {
//             const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
//             const response=await axios({
//                 url:URL,
//                 withCredentials:true
//             })
//             dispatch(setUser(response.data.data))
//             if(response.data.logout){
//                 dispatch(logout())
//                 navigate("/email")
//             }
//             console.log("current user details",response)
//         } catch (error) {
//            console.log("error",error) 
//         }
//     }
//     useEffect(()=>{
//         fetchUserDetails()
//     },[])
//     // socket coonection
//     useEffect(()=>{
//       const socketConnection = io(process.env.REACT_APP_BACKEND_URL,{
//         auth : {
//           token : localStorage.getItem('token')
//         },
//       })
  
//       socketConnection.on('onlineUser',(data)=>{
//         console.log(data)
//         // dispatch(setOnlineUser(data))
//       })
  
//       // dispatch(setSocketConnection(socketConnection))
  
//       return ()=>{
//         socketConnection.disconnect()
//       }
//     },[])
//     console.log("location",location)
//      const basePath = location.pathname === '/'
//   return (
//     <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
//       {/* Home */}
//       <section  className={`bg-white ${!basePath && "hidden"} lg:block`}>
//         <Sidebar/>
//       </section>

//       <section className={`${basePath && "hidden"}`}>
//         <Outlet/>
//       </section>


//       <div className={`justify-center items-center flex-col gap-2 hidden ${!basePath ? "hidden" : "lg:flex" }`}>
//         <div>
//           <img src={logo } alt='logo pic not found' width={200}/>
//         </div>
//         <p className='text-lg mt-2 text-slate-500'>Select user to send mssg</p>
//       </div>

//     </div>
//   )
// }

// export default Home
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { logout, setUser,setonlineUser,setSocketConnection } from '../redux/userSlice';
import Sidebar from '../component/Sidebar';
import logo from "../assets/logo.png";
import io from "socket.io-client";

const Home = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("redux user", user);
console.log("user",user)
  const fetchUserDetails = async () => {
    try {
      const URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`;
      const response = await axios({
        url: URL,
        withCredentials: true
      });
      dispatch(setUser(response.data.data));
      if (response.data.logout) {
        dispatch(logout());
        navigate("/email");
      }
      console.log("current user details", response);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  // socket connection
  useEffect(() => {
    const socketConnection = io(process.env.REACT_APP_BACKEND_URL, {
      auth: {
        token: localStorage.getItem('token')
      },
    });

    socketConnection.on('onlineUser', (data) => {
      console.log("Online users:", data);
     
      dispatch(setonlineUser(data))
    });
    dispatch(setSocketConnection( socketConnection))
    return () => {
      socketConnection.disconnect();
    };
  }, []);

  console.log("location", location);
  const isBasePath = location.pathname === '/';

  return (
    <div className='grid lg:grid-cols-[300px,1fr] h-screen max-h-screen'>
      <section className={`bg-white ${!isBasePath && "hidden"} lg:block`}>
        <Sidebar />
      </section>
      <section className={`${isBasePath && "hidden"}`}>
        <Outlet />
      </section>
      <div className={`justify-center items-center flex-col gap-2 hidden ${!isBasePath ? "hidden" : "lg:flex"}`}>
        <div>
          <img src={logo} alt='logo pic not found' width={200} />
        </div>
        <p className='text-lg mt-2 text-slate-500'>Select user to send message</p>
      </div>
    </div>
  );
};

export default Home;
