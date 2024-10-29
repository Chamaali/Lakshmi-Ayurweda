"use client";

import React from "react";
import { Container } from "react-bootstrap";
import ImageContainer from "../diseases_components/ImageContainer";
import DiseaseForm from "../diseases_components/DiseaseForm";

const labels: { [key: string]: string } = {
  qh1: "Name",
  qh2: "Age",
  qh3: "Gender",
  qh4: "Address",
  qh5: "Contact Number",
  qh6: "Occupation",
  qh7: "Do you have a family history of high cholesterol or heart disease?",
  qh8: "Have you ever been diagnosed with high blood pressure or diabetes?",
  qh9: "Are you currently on any medications, including those for cholesterol?",
  qh10: "Can you describe your diet? (e.g., intake of saturated fats, trans fats, fiber, etc.)",
  qh11: "How often do you exercise and what types of physical activities do you engage in?",
  qh12: "Do you smoke or use tobacco products?",
  qh13: "How much alcohol do you consume?",
  qh14: "Have you experienced any chest pain, shortness of breath or other cardiac symptoms?",
  qh15: "Do you have any symptoms of peripheral artery disease, such as leg pain while walking?",
  qh16: "Have you had your cholesterol levels checked before? If so, what were the results?",
  qh17: "Have you had any recent blood tests or imaging studies, like a lipid panel or an echocardiogram?",
  qh18: "Do you have any other health conditions that might affect your cholesterol levels, such as thyroid disease or liver conditions?",
  qh19: "What is your weight and height to assess your body mass index (BMI)?",
  qh20: "Are you experiencing any unusual stress or major changes in your life currently?",
};

type DiseaseFormData = {
  [key: string]: string;
};

const initialFormData: DiseaseFormData = {
  qh1: "",
  qh2: "",
  qh3: "",
  qh4: "",
  qh5: "",
  qh6: "",
  qh7: "",
  qh8: "",
  qh9: "",
  qh10: "",
  qh11: "",
  qh12: "",
  qh13: "",
  qh14: "",
  qh15: "",
  qh16: "",
  qh17: "",
  qh18: "",
  qh19: "",
  qh20: "",
};

export default function Page() {
  return (
    <Container className="text-justify py-4 justify-center items-center text-base lg:text-xl antialiased">
      <ImageContainer
        topic="Hypertention"
        first_image="/images/ChestPain_1.png"
        second_image="/images/ChestPain_2.png"
      />
      {/*Introduction*/}
      <div>
        <p className="pb-3 font-bold">
          In Ayurveda, hypertension, also known as Rakta Chapa or Uccha Raktachapa, is considered a condition resulting from an imbalance of the doshas, primarily Vata and Pitta, and the accumulation of Ama (toxins) in the body. Here are the detailed causes of hypertension from the Ayurvedic perspective:
        </p>

        {/* Dietary Causes  */}

        <h5 className="pb-3 font-bold">Dietary Causes</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Excessive Sweet Intake:</b> High consumption of salty foods aggravates Pitta dosha, leading to increased blood pressure.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Spicy and Sour Foods: </b> These foods can also disturb Pitta, causing heat and inflammation in the body.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>3. Heavy and Oily Foods: </b> Such foods increase Kapha dosha, contributing to blockages in the circulatory system.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>4. Processed and Junk Foods: </b>These foods create Ama and disturb the balance of the doshas, especially Pitta and Vata.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>5. Overeating:</b>Consuming large quantities of food can overload the digestive system and lead to the formation of Ama.
        </ol>

        {/* Lifestyle Causes  */}

        <h5 className="pb-3 font-bold">Lifestyle Causes</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Sedentary Lifestyle: </b> Lack of physical activity leads to poor circulation and Kapha accumulation.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Stress and Anxiety: </b> High levels of mental stress and anxiety aggravate Vata dosha and can raise blood pressure.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>3. Irregular Sleep Patterns: </b> Both insufficient and excessive sleep can disturb Vata and Pitta doshas.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b> 4. Lack of Routine: </b>Inconsistent daily habits disrupt doshic balance and contribute to stress and anxiety.
        </ol>

        {/* Psychological Factors  */}

        <h5 className="pb-3 font-bold">Psychological Factors</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Emotional Stress: </b> Chronic stress, worry, anger, and other negative emotions can disturb the balance of Vata and Pitta, leading to hypertension.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Mental Strain: </b> Continuous mental exertion and stress impact the cardiovascular system.
        </ol>

        {/*Genetic and Hereditary Factors */}

        <h5 className="pb-3 font-bold">Genetic and Hereditary Factors</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Family History: </b> A genetic predisposition to hypertension is acknowledged in Ayurveda, with hereditary factors influencing doshic balance.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Prakriti (Constitutional Type): </b> Individuals with a Vata or Pitta-dominant constitution may be more prone to hypertension.
        </ol>

        {/* Environmental Factors  */}

        <h5 className="pb-3 font-bold">Environmental Factors</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Climate and Seasonal Changes: </b> : Extreme weather conditions, particularly hot weather, can aggravate Pitta dosha.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Pollutants and Toxins: </b> Exposure to environmental toxins can impair bodily functions and contribute to the formation of Ama.
        </ol>

        {/*Other Contributing Factors */}

        <h5 className="pb-3 font-bold">Other Contributing Factors</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Poor Digestion (Agni): </b> Weak digestive fire (Agni) leads to incomplete digestion, resulting in the accumulation of Ama, which obstructs channels (srotas) and disrupts normal blood flow.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Obesity: </b> Excess body weight is associated with Kapha imbalance and can lead to hypertension.
        </ol>

        {/*Pathogenesis in Ayurveda */}

        <h5 className="pb-3 font-bold">Other Contributing Factors</h5>

        <ul className="list-decimal">
          {" "}
          <b>• Vata Imbalance </b> Aggravated Vata causes irregularity and instability in blood flow, leading to increased pressure in the arteries.
        </ul>
        <ul className="list-decimal">
          {" "}
          <b>• Pitta Imbalance: </b> Increased Pitta causes heat and inflammation in the blood vessels, contributing to hypertension.
        </ul>
        <ul className="list-decimal">
          {" "}
          <b>• Ama Accumulation: </b> Toxins obstruct the channels (srotas), leading to poor circulation and increased blood pressure.
        </ul>

        {/* Ayurvedic Management Approach  */}

        <h5 className="pb-3 font-bold">Ayurvedic Management Approach</h5>

        <ol className="list-decimal">
          {" "}
          <b>1. Dietary Adjustments: </b> Emphasize a balanced diet that pacifies Vata and Pitta, avoiding salty, spicy, and sour foods, and incorporating cooling and calming foods like cucumber, coconut water, and leafy teals.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>2. Regular Exercise: </b> Engage in moderate physical activities like walking, yoga, and specific asanas to improve circulation and balance doshas.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>3. Stress Management: </b> Practice meditation, pranayama (breathing exercises), and relaxation techniques to reduce stress and anxiety.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>4. Routine and Discipline </b>Follow a consistent daily routine (Dinacharya) and seasonal regimen (Ritucharya) to maintain doshic balance.
        </ol>
        <ol className="list-decimal">
          {" "}
          <b>5. Detoxification: </b>Regular detox practices (Panchakarma) to eliminate accumulated toxins and improve digestive fire.
        </ol>

        <h5 className="pb-3 font-bold text-base/4">
          1. Lifestyle Recommendations:
        </h5>
        <ul className="list-decimal">
          {" "}
          <b>o Abhyanga (Oil Massage): </b> Practice meditation, pranayama (breathing exercises), and relaxation techniques to reduce stress and anxietRegular self-massage with calming oils like sesame or coconut oil to balance Vata and Pittay.
        </ul>
        <ul className="list-decimal">
          {" "}
          <b>o Shirodhara: </b> A therapy involving the pouring of warm oil on the forehead, which helps in reducing stress and calming the mind.
        </ul>

        <h5 className="pb-3 font-bold">Conclusion</h5>

        <p className="pb-3 font-bold">
          From the Ayurvedic perspective, hypertension is caused by a combination of dietary habits, lifestyle choices, emotional well-being, genetic predispositions, and environmental exposures, leading to the imbalance of Vata and Pitta doshas and the accumulation of toxins. Managing these causes holistically through diet, lifestyle modifications, stress management, and detoxification can help in effectively preventing and treating hypertension.
        </p>
      </div>
      {/*form */}
      <DiseaseForm
        initialFormData={initialFormData}
        labels={labels}
        disease="hypertensions"
      />
    </Container>
  );
}
