"use client"
// import Carousel from '/public/images/4.png';
import Image from 'next/image';
import Dig from "/public/images/7.png"



const HomeColumnOne = () => {
  return (
    <>
    <div className="bg-[length:1440px_713px]  opacity-85" style={{backgroundImage: "url('https://media.istockphoto.com/id/1165256874/photo/composition-of-spa-treatment-on-wooden-table.jpg?s=612x612&w=0&k=20&c=QIfLvv5yOlqCV0QJs5t57D4q_dWojTamNgwu3HDgDCw=')"}}>
        <div className='container'>    
        <div className='flex flex-row py-4'>
                <div className="flex-column bg-white  rounded-xl mx-3">
                    <div className="p-3">
                        <Image className="" alt="" src={Dig} width={50} />
                        <p className='text-green-700 text-xs font-serif text-center pb-2 pt-4 text-base'>Blood Circulatory System</p>
                    </div>
                </div>
                <div className="flex-column bg-white  rounded-xl mx-3">
                    <div className="p-3">
                        <Image className="" alt="" src={Dig} width={50} />
                        <p className='text-green-700 text-xs font-serif text-center pb-2 pt-4 text-base'>Blood Circulatory System</p>
                    </div>
                </div>
                   
            </div>
            <div className='flex flex-row py-4'>
                <div className="flex-column bg-white  rounded-xl mx-3">
                    <div className="p-3">
                        <Image className="" alt="" src={Dig} width={50} />
                        <p className='text-green-700 text-xs font-serif text-center pb-2 pt-4 text-base'>Blood Circulatory System</p>
                    </div>
                </div>
                <div className="flex-column bg-white  rounded-xl mx-3">
                    <div className="p-3">
                        <Image className="" alt="" src={Dig} width={50} />
                        <p className='text-green-700 text-xs font-serif text-center pb-2 pt-4 text-base'>Blood Circulatory System</p>
                    </div>
                </div>
                   
            </div>

        </div>

    </div>


       











    </>
  );
};

export default HomeColumnOne;