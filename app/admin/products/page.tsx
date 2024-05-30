

import React from "react";
import { Container } from "react-bootstrap";
// import RemoveProductButton from "../component/RemoveProductButton";
// import { HiPencilAlt } from "react-icons/hi";



const getProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
    
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading products: ", error);
    alert("Failed to fetch");
  }
};

export default async function Page() {

    const { products } = await getProducts();

    // const [products, setProducts] = useState([]);
 

    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     const data = await getProducts();
    //     setProducts(data.products);
    //   };
    //   fetchProducts();
    // }, []);

  return (
    <Container className="py-8">
      <div className="flex flex-row pb-4 ">
        <div className="grid  basis-3/4">
          <h4 className="justify-self-center font-bold">Product Details</h4>
        </div>
        <div className="grid  basis-1/4">
          <a
            href="./../../admin/addProduct"
            className="justify-self-end py-2 px-3 font-medium bg-green-800 no-underline rounded shadow-sm text-white hover:bg-green-900"
          >
            Add New Product
          </a>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Photo Link
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((p:any) => (
              <tr
                key={p._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{p._id}</td>
                <td className="px-6 py-4">{p.name}</td>
                <td className="px-6 py-4">{p.description}</td>
                <td className="px-6 py-4">{p.image}</td>
                <td className="px-6 py-4">{p.price}</td>
                <td className="px-6 py-4">{p.size}</td>

                <td>actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}





//  <td className="flex items-center px-6 py-4">
//                   <a
//                     href={`./../../admin/editProduct/${p._id}`}
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline px-3"
//                   >
//                     <HiPencilAlt size={24} />
//                   </a>
//                   <RemoveProductButton id={p._id} />
//                 </td> 