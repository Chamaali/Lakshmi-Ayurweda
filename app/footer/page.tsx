"use client"

import Image from 'next/image'
import React from 'react'
import Link from 'next/link';

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
    <div className='bg-green-900 text-gray-100 pt-8 pb-2 px-8 font-mono hover:bg-green-900 text-xs'>
        <div className="flex flex-row ">
            <div className="basis-1/4">
                <ul>
                    {diseases.map((disease) => (
                        <li key={disease.id} className=' my-4'>
                        <Link href={disease.href} className='no-underline hover:underline text-gray-100'>{disease.name}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>

            <div className="basis-1/4">
                <ul>
                    {services.map((service) => (
                        <li key={service.id} className=' my-4'>
                        <Link href={service.href} className='no-underline hover:underline text-gray-100'>{service.name}</Link>
                        </li>
                        
                    ))}
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li className=' my-4'><a className='no-underline hover:underline text-gray-100' href='./whyLakshmiAyurweda'>Why Lakshmi</a></li>
                    <li className=' my-4'><a className='no-underline text-white hover:underline leading-loose' href='./bookAppointment'>Book Appointment</a></li>
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li className='leading-[5rem]'>Contact Us:</li>

                    <li><a href="#" className='no-underline text-white hover:underline  leading-loose whitespace-break-spaces '>011-22222222</a></li>
                    <li><a href="#" className='no-underline text-white hover:underline leading-loose whitespace-break-spaces'>lakshmi@gmail.com</a></li>
                    <li className='leading-[5rem]'>Follow us:</li>
                </ul>
                    <div className='flex whitespace-break-spaces'>  
                    
                            {/* <a href="#"  className=''>
                                <Image src={require('/public/images/1.png')} width={50} height={50} className=''/>    
                            </a>
                            <a href="#"  className=''>
                                <Image  src={require('/public/images/jivabrandstore-img01.png')} width={50} height={50}/>
                            </a>
                            <a href="#" className=''>
                                <Image  src={require('/public/images/jivabrandstore-img01.png')} width={50} height={50}/>
                            </a> */}
                            
                            
                       
                    </div>

                
            </div>
        </div>
        <div className='flex  justify-center pt-5'>
            <p>Copyright © 2024 Lakshmi Ayurweda</p>
        </div>
    </div>
  )
}

