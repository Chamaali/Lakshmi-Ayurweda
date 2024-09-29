import React, { ChangeEvent, FormEvent, useState } from 'react'

export function UseForm<T> (initialState: T) {
    const [formData, setFormData] = useState<T>(initialState)

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
        setFormData(prev=>({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit=async (e:FormEvent)=>{
        e.preventDefault()
        console.log(formData)
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hypertensions`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                alert("Form was successfully submitted.");
                console.log("Form was successfully submitted.");
            } else {
                throw new Error("Failed to submit form.");
            }
        } catch (error) {
            console.error('Error submitting hypertension form', error);
            alert(`Error submitting form`);
        }
    }

    return {formData, handleChange, handleSubmit}
}

