"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";


export const getCholesterol= async () => {
    


    try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/cholesterol`,
          {
            cache: "no-cache",
          }
        );
    
        if (!res.ok) {
          throw new Error(
            `Failed to fetch cholesterol: ${res.status} ${res.statusText}`
          );
        }
    
        // Try to parse the response as JSON
        try {
          const data = await res.json();
          return data.cholesterol;
        } catch (jsonError) {
          // Log the response text to understand what was returned
          const text = await res.text();
          console.error("Failed to parse JSON", jsonError);
          console.error("Response text:", text);
          throw new Error("Failed to parse JSON response");
        }
      } catch (error) {
        console.error("Error loading cholesterol", error);
        return null;
      }
    };
    
    const CholesterolePage: React.FC = () => {
      const [cholesterol,setCholesterol] = useState<any[]>([]);
      const [error, setError] = useState<string | null>(null);
    
      useEffect(() => {
        const fetchCholesterol = async (data: any) => {
          try {
            const data = await getCholesterol();
            if (data) {
              setCholesterol(data);
            } else {
              setError("No cholesterol data fetched");
            }
          } catch (fetchError) {
            setError("Error loading cholesterol");
          }
        };
    
        fetchCholesterol();
      }, []);
    
      if (error) {
        return <div>{error}</div>;
      }

  return (




    <Container className="py-8">
      <div className="grid basis-3/4">
        <h4 className="justify-self-center font-bold">Diseases</h4>
      </div>
      <section>
        <div className="grid basis-3/4">
          <h6 className="justify-self-start font-bold">Cholesterol</h6>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-white border-b">
  <td scope="col" className="px-6 py-3" title="Name">
    QC1
  </td>
  <td scope="col" className="px-6 py-3" title="Age">
    QC2
  </td>
  <td scope="col" className="px-6 py-3" title="Sex">
    QC3
  </td>
  <td scope="col" className="px-6 py-3" title="Address">
    QC4
  </td>
  <td scope="col" className="px-6 py-3" title="Gender">
    QC5
  </td>
  <td scope="col" className="px-6 py-3" title="Contact Number">
    QC6
  </td>
  <td scope="col" className="px-6 py-3" title="Occupation">
    QC7
  </td>
  <td scope="col" className="px-6 py-3" title="Do you have a family history of hypertension or heart disease?">
    QC8
  </td>
  <td scope="col" className="px-6 py-3" title="Do you have a family history of high cholesterol, heart diseases or stroke?">
    QC9
  </td>
  <td scope="col" className="px-6 py-3" title="Have you been diagnosed with any chronic conditions like hypertension or diabetes?">
    QC10
  </td>
  <td scope="col" className="px-6 py-3" title="Are you currently taking any medications or supplements?">
    QC11
  </td>
  <td scope="col" className="px-6 py-3" title="What does your typical diet look like? Do you consume a lot of salt, processed foods, or caffeine?">
    QC12
  </td>
  <td scope="col" className="px-6 py-3" title="Can you describe your typical diet? (e.g., intake of saturated fats, trans fats, fiber, fruits, and vegetables)">
    QC13
  </td>
  <td scope="col" className="px-6 py-3" title="How often do you exercise and what type of physical activities do you engage in?">
    QC14
  </td>
  <td scope="col" className="px-6 py-3" title="Do you smoke or use tobacco products?">
    QC15
  </td>
  <td scope="col" className="px-6 py-3" title="How much alcohol do you consume, and how frequently?">
    QC16
  </td>
  <td scope="col" className="px-6 py-3" title="Have you experienced any symptoms that might be related to cholesterol levels such as chest pain, shortness of breath, or fatigue?">
    QC17
  </td>
  <td scope="col" className="px-6 py-3" title="Do you notice any changes in your weight, particularly weight gain?">
    QC18
  </td>
  <td scope="col" className="px-6 py-3" title="Have you experienced similar pain before?">
    QC19
  </td>
  <td scope="col" className="px-6 py-3" title="Have you had your cholesterol levels checked before? If so, what were the results?">
    QC20
  </td>
  <td scope="col" className="px-6 py-3" title="Have you had any recent blood tests, and do you know your current lipid profile (including LDL, HDL, and triglycerides)?">
    QC21
  </td>
  <td scope="col" className="px-6 py-3" title="Are you aware of the lifestyle changes that can help manage cholesterol levels such as dietary modifications, increased physical activity, and smoking cessation?">
    QC22
  </td>
  <td scope="col" className="px-6 py-3" title="Have you made any recent changes to your diet or exercise habits?">
    QC23
  </td>
  <td scope="col" className="px-6 py-3" title="Do you have any known allergies, especially to medications?">
    QC24
  </td>
  <td scope="col" className="px-6 py-3" title="Have you experienced any symptoms such as headaches, dizziness, or blurred vision?">
    QC25
  </td>
  <td scope="col" className="px-6 py-3" title="How often do you monitor your blood pressure, and what have your recent readings been?">
    QC26
  </td>
  <td scope="col" className="px-6 py-3" title="How would you describe your stress levels?">
    QC27
  </td>
  <td scope="col" className="px-6 py-3" title="Do you have any major stressors in your life (e.g., work, family issues)?">
    QC28
  </td>
  <td scope="col" className="px-6 py-3" title="How do you typically manage stress?">
    QC29
  </td>
  <td scope="col" className="px-6 py-3" title="How many hours of sleep do you get each night?">
    QC30
  </td>
  <td scope="col" className="px-6 py-3" title="Do you have any issues with sleep, such as insomnia or sleep apnea?">
    QC31
  </td>
</tr>

            </thead>
            <tbody>
              {cholesterol.map((cholesterol: any, index: number) => (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={index}>
                <td className="px-6 py-4">{cholesterol.qc1}</td>
                <td className="px-6 py-4">{cholesterol.qc2}</td>
                <td className="px-6 py-4">{cholesterol.qc3}</td>
                <td className="px-6 py-4">{cholesterol.qc4}</td>
                <td className="px-6 py-4">{cholesterol.qc5}</td>
                <td className="px-6 py-4">{cholesterol.qc6}</td>
                <td className="px-6 py-4">{cholesterol.qc7}</td>
                <td className="px-6 py-4">{cholesterol.qc8}</td>
                <td className="px-6 py-4">{cholesterol.qc9}</td>
                <td className="px-6 py-4">{cholesterol.qc10}</td>
                <td className="px-6 py-4">{cholesterol.qc11}</td>
                <td className="px-6 py-4">{cholesterol.qc12}</td>
                <td className="px-6 py-4">{cholesterol.qc13}</td>
                <td className="px-6 py-4">{cholesterol.qc14}</td>
                <td className="px-6 py-4">{cholesterol.qc15}</td>
                <td className="px-6 py-4">{cholesterol.qc16}</td>
                <td className="px-6 py-4">{cholesterol.qc17}</td>
                <td className="px-6 py-4">{cholesterol.qc18}</td>
                <td className="px-6 py-4">{cholesterol.qc19}</td>
                <td className="px-6 py-4">{cholesterol.qc20}</td>
                <td className="px-6 py-4">{cholesterol.qc21}</td>
                <td className="px-6 py-4">{cholesterol.qc22}</td>
                <td className="px-6 py-4">{cholesterol.qc23}</td>
                <td className="px-6 py-4">{cholesterol.qc24}</td>
                <td className="px-6 py-4">{cholesterol.qc25}</td>
                <td className="px-6 py-4">{cholesterol.qc26}</td>
                <td className="px-6 py-4">{cholesterol.qc27}</td>
                <td className="px-6 py-4">{cholesterol.qc28}</td>
                <td className="px-6 py-4">{cholesterol.qc29}</td>
                <td className="px-6 py-4">{cholesterol.qc30}</td>
                <td className="px-6 py-4">{cholesterol.qc31}</td>
              </tr>
              
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </Container>
  );
};
export default CholesterolePage;


