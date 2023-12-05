// import React from 'react'
import NavigationBar from '../components/NavigationBar'
import DiseasesRowOne from '../components/DiseasesRowOne'
import DiseasesRowTwo from '../components/DiseasesRowTwo'
import Footer from '../components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';



const DiseasePage = () => {
  return (
    <div>
             <NavigationBar />
            <DiseasesRowOne />
            <DiseasesRowTwo />
            <Footer />
        
    </div>
  )
}

export default DiseasePage