// FormComponent.tsx
'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface FormField {
  id: string;
  type: string;
}

interface FormComponentProps {
  fields: FormField[];
  labels: { [key: string]: string };
  onSubmit: (data: { [key: string]: string }) => Promise<void>;
//   title: string;
}

const FormComponent: React.FC<FormComponentProps> = ({ fields, labels, onSubmit,  }) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  const handleChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    router.push("/diseases/Cholesterol");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} className='container py-3'>
      <div className="my-4">
        {/* <h4 className="text-center font-bold">{title}</h4> */}
      </div>

      <div className='flex flex-wrap gap-3'>
        {fields.map(field => (
          <div key={field.id}>
            <label className='block text-sm font-medium mb-1'>{labels[field.id]}</label>
            <input
              className='p-2 m-2 rounded bg-gray-400'
              type={field.type}
              id={field.id}
              value={formData[field.id] || ''}
              onChange={(e) => handleChange(field.id, e.target.value)}
            />
          </div>
        ))}
      </div>

      <div>
        <button className='my-4 bg-teal-800 text-white py-2 px-3 rounded' type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormComponent;
