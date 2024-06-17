import Image from 'next/image';
import { getProducts } from '../../serverComponents/products/getProducts';

export const HomeColumnFive = async () =>{

    const products = await getProducts();

    if (!products) {
        console.error('No products data fetched');
        return <div>Error loading products</div>;
      }

  return (
    <div className="bg-green-900 p-8">
        <div className="">
          <p className="text-white text-center font-sans font-semibold text-xl">
            Ayurvedic for Wellness
          </p>
        </div>
      <div>
          <div className='grid grid-cols-4 my-5'>
            {products.map((product:any, index:any) => (
              <div key={index} className="p-2 hover:scale-105">
                <div className="bg-white  rounded-xl shadow p-4 mx-2">
                  <Image src={product.image} alt={product.title} className="object-cover rounded"  width={30} height={30}/>
                  <h3 className="mt-2 font-bold text-lg">{product.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
