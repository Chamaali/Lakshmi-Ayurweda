"use client";

import React from "react";
import { Container } from "react-bootstrap";
import ImageContainer from "../diseases_components/ImageContainer";
// import DiseaseForm from "../diseases_components/DiseaseForm";
import FormComponent from "../diseases_components/FormComponent";

const labels: { [key: string]: string } = {
  qh1: "Name",
  qh2: "Age",
  qh3: "Address",
  qh4: "Gender",
  qh5: "Contact Number",
  qh6: "Occupation",
  qh7: "Do you have a family history of hypertension or heart disease?",
  qh8: "Do you have a family history of high cholesterol, heart diseases or stroke?",
  qh9: "Have you been diagnosed with any chronic conditions like hypertension or diabetes?",
  qh10: "Are you currently taking any medications or supplements?",
  qh11: "What does your typical diet look like? Do you consume a lot of salt, processed foods, or caffeine?",
  qh12: "Can you describe your typical diet? (e.g. intake of saturated fats, trans fats, fiber, fruits, and vegetables)",
  qh13: "How often do you exercise and what type of physical activities do you engage in?",
  qh14: "Do you smoke or use tobacco products?",
  qh15: "How much alcohol do you consume, and how frequently?",
  qh16: "Have you experienced any symptoms that might be related to cholesterol levels, such as chest pain, shortness of breath, or fatigue?",
  qh17: "Do you notice any changes in your weight, particularly weight gain?",
  qh18: "Have you experienced similar pain before?",
  qh19: "Have you had your cholesterol levels checked before? If so, what were the results?",
  qh20: "Have you had any recent blood tests, and do you know your current lipid profile (including LDL, HDL, and triglycerides)?",
  qh21: "Are you aware of the lifestyle changes that can help manage cholesterol levels, such as dietary modifications, increased physical activity, and smoking cessation?",
};

const fields = [
    { id: 'qh1', type: 'text' },
    { id: 'qh2', type: 'text' },
    { id: 'qh3', type: 'text' },
    { id: 'qh4', type: 'text' },
    { id: 'qh5', type: 'text' },
    { id: 'qh6', type: 'text' },
    { id: 'qh7', type: 'text' },
    { id: 'qh8', type: 'text' },
    { id: 'qh9', type: 'text' },
    { id: 'qh10', type: 'text' },
    { id: 'qh11', type: 'text' },
    { id: 'qh12', type: 'text' },
    { id: 'qh13', type: 'text' },
    { id: 'qh14', type: 'text' },
    { id: 'qh15', type: 'text' },
    { id: 'qh16', type: 'text' },
    { id: 'qh17', type: 'text' },
    { id: 'qh18', type: 'text' },
    { id: 'qh19', type: 'text' },
    { id: 'qh20', type: 'text' },
    { id: 'qh21', type: 'text' }
];


  const handleFormSubmit = async (data: { [key: string]: string }) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cholesterols`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error('Failed to update Product');
      }

      alert('Product updated successfully');
    } catch (error) {
      console.error(error);
      alert('Failed to update Product');
    }
  };

export default function Page() {
  return (
    <Container className="text-justify py-4 justify-center items-center text-base lg:text-xl antialiased">
      <ImageContainer
        topic="Cholesterol"
        first_image="/images/ChestPain_1.png"
        second_image="/images/ChestPain_2.png"
      />

      <p className="pb-3 font-bold">
        Hypercholesterolemia, or high cholesterol, is addressed in Ayurveda by focusing on balancing the body&apos;s doshas, particularly Kapha, and improving the functioning of the digestive system (Agni). Here&apos;s a detailed look at how Ayurveda approaches hypercholesterolemia:
      </p>
      <h5 className="pb-3 font-bold">
        Ayurvedic Perspective on Hypercholesterolemia
      </h5>
      <ol className="list-decimal">
        <li className="pb-3">
          <b>Dosha Imbalance:</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Kapha Dosha:</b> High cholesterol is primarily linked to an imbalance in Kapha dosha, which governs the structure, lubrication, and stability in the body. Excess Kapha leads to the accumulation of fatty tissues and blockages in the body&apos;s channels (srotas).
          </li>
          <li className="pb-3">
            <b>Medas Dhatu: </b>Cholesterol corresponds to Medas dhatu (fat tissue) in Ayurveda. Excessive Medas leads to imbalances and health issues.
          </li>
        </ul>

        <li className="pb-3">
          <b>Causes:</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Diet:</b> Consumption of heavy, oily, sweet, and dense foods that increase Kapha, such as dairy products, fatty meats, and sugary items.
          </li>
          <li className="pb-3">
            <b>Lifestyle:</b> Sedentary lifestyle, lack of physical activity, and high-stress levels.
          </li>
          <li className="pb-3">
            <b>Digestive Issues:</b> Weak digestive fire (Agni) leading to improper metabolism and accumulation of Ama (toxins).
          </li>
        </ul>

        <li className="pb-3">
          <b>Symptoms:</b>
        </li>
        <ul>
          <li className="pb-3">Heaviness in the body</li>
          <li className="pb-3">Lethargy and fatigue</li>
          <li className="pb-3">Breathlessness</li>
          <li className="pb-3">Digestive issues such as sluggish digestion</li>
          <li className="pb-3">Obesity or weight gain</li>
        </ul>
      </ol>

      <h5 className="pb-3 font-bold">Ayurvedic Management Strategies</h5>
      <ol className="list-decimal">
        <li className="pb-3">
          <b>Dietary Recommendations:</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Kapha-pacifying Diet:</b> Emphasize light, warm, and easily
            digestible foods.
          </li>
          <li className="pb-3">
            <b>Avoid:</b> Heavy, oily, and greasy foods; dairy products; sweets; red meat; processed foods.
          </li>
          <li className="pb-3">
            <b>Include:</b> Vegetables like leafy greens and cruciferous vegetables, fruits such as apples and pomegranates, grains like barley, legumes, and spices like turmeric, ginger, and black pepper.
          </li>
        </ul>

        <li className="pb-3">
          <b>Lifestyle Modifications:</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Regular Exercise:</b> Engage in physical activities like brisk walking, yoga, and aerobic exercises to balance Kapha and improve circulation.
          </li>
          <li className="pb-3">
            <b>Stress Management:</b> Practices like meditation, pranayama (breathing exercises), and ensuring adequate sleep.
          </li>
          <li className="pb-3">
            <b>Daily Routine (Dinacharya):</b> Establish a consistent daily routine including waking up early, tongue scraping, oil pulling, and maintaining regular meal times.
          </li>
        </ul>

        <li className="pb-3">
          <b>Detoxification Practices (Panchakarma):</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Virechana:</b> Therapeutic purgation to eliminate toxins and balance doshas.
          </li>
          <li className="pb-3">
            <b>Basti:</b> Medicated enemas to cleanse the colon and improve overall health.
          </li>
          <li className="pb-3">
            <b>Udvarthana:</b> Herbal powder massage to reduce excess fat and improve skin tone.
          </li>
        </ul>

        <li className="pb-3">
          <b>Specific Therapies:</b>
        </li>
        <ul>
          <li className="pb-3">
            <b>Lepam:</b> Application of herbal pastes on specific areas to reduce localized fat and improve skin health.
          </li>
          <li className="pb-3">
            <b>Nasya:</b> Administration of medicated oils through the nasal passages to enhance overall health.
          </li>
        </ul>
      </ol>

      <p className="pb-3">
        Ayurvedic management of hypercholesterolemia involves a holistic approach aimed at balancing the body&apos;s doshas, particularly Kapha, improving digestive fire (Agni), and eliminating toxins (Ama). This approach includes dietary modifications, herbal remedies, lifestyle changes, and detoxification therapies. Regular consultation with an Ayurvedic practitioner is essential to tailor treatments to individual needs and ensure effective management of high cholesterol.
      </p>

      <FormComponent fields={fields} labels={labels} onSubmit={handleFormSubmit}  />
    </Container>
  );
}
