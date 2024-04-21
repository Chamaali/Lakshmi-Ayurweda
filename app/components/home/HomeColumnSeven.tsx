"use client"
import Image from 'next/image'
import React from 'react'
import { Card, CardBody, CardFooter, CardGroup } from 'react-bootstrap'


const doctors =[
    {
        name: "Dr.S. Priyantha",
        id: 1,
        photo: require('/public/images/call.png')
    },
    {
        name: "Dr. N. Kamal",
        id: 2,
        photo: require('/public/images/call.png')
    },
    {
        name: "Dr. R. Saman",
        id: 3,
        photo: require('/public/images/call.png')
    },
    {
        name: "Dr.S. Priyantha",
        id: 4,
        photo: require('/public/images/call.png')
    },
    {
        name: "Dr.S. Priyantha",
        id: 4,
        photo: require('/public/images/call.png')
    },
]


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
                    <Card className='p-2' key={doctor.id}>
                        <CardBody>
                            <Image src={doctor.photo} alt=""/>
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