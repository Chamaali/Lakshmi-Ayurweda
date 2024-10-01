import Image from 'next/image'
import React from 'react'
import { Button, Container } from 'react-bootstrap'

export default function page() {
  return (
    <div id='1' className=''>
        <Container>
            <div className='flex flex-row'>
                <div className='basis-1/2'>

                <h1>hfkaskfh</h1>
                <p>fhskahfh</p>
                <Button variant="outline-success" href='./bookAppointment'>Book Appointment</Button>

                </div>
                <div className='basis-1/2'>

                    <Image alt='' src={require('/public/images/1.phoneConsultation.png')} />
                </div>
            </div>
        </Container>
        <div className="bg-teal-200 py-8">
            <Container>
            <p className='text-teal-700 text-lg font-serif text-center pb-2 pt-4'>Blood Circulatory System</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt animi provident, modi, laudantium incidunt aut nobis voluptate nisi autem dignissimos quae dolor reiciendis iste eum asperiores suscipit dolorum magni blanditiis.</p>
            </Container>
        </div>

        <div className='flex flex-row'>
            <div className='basis-1/2'>
                <h1>Steps to get Phone Consultation</h1>
                <Image src={require('/public/images/1.phoneConsultation.png')} alt='ddsd'/>
            </div>
            <div className='basis-1/2'>
                <ul>
                    <li><div>Call 011 222222222 and book appointment.</div></li>
                    <li>Video Link will be recieved by email.</li>
                    <li>Click on the link at the given time on the your date. </li>
                    <li>Meet Your Doctor</li>
                    <li>Get medicine at your door step.</li>
                </ul>

            </div>
        </div>
      
    </div>
  )
}



