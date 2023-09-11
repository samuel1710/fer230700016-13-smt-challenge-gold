
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRoutes} from 'react-router'
import {routes} from './Routes'

const App = () => {
    
  return useRoutes(routes)


}

export default App

// function App() {
//   return (
//     <div>

   
//  <div className='customNavbar'>
//    <NavbarHeader/>
//    <SectionMobil/>
 
//  </div>
//  <SectionServices/>
//  <WhyUsSection/>
//  <TestimonialCarousel/>
//  <BannerSection/>
//  <FaqSection/>
//  <SectionFooter/>
// <SearchCarSection/>

//  </div>

//   )
// }



// export default App;
