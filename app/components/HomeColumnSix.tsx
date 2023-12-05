"use client"

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

const DropdownSelect = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const options = ['Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara', 'Eliya', 'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar', 'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee', 'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla', 'Monaragala', 'Ratnapura', 'Kegalle'];

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
                            <option key={index} value={option}>
                            {option}
                            </option>
                        ))}
                        
                    </select>
                </div>
                
            </div>
            <div className="container flex-col">
                <div>
                    <button type='button' href="" className="rounded-xl py-2 px-3 text-white font-bold bg-green-700" >Find Clinic</button>
                </div>
            </div>

        </div>

        



    </div>

    

    
  );
};

export default DropdownSelect;
