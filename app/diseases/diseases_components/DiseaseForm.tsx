import { useForm } from "./useForm";



type DiseaseFormData = {
    [key: string]: string;
};

export default function DiseaseForm({ initialFormData, labels, disease }: { initialFormData: DiseaseFormData; labels: DiseaseFormData; disease: string }) { // Added `disease` prop
    const { formData, handleChange, handleSubmit } = useForm(initialFormData, disease);
  
    return (
        <form action="" className="p-4 bg-gray-50 rounded border shadow" onSubmit={handleSubmit}>
            <div className="grid gap-y-4 px-4 sm:px-6 lg:px-8">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="form-group list-decimal">
                        <label htmlFor={key} className="block text-lg font-medium text-gray-700">{labels[key]}</label>
                        <input
                            id={key}
                            name={key}
                            placeholder=""
                            value={formData[key]}
                            onChange={handleChange}
                            className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
                        />
                    </div>
                ))}
            </div>
            <div className="gap-5 flex justify-end pt-5">
                <button type="submit" className="bg-blue-600 py-2 px-3 rounded text-white">
                    Submit
                </button>
            </div>
        </form>
    );
}
