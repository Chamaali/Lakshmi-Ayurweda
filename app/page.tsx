import HomeColumnTwo from './components/home/HomeColumnTwo'
import HomeColumnFour from './components/home/HomeColumnFour'
import HomeColumnThree from './components/home/HomeColumnThree'
import HomeColumnSeven from './components/home/HomeColumnSeven'
import HomeColumnOne from './components/home/HomeColumnOne'
import { HomeColumnFive } from './components/home/HomeColumnFive'



const HomePage= () => {
  return (
    <div className=''>    
        <HomeColumnOne/>
        <HomeColumnTwo />
        <HomeColumnThree />
        <HomeColumnFour />
        {/* <HomeColumnFive /> */}
       
        {/* <HomeColumnSeven />     */}
    </div>
  )
}

export default HomePage