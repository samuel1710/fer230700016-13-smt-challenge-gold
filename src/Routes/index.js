import {Navigate} from 'react-router'
import LandingPage from '../pages/LandingPage'
import SearchPage from '../pages/SearchPage'

const routes = [

    {
      
        path:'',
        element: <Navigate to = '/landingPage' />


    },

{
    path:'/landingPage',
    element: <LandingPage/>

    
},

{
    
    path:'/searchPage',
    element: <SearchPage/>

}
] 

export  {routes} 