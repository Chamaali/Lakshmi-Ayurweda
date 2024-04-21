"use client"

import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

const DropdownSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = [
    {   
        name: 'Colombo',
        id:1,
    }, 
    {   
        name: 'Gampaha',
        id:2,
    },
    {   
        name: 'Kalutara',
        id:3,
    },
    {   
        name: 'Kandy',
        id:4,
    },
    {   
        name: 'Matale',
        id:5,
    },
    {   
        name: 'Nuwara Eliya',
        id:6,
    },
    {   
        name: 'Galle',
        id:7,
    },
    {   
        name: 'Matara',
        id:8,
    },
    {   
        name: 'Hambantota',
        id:9,
    },
    {   
        name: 'Jaffna',
        id:10,
    },
    {   
        name: 'Kilinochchi',
        id:11,
    },
    {   
        name: 'Mannar',
        id:12,
    },
    {   
        name: 'Vavuniya',
        id:13,
    },
    {   
        name: 'Mullaitivu',
        id:14,
    },
    {   
        name: 'Batticaloa',
        id:15,
    },
    {   
        name: 'Ampara',
        id:16,
    },
    {   
        name: 'Trincomalee',
        id:17,
    },
    {   
        name: 'Kurunegala',
        id:18,
    },
    {   
        name: 'Puttalam',
        id:19,
    },
    {   
        name: 'Anuradhapura',
        id:20,
    },
    {   
        name: 'Polonnaruwa',
        id:21,
    },
    {   
        name: 'Badulla',
        id:22,
    },
    {   
        name: 'Monaragala',
        id:23,
    },
    {   
        name: 'Ratnapura',
        id:24,
    },
    {   
        name: 'Kegalle',
        id:25,
    }
];
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='p-6 pb-8'>
        <div>
            <p className='text-green-700 font-bold text-xl text-center font-serif p-4'>Find Your Nearest Jiva Ayurveda Clinic</p>
        </div>
        <div className="flex flex-row text-center">
            <div className="container flex-col">
                <div className="form-group">
                    <select
                    className="form-control"
                    id="exampleSelect"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    >
                        <option value="" disabled selected>
                        Select...
                        </option>
                        {options.map((option, index) => (
                            <option key={index.id} value={option.name}>
                            {option.name}
                            </option>
                        ))}
                        
                    </select>
                </div>
                
            </div>
            <div className="container flex-col">
                <div>
                    <button type='button' href="" className="rounded-xl py-2 px-3 text-white font-bold bg-green-700 hover:bg-green-800" >Find Clinic</button>
                </div>
            </div>

        </div>

        



    </div>

    

    
  );
};

export default DropdownSelect;
