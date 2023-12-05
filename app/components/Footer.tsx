import Image from 'next/image'
import React from 'react'

const diseases = [
    'Digestive system', 'Muscular skeletal system', 'Endocrine', 'Central nerves system', 'Blood circulatory system', 'Urinary system', 'Hair & skin', 'Reproductive system', 'Liver disease'
];

const services = [
    'Phone Consultation', 'Video Consultation', 'Clinic Consultation', 'Buy Online Products', 'Therapies', 'Ayurveda for Wellness'

];







const Footer = () => {
  return (
    <div className='bg-gray-700 text-gray-100 py-8 px-4 font-mono hover:bg-gray-800'>
        <div className="flex flex-row ">
            <div className="basis-1/4">
                <ul>
                    {diseases.map((disease, index) =>(
                    // eslint-disable-next-line react/jsx-key
                    <li><a className='no-underline text-white hover:underline leading-loose' href='#' key={index}>{disease}</a></li>

                    ))}
                    
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                {services.map((service, index) =>(
                    // eslint-disable-next-line react/jsx-key
                    <li><a className='no-underline text-white hover:underline leading-loose' href='#' key={index}>{service}</a></li>

                    ))}
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li><a className='no-underline text-white hover:underline leading-loose' href='#'>Why Lakshmi</a></li>
                    <li><a className='no-underline text-white hover:underline leading-loose' href='#'>Book Appointment</a></li>
                </ul>
            </div>
            <div className="basis-1/4">
                <ul>
                    <li className='leading-[5rem]'>Contact Us:</li>

                    <a href="#" className='no-underline text-white hover:underline  leading-loose whitespace-break-spaces '><li>  011-22222222</li></a>
                    <a href="#" className='no-underline text-white hover:underline leading-loose whitespace-break-spaces'><li>  lakshmi@gmail.com</li></a>
                    <li className='leading-[5rem]'>Follow us:</li>
                </ul>
                    <div className='flex whitespace-break-spaces'>  
                    
                            <a href="#"  className=''>
                                <Image src={require('/public/images/1.png')} width={50} height={50} className=''/>    
                            </a>
                            <a href="#"  className=''>
                                <Image  src={require('/public/images/jivabrandstore-img01.png')} width={50} height={50}/>
                            </a>
                            <a href="#" className=''>
                                <Image  src={require('/public/images/jivabrandstore-img01.png')} width={50} height={50}/>
                            </a>
                            
                            
                       
                    </div>

                
            </div>
        </div>
    </div>
  )
}

export default Footer