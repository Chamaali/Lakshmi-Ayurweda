
import Image from 'next/image'
import NavigationBar from '../components/NavigationBar'
import HomeColumnOne from '../components/HomeColumnOne'
import HomeColumnTwo from '../components/HomeColumnTwo'


const HomePage= () => {
  return (
    <div>
        
        
            <NavigationBar />
            <HomeColumnOne/>
            <HomeColumnTwo />
        
        
    </div>
  )
}

export default HomePage