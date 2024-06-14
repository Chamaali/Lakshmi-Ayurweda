"use client"
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, CardFooter, CardGroup } from 'react-bootstrap'
import doctors from "@/app/constants/doctors";




const HomeColumnSeven = () => {
  return (
    <div className='bg-gray-100'>
        <div>
            <p className='text-green-700 font-bold text-xl text-center font-serif p-4'>Our Doctors</p>
        </div>
        <div className='p-2'>
            <CardGroup className=' border-none'>
                {doctors.map((doctor, index) =>(
                    // eslint-disable-next-line react/jsx-key
                    <Card className='mx-3' key={doctor.id}>
                        <CardBody>
                            <Image src={doctor.photo} alt="ss" width={200} height={200}/>
                        </CardBody>
                        <CardFooter>
                            <p>{doctor.name}</p>
                        </CardFooter>
                    </Card>
                    ))}
            </CardGroup>
        </div>
    </div>
  )
}

export default HomeColumnSeven