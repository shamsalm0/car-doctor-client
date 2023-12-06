import {  createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main/Main'
import Home from '../pages/Home/Home/Home'
import LogIn from '../pages/LogIn/LogIn'
import SignUp from '../pages/SignUp/SignUp'
import CheckOut from '../pages/CheckOut/CheckOut'
import Bookings from '../pages/Bookings/Bookings'
import PrivateRoute from './PrivateRoute'
const router=createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:
        [
            {
            path:'/',
            element:<Home></Home>
            },
            {
              path:'/login',
              element:<LogIn></LogIn>
            },
            {
              path:'/signup',
              element:<SignUp></SignUp>
            },
            {
              path:'/checkout/:id',
              element:<CheckOut></CheckOut>,
              loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
              path:'/bookings',
              element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            }
        ]
      
    }
  ])

  export default router