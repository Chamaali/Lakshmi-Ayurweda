'use client'
import Image from 'next/image'
import { Form, Col, Button, Row, FormGroup, FormLabel, FormControl, FormSelect, FormCheck, Container, Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap'


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
    <div className='bg-black p-8 text-white'>
        <Container>
            <div className='flex flex-row'>
                <div className='basis-1/2'>
                    <h1>Reach Us</h1>
                    <p>JIVA AYURVEDIC PHARMACY LIMITED Plot No:3, <br/>DLF Industrial Area, <br/>Faridabad, <br/>Haryana.</p>
                    <h3>(0129) 4189111, 4040404</h3>
                    <h3>clinics@jiva.com</h3>
                    <h1>Follow Us On</h1>
                    <p>YouTube</p>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <div className='flex flex-row'>
                        <div className='flex-column'>
                            <a href="https://www.w3schools.com/"><Image alt='' src={require('/public/images/call.png')} width={50} /></a> 
                        </div>
                        <div className='flex-column'>
                            <a href="https://www.w3schools.com/"><Image alt='' src={require('/public/images/call.png')} width={50} /></a> 
                        </div>
                        <div className='flex-column'>
                            <a href="https://www.w3schools.com/"><Image alt='' src={require('/public/images/call.png')} width={50} /></a>
                        </div>
                    </div>
                </div>



                
                <div className='basis-1/2'>
                <Form>
                
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Patient Name:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Patient Age:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address:</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>District:</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        {options.map((option) => (
                            <option key={option.id} value={option.name}>
                            {option.name}
                            </option>
                        ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Phone Number:</Form.Label>
                    <Form.Control placeholder="Ex: +947766554" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control placeholder="Ex: abc@gmail.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Symptoms:</Form.Label>
                    <Form.Control placeholder="Ex: Fever, Head ache..." as="textarea" rows={5} />
                </Form.Group>

                <div className='p-5 text-end'>
                <button type='button' className="rounded-xl py-2 px-3 text-white font-bold bg-green-700 hover:bg-green-800" >Submit</button>

                </div>
                </Form>

                </div>
            </div>
            
        </Container>
    </div>
  )
}
