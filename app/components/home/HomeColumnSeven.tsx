import Image from 'next/image';
import {getDoctors} from '../../serverComponents/doctors/getDoctors'

const HomeColumnSeven = async () => {
  const doctors = await getDoctors();

  return (
    <div className="p-4">
      {doctors.map((doctor:any, index:any) => (
        <div key={index} className="p-2 hover:scale-105">
        <div className="bg-white  rounded-xl shadow p-4 mx-2">
          <Image src={doctor.image} alt={doctor.title} className="object-cover rounded"  width={30} height={30}/>
          <h3 className="mt-2 font-bold text-lg">{doctor.title}</h3>
        </div>
      </div>
      ))}
    </div>
  );
};

export default HomeColumnSeven;
