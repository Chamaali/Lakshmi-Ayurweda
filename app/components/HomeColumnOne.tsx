import Carousel from '../components/Carousel';
import Image from 'next/image';

const HomeColumnOne = () => {
  return (
    <div>
        <div className="bg-cover p-10 h-100 opacity-85" style={{backgroundImage: "url('https://media.istockphoto.com/id/1165256874/photo/composition-of-spa-treatment-on-wooden-table.jpg?s=612x612&w=0&k=20&c=QIfLvv5yOlqCV0QJs5t57D4q_dWojTamNgwu3HDgDCw=')"}}>
            <div className='flex flex-row'>
                <div className="flex-col">
                    <div className='bg-white p-10 m-5 rounded-lg '>
                        <img src='/public/icons/Book Icon.jpg' alt="Book Icon" />
                        <p className='text-neutral-950'>Book 
Appointment</p>
                    </div>
                </div>
                <div className="flex-col">
                    <div className='bg-white p-10 m-5 rounded-lg '>
                        <img src='#'/>
                        <p className='text-neutral-950'>Locate
Clinic</p>
                    </div>
                </div>
        
                
            </div>

            <div className='flex flex-row'>
                <div className="flex-col">
                    <div className='bg-white p-10 m-5 rounded-lg '>
                        <img src='#'/>
                        <p className='text-neutral-950'>Buy
Products</p>
                    </div>
                </div>
                <div className="flex-col">
                    <div className='bg-white p-10 m-5 rounded-lg '>
                        <img src='#'/>
                        <p className='text-neutral-950 m-3'>Ayurveda for
Wellness</p>
                    </div>
                </div>
        
                
            </div>
        </div>
    </div>
  );
};

export default HomeColumnOne;