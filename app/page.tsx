import HomeColumnTwo from './components/home/HomeColumnTwo'
import HomeColumnFour from './components/home/HomeColumnFour'
import HomeColumnThree from './components/home/HomeColumnThree'
// import HomeColumnFive from './components/home/HomeColumnFive'
// import HomeColumnSix from './components/home/HomeColumnSix'
import HomeColumnSeven from './components/home/HomeColumnSeven'
import HomeColumnOne from './components/home/HomeColumnOne'
// import HomeColumnFive from './components/home/HomeColumnFive'
// import { GetAllProducts } from './serverComponents/products/GetAllProducts'
// import { GetAllDoctors } from './serverComponents/products/GetAllDoctors'
// import HomeColumnFive from './components/home/HomeColumnFive'
// import HomeColumnFive from './serverComponents/products/GetAllProducts'
// import HomeColumnFive from './components/home/HomeColumnFive'
// import { HomeColumnFive } from './components/home/App'
// import HomeColumnFive from './components/home/HomeColumnFive'




const HomePage= () => {
  return (
    <div className=''>    
        <HomeColumnOne/>
        <HomeColumnTwo />
        <HomeColumnThree />
        <HomeColumnFour />
        {/* <HomeColumnFive /> */}
        {/* <HomeColumnFive /> */}
        {/* <GetAllProducts/> */}
        {/* <GetAllDoctors /> */}
       
        <HomeColumnSeven />    
    </div>
  )
}

export default HomePage