'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import ImageContainer from "../diseases_components/ImageContainer";
import DiseasForm from "../diseases_components/DiseasForm";

const labels: { [key: string]: string } = {
  qh1: "Name",
  qh2: "Gender",
  qh3: "Address",
  qh4: "Contact Number",
  qh5: "Occupation",
  qh6: "Do you have a family history of diabetes or other metabolic disorders?",
  qh7: "Have you been diagnosed with high blood pressure or high cholesterol?",
  qh8: "Are you experiencing increased thirst, frequent urination, fatigue, or blurred vision?",
  qh9: "Have you noticed any unexplained weight loss or gain?",
  qh10: "What does your typical diet look like? How often do you consume sugary or high-carbohydrate foods?",
  qh11: "How often do you exercise, and what type of physical activities do you engage in?",
  qh12: "Do you smoke or use tobacco products?",
  qh13: "How much alcohol do you consume?",
  qh14: "Have you noticed any recent changes in your weight?",
  qh15: "How active are you on a daily basis? Do you have a sedentary job or lifestyle?",
  qh16: "Have you had your blood glucose levels tested before? If so, when and what were the results?",
  qh17: "Have you had any recent blood tests or health screenings?",
  qh18: "Are you taking any medications that might affect your blood sugar levels, such as steroids or antipsychotics?",
  qh19: "Do you have any other health conditions, such as polycystic ovary syndrome (PCOS) or thyroid issues?",
  qh20: "How many hours of sleep do you typically get each night? Do you experience any sleep disorders like sleep apnea?",
  qh21: "How do you manage stress? Have you been under significant stress recently?",
  qh22: "Have you noticed any darkened areas of skin, particularly around your neck or armpits (acanthosis nigricans)?"
};

type DiseaseFormData = {
  [key: string]: string;
};

const initialFormData: DiseaseFormData = {
  qh1: '', qh2: '', qh3: '', qh4: '', qh5: '', qh6: '', qh7: '', qh8: '', qh9: '', qh10: '',
  qh11: '', qh12: '', qh13: '', qh14: '', qh15: '', qh16: '', qh17: '', qh18: '', qh19: '', qh20: '',qh21: '', qh22: ''
};


export default function page (){
  return(

        <Container   className="text-justify py-4 justify-center items-center text-base lg:text-xl antialiased" >
            <ImageContainer topic="Diabetes" first_image="/images/Diabetes_1.png" second_image="/images/Diabetes_2.png"/>
            {/*Introduction*/}
            
            <p className="pb-3 font-bold">
              In Ayurveda, diabetes (referred to as "Madhumeha") is understood to be caused by a combination of dietary, lifestyle, genetic, and environmental factors, which lead to an imbalance in the body's doshas (Vata, Pitta, and Kapha) and the accumulation of toxins (Ama). Here are the detailed causes from the Ayurvedic perspective:
            </p>

            {/* Dietary Causes */}
            <h5 className="pb-3 font-bold">Dietary Causes</h5>
            <ol className="list-decimal pl-6">
              <li><b>Excessive Sweet Intake:</b> Consuming large amounts of sugary and sweet foods increases Kapha dosha.</li>
              <li><b>Heavy and Oily Foods:</b> Frequent consumption of fried and fatty foods leads to Kapha imbalance and Ama accumulation.</li>
              <li><b>Overeating:</b> Eating more than the digestive capacity creates digestive disturbances and toxin build-up.</li>
              <li><b>Dairy Overconsumption:</b> Excessive intake of milk and dairy products aggravates Kapha.</li>
              <li><b>Alcohol and Fermented Foods:</b> These substances disrupt digestive fire (Agni) and promote the formation of Ama.</li>
            </ol>

            {/* Lifestyle Causes */}
            <h5 className="pb-3 font-bold">Lifestyle Causes</h5>
            <ol className="list-decimal pl-6">
              <li><b>Sedentary Lifestyle:</b> Lack of physical activity leads to Kapha accumulation and metabolic slowdown.</li>
              <li><b>Irregular Sleep Patterns:</b> Both excessive and insufficient sleep can disturb the balance of doshas.</li>
              <li><b>Lack of Routine:</b> Inconsistent daily habits and lack of a regular schedule (Dinacharya) disturb doshic harmony.</li>
              <li><b>Mental Stress:</b> Chronic stress, anxiety, and emotional disturbances can aggravate Vata and disrupt metabolic processes.</li>
            </ol>

            {/* Psychological Factors */}
            <h5 className="pb-3 font-bold">Psychological Factors</h5>
            <ol className="list-decimal pl-6">
              <li><b>Emotional Imbalance:</b> Prolonged periods of negative emotions such as worry, fear, and depression can affect hormonal balance and insulin sensitivity.</li>
              <li><b>Mental Strain:</b> Continuous mental exertion and stress impact endocrine function and glucose metabolism.</li>
            </ol>

            {/* Genetic and Hereditary Factors */}
            <h5 className="pb-3 font-bold">Genetic and Hereditary Factors</h5>
            <ol className="list-decimal pl-6">
              <li><b>Family History:</b> A genetic predisposition to diabetes is recognized, acknowledging that hereditary factors can influence doshic balance.</li>
              <li><b>Prakriti (Constitutional Type):</b> Individuals with a Kapha-dominant constitution are more susceptible to diabetes.</li>
            </ol>

            {/* Environmental Factors */}
            <h5 className="pb-3 font-bold">Environmental Factors</h5>
            <ol className="list-decimal pl-6">
              <li><b>Seasonal Changes:</b> Transitions between seasons affect dosha balance, especially if diet and lifestyle are not adjusted accordingly.</li>
              <li><b>Exposure to Toxins:</b> Environmental pollutants and toxins can impair metabolic processes and contribute to Ama formation.</li>
            </ol>

            {/* Other Contributing Factors */}
            <h5 className="pb-3 font-bold">Other Contributing Factors</h5>
            <ol className="list-decimal pl-6">
              <li><b>Weak Digestive Fire (Agni):</b> Poor digestive function leads to incomplete digestion, resulting in the accumulation of toxins (Ama).</li>
              <li><b>Obesity:</b> Excess body weight is associated with Kapha imbalance and insulin resistance.</li>
            </ol>

            {/* Pathogenesis in Ayurveda */}
            <h5 className="pb-3 font-bold">Pathogenesis in Ayurveda</h5>
            <ul className="list-disc pl-6">
              <li><b>Kapha Imbalance:</b> Poor digestive function leads to incomplete digestion, resulting in the accumulation of toxins (Ama).</li>
              <li><b>Pitta Imbalance:</b> Aggravated Pitta affects metabolism, leading to increased thirst, hunger, and digestion issues.</li>
              <li><b>Vata Imbalance:</b> Aggravated Vata can cause symptoms like dry skin, constipation, and rapid weight loss.</li>
            </ul>

            {/* Ayurvedic Management Approach */}
            <h5 className="pb-3 font-bold">Ayurvedic Management Approach</h5>
            <ol className="list-decimal pl-6">
              <li><b>Dietary Adjustments:</b> Emphasize a diet that balances Kapha, avoiding sweets, heavy, and oily foods, and incorporating bitter, astringent, and pungent tastes.</li>
              <li>Encourage physical activities like walking, yoga, and specific exercises to balance Kapha.</li>
              <li><b>Stress Management:</b> Practice meditation, breathing exercises (pranayama), and maintain mental peace.</li>
              <li><b>Routine and Discipline:</b> Follow a consistent daily routine (Dinacharya) to maintain doshic balance.</li>
              <li><b>Detoxification:</b> Regular detox practices (Panchakarma) to eliminate accumulated toxins and improve digestive fire.</li>
            </ol>

            {/* Summary */}
            <p className="pb-3">
              From the Ayurvedic viewpoint, the causes of diabetes are rooted in dietary habits, lifestyle choices, emotional well-being, genetic predispositions, and environmental exposures, all contributing to the imbalance of doshas and the accumulation of toxins. Addressing these causes holistically through diet, lifestyle modifications, stress management, and detoxification can help in managing and preventing diabetes effectively.
            </p>

            {/*form */}
            <DiseasForm  initialFormData={initialFormData} labels={labels}/>             
        </Container>
    )

}
