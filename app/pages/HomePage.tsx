import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import HomeColumnOne from '../components/HomeColumnOne'
import HomeColumnTwo from '../components/HomeColumnTwo'
import HomeColumnThree from '../components/HomeColumnThree'
import HomeColumnFour from '../components/HomeColumnFour'
import HomeColumnFive from '../components/HomeColumnFive'
import HomeColumnSix from '../components/HomeColumnSix'
import HomeColumnSeven from '../components/HomeColumnSeven'
import Footer from '../components/Footer'




const HomePage= () => {
  return (
    <div>
        
        
            <NavigationBar />
            <HomeColumnOne/>
            <HomeColumnTwo />
            <HomeColumnThree />
            <HomeColumnFour />
            <HomeColumnFive />
            <HomeColumnSix />
            <HomeColumnSeven />
            <Footer />

        
        
    </div>
  )
}

export default HomePage