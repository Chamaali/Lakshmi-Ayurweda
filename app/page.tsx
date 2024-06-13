import HomeColumnTwo from './components/home/HomeColumnTwo'
import HomeColumnFour from './components/home/HomeColumnFour'
import HomeColumnThree from './components/home/HomeColumnThree'
import HomeColumnFive from './components/home/HomeColumnFive'
// import HomeColumnSix from './components/home/HomeColumnSix'
import HomeColumnSeven from './components/home/HomeColumnSeven'
import HomeColumnOne from './components/home/HomeColumnOne'

const HomePage= () => {
  return (
    <div className=''>    
        <HomeColumnOne/>
        <HomeColumnTwo />
        <HomeColumnThree />
        <HomeColumnFour />
        
        {/* <HomeColumnFive /> */}
        <HomeColumnSeven />    
    </div>
  )
}

export default HomePage