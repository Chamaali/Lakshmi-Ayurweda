"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";

import diseases from '../../../constants/footer';
import services  from '../../../constants/footer';

interface Disease {
    id: number; 
    name: string;
    href: string;
}

interface Service {
    id: number; 
    name: string;
    href: string;
}

export default function page(){
  return (
    <div className='bg-green-900 text-gray-100 text-lg pt-8 pb-2 px-8 font-sans justify-center items-center'>
        <div className="grid grid-cols-1 px-4 justify-center md:grid-cols-2 lg:grid-cols-4 ">
            <div className="basis-1/4">
                <ul>
                    {diseases.diseases.map((disease:Disease) => (
                        <li key={disease.id} className=' my-4'>
                            <Link href={disease.href} className=' no-underline text-gray-400 hover:text-white hover:font-semibold'>{disease.name}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>

            <div className="basis-1/4">
                <ul>
                    {services.services.map((service:Service) => (
                        <li key={service.id} className=' my-4'>
                        <Link href={service.href} className=' no-underline text-gray-400 hover:text-white hover:font-semibold'>{service.name}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li className=' my-4'><a className=' no-underline text-gray-400 hover:text-white hover:font-semibold' href='./whyLakshmiAyurweda'>Why Lakshmi</a></li>
                    <li className=' my-4'><a className=' no-underline text-gray-400 hover:text-white hover:font-semibold' href='./bookAppointment'>Book Appointment</a></li>
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li className='my-4 no-underline text-gray-400 font-semibold'>Contact Us:</li>

                    <li className=' my-4'><a href="#" className=' no-underline text-gray-400 hover:text-white hover:font-semibold'>011-22222222</a></li>
                    <li className=' my-4'><a href="#" className=' no-underline text-gray-400 hover:text-white hover:font-semibold'>lakshmi@gmail.com</a></li>
                    <li className=' my-4 no-underline text-gray-400 hover:text-white hover:font-semibold'>Follow us:</li>
                </ul>
                <div className='flex'>  
                    <ul className='flex  flex-row'>
                        <li className='ml-0 mr-2 no-underline text-gray-400  hover:text-white hover:font-semibold'><FaFacebook /></li>
                        <li className=' ml-0 mr-2'><a href="#" className=' no-underline text-gray-400 hover:text-white hover:font-semibold'><FaYoutube/></a></li>
                        <li className=' ml-0 mr-2' ><a href="#" className=' no-underline text-gray-400 hover:text-white hover:font-semibold'><FaLinkedin/></a></li>
                    </ul>
                </div>

                
            </div>
        </div>
        <div className='flex  justify-center pt-5'>
            <p>Copyright © 2024 Lakshmi Ayurweda</p>
        </div>
    </div>
  )
}

