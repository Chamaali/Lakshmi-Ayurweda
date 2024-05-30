// 'use client'

// import { useRouter } from "next/navigation";
// import React, { useState } from "react";
// import { Button, Container, Form } from "react-bootstrap";





// export default function Page() {

// const [name, setName] = useState("");
// const [description, setDescription] = useState("");
// const [image, setImage] = useState("");
// const [price, setPrice] = useState("");
// const [size, setSize] = useState("");

// const router = useRouter();


    

//   return (
//     <div onSubmit={handleSubmit}>
      
//     </div>
//   );
// }


'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import ServerComProductAdd from './../component/ServerComProductAdd';

export default function Page() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ServerComProductAdd name={name} router={router} />
      </form>
    </div>
  );
}
