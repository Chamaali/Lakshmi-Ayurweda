import React from 'react'
import { Container } from 'react-bootstrap'
import bg from '/public/images/whyLakshmiBG.jpg'

export default function page() {
  return (
    <div  style={{
        backgroundImage: `url(${bg.src})`,
        
      }}
      className="bg-[length:auto_713px]"
  >
      <div className='px-5 py-6'>
        
         <div className="p-6 bg-white opacity-60 hover:opacity-90 rounded">
            <div><h1>Why Lakshmi Ayurweda</h1></div>
            <ul className="px-6 py-4 list-disc">
                <li className=' my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis cumque, possimus inventore consequuntur minima saepe facilis excepturi nostrum id fuga accusamus animi dolores voluptates? Consectetur alias in explicabo accusantium?</li>
                <li className=' my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis cumque, possimus inventore consequuntur minima saepe facilis excepturi nostrum id fuga accusamus animi dolores voluptates? Consectetur alias in explicabo accusantium?</li>
                <li className=' my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis cumque, possimus inventore consequuntur minima saepe facilis excepturi nostrum id fuga accusamus animi dolores voluptates? Consectetur alias in explicabo accusantium?</li>
                <li className=' my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis cumque, possimus inventore consequuntur minima saepe facilis excepturi nostrum id fuga accusamus animi dolores voluptates? Consectetur alias in explicabo accusantium?</li>
                <li className=' my-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae blanditiis cumque, possimus inventore consequuntur minima saepe facilis excepturi nostrum id fuga accusamus animi dolores voluptates? Consectetur alias in explicabo accusantium?</li>
            </ul>
         </div>
      </div>
    </div>
  )
}
