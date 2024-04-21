'use client'

import Image from 'next/image'
import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import bg from '/public/images/whyLakshmiBG.jpg'

const options = [
    {   
        name: 'Colombo',
        id:1,
    }, 
    {   
        name: 'Gampaha',
        id:2,
    },
    {   
        name: 'Kalutara',
        id:3,
    },
    {   
        name: 'Kandy',
        id:4,
    },
    {   
        name: 'Matale',
        id:5,
    },
    {   
        name: 'Nuwara Eliya',
        id:6,
    },
    {   
        name: 'Galle',
        id:7,
    },
    {   
        name: 'Matara',
        id:8,
    },
    {   
        name: 'Hambantota',
        id:9,
    },
    {   
        name: 'Jaffna',
        id:10,
    },
    {   
        name: 'Kilinochchi',
        id:11,
    },
    {   
        name: 'Mannar',
        id:12,
    },
    {   
        name: 'Vavuniya',
        id:13,
    },
    {   
        name: 'Mullaitivu',
        id:14,
    },
    {   
        name: 'Batticaloa',
        id:15,
    },
    {   
        name: 'Ampara',
        id:16,
    },
    {   
        name: 'Trincomalee',
        id:17,
    },
    {   
        name: 'Kurunegala',
        id:18,
    },
    {   
        name: 'Puttalam',
        id:19,
    },
    {   
        name: 'Anuradhapura',
        id:20,
    },
    {   
        name: 'Polonnaruwa',
        id:21,
    },
    {   
        name: 'Badulla',
        id:22,
    },
    {   
        name: 'Monaragala',
        id:23,
    },
    {   
        name: 'Ratnapura',
        id:24,
    },
    {   
        name: 'Kegalle',
        id:25,
    }
];

export default function page() {
  return (
    <div id='1' className=''>
        <div  style={{backgroundImage: `url(${bg.src})`, }} className="bg-[length:auto_713px]" >
            <Container>
                <div className='p-6 flex flex-row'>
                    <div className='p-5 basis-1/3 bg-white rounded-lg shadow-lg'>
                        <h3>Steps</h3>
                        <ol>
                            <li className='my-4'><div className='bg-green-200 p-2 rounded shadow-sm'>1.Find Your Nearest Clinic</div></li>
                            <li className='my-4'><div className='bg-green-200 p-2 rounded shadow-sm'>2.Book your Appointment</div></li>
                            <li className='my-4'><div className='bg-green-200 p-2 rounded shadow-sm'>3.You will recieve a call</div></li>
                        </ol>
                    </div>
                    
                </div>
            </Container>
        </div>

        <div>
            <Container>
                <div>
                    <h3 className='p-3'>Find Your Nearest Clinic</h3>
                    <div className='p-1'>
                        
                        <div className="bg-green-700 p-3 flex flex-row">
                            
                            <Form.Group className="w-10/12" controlId="formGridAddress2">
                                <Form.Select aria-label="Default select example">
                                    <option>Search Your District</option>
                                    {options.map((option) => (
                                        <option key={option.id} value={option.name}>
                                        {option.name}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <div className="pr-5 flex-col">
                            <Button  variant="success" href='#' className=''>Search</Button>

                            </div>
                            
                            
                        </div>
                    </div>
                </div>
                
            </Container>
        </div>
        <div className='bg-gray-200'>
            <div className='p-6'>
                <Container>
                    <h6 className='text-center'>Loading...</h6>
                </Container>
            </div>
            
        </div>
      
    </div>
  )
}



