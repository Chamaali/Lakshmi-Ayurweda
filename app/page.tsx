import HomeColumnTwo from './components/home/HomeColumnTwo'
import HomeColumnFour from './components/home/HomeColumnFour'
import HomeColumnThree from './components/home/HomeColumnThree'
import HomeColumnSeven from './components/home/HomeColumnSeven'
import HomeColumnOne from './components/home/HomeColumnOne'
import { HomeColumnFive } from './components/home/HomeColumnFive'
import Profile from './profile/page'




const HomePage= () => {
  return (
    <div className=''>    
        <HomeColumnOne/>
        <HomeColumnTwo />
        <HomeColumnThree />
        <HomeColumnFour />
        {/* <Profile/> */}
        {/* <HomeColumnFive /> */}
       
        {/* <HomeColumnSeven />     */}
    </div>
  )
}

export default HomePage