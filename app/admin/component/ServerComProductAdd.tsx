// import React from 'react'
// import { Button, Container, Form } from "react-bootstrap";


// const handleSubmit = async({name, price, size, description, image}) =>{
//     e.preventDefault();

//     if(!name || !price || !size || !description || !image ){
//         alert("Please fill all the fields");
//         return;
//     }

//     try {
//         const res = await fetch(`${process.env.BASE_URL}/api/products`,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 name, price, image, size, description
//             })
//         })

//         if(res.ok){
//             alert("Success!");
//             // router.push("./../../admin/products");
            
//         }else{
//             throw new Error("Failed to add Product");
//         }

//     } catch (error) {
//         console.log(error);
//     }
// }


// export default function ServerComProductAdd() {



//   return (
//     <div>
//       <Container>
//         <form className="py-6">
//           <div className="space-y-12">
//             <div className="border-b border-gray-900/10 pb-12">
//               <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="first-name"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Name
//                   </label>
//                   <div className="mt-2">
//                     <input
//                     onChange={(e) => setName(e.target.value)}
//                     value={name}
//                       type="text"
//                       autoComplete="given-name"
//                       className="block w-full rounded-md border-0 py-1.5 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Description
//                   </label>
//                   <div className="mt-2">
//                     <input
//                     onChange={(e) => setDescription(e.target.value)}
//                     value={description}
//                       type="text"
//                       autoComplete="family-name"
//                       className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="first-name"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Photo Link
//                   </label>
//                   <div className="mt-2">
//                     <input
//                     onChange={(e) => setImage(e.target.value)}
//                     value={image}
//                       type="text"
//                       autoComplete="given-name"
//                       className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Price
//                   </label>
//                   <div className="mt-2">
//                     <input
//                     onChange={(e) => setPrice(e.target.value)}
//                     value={price}
//                       type="text"
//                       autoComplete="family-name"
//                       className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

//                 <div className="sm:col-span-3">
//                   <label
//                     htmlFor="last-name"
//                     className="block text-sm font-medium leading-6 text-gray-900"
//                   >
//                     Size
//                   </label>
//                   <div className="mt-2">
//                   <input
//                     onChange={(e) => setSize(e.target.value)}
//                     value={size}
//                       type="text"
//                       autoComplete="family-name"
//                       className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                     />
//                   </div>
//                 </div>

                
//               </div>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center justify-end gap-x-6">
//             <button
//               type="button"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//             >
//               Save
//             </button>
//           </div>
//         </form>
//       </Container>
//     </div>
//   )
// }

//`${process.env.BASE_URL}/api/products`


import React from 'react';

async function ProductAdding(name, router) {
  try {
const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
      }),
    });

    if (res.ok) {
      alert('Success!');
      router.push('./../../admin/products');
    } else {
      throw new Error('Failed to add Product');
    }
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
}

export default function ServerComProductAdd({ name, router }) {
  return (
    <button
      onClick={() => ProductAdding(name, router)}
      className="bg-yellow-600 text-black px-3 py-2 rounded"
    >
      Save
    </button>
  );
}
