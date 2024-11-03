import { ChangeEvent, FormEvent, useState } from 'react';

export function useForm<T>(initialState: T, disease: string) {
    const [formData, setFormData] = useState<T>(initialState);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/${disease}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to submit form');
            }

            const data = await res.json();
            alert("Form was successfully submitted.");
            setFormData(initialState); // Reset form after successful submission
            
        } catch (error) {
            console.error(`Error submitting ${disease} form:`, error);
            setError(error instanceof Error ? error.message : 'An error occurred');
            alert(`Error submitting form: ${error instanceof Error ? error.message : 'Unknown error'}`);
        } finally {
            setIsLoading(false);
        }
    };

    return { formData, handleChange, handleSubmit, isLoading, error };
}