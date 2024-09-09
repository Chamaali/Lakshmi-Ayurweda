"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaPhone, FaYoutube } from "react-icons/fa";

const diseases = [
    {
        id:1,
        name: 'Digestive system',
        href: "./digestiveSystem"
    },
    {
        id:2,
        name: 'Muscular skeletal system',
        href: "./muscularSkeletalSystem"
    },
    {
        id:3,
        name: 'Endocrine',
        href: "./endrocrine"
    },
    {
        id:4,
        name: 'Central nerves system',
        href: "./centralNervesSystem"
    },
    {
        id:5,
        name: 'Blood circulatory system',
        href: "./bloodCirculatorySystem"
    },
    {
        id:6,
        name: 'Urinary system',
        href: "./urinarySystem"
    },
    {
        id:7,
        name: 'Hair & skin',
        href: "./hairSkin"
    },
    {
        id:8,
        name: 'Reproductive system',
        href: "./reproductiveSystem"
    },
    {
        id:9,
        name: 'Liver disease',
        href: "./liverDisease"
    }
];

const services = [

    {
        id:1,
        name: 'Phone Consultation',
        href: "./phoneConsultation"
    },
    {
        id:2,
        name: 'Video Consultation',
        href: "./videoConsultation"
    },
    {
        id:3,
        name: 'Clinic Consultation',
        href: "./clinicConsultation"
    },
    {
        id:4,
        name: 'Buy Online Products',
        href: "./buyOnlineProducts"
    },
    {
        id:5,
        name: 'Ayurweda for Wellness',
        href: "./ayurwedaForWellness"
    },
    {
        id:6,
        name: 'Find prakurthi and Body Constitution',
        href: "./findPrakurthiAndBodyConsultation" 
    },
    {
        id:7,
        name: 'Yoga Meditation',
        href: "./yogaMeditation"
    },
    {
        id:8,
        name: 'Ayurweda Beauticulture',
        href: "./ayurwedaBeauticulture"
    },
    {
        id:9,
        name: 'Acupuncture and Cupping',
        href: "./acupunctureAndCupping"
    },
];







export default function page(){
  return (
    <div className='bg-green-900 text-gray-100 text-base pt-8 pb-2 px-8 font-sans hover:bg-green-900 justify-center items-center'>
        <div className="grid grid-cols-1 px-4 justify-center md:grid-cols-2 lg:grid-cols-4 ">
            <div className="basis-1/4">
                <ul>
                    {diseases.map((disease) => (
                        <li key={disease.id} className=' my-4'>
                            <Link href={disease.href} className=' no-underline text-gray-400 hover:text-white hover:font-semibold'>{disease.name}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>

            <div className="basis-1/4">
                <ul>
                    {services.map((service) => (
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

