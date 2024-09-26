'use client'

import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import DiseasForm from "../diseases_components/DiseasForm";

const labels: { [key: string]: string } = {
  qh1: "Name",
  qh2: "Age",
  qh3: "Address",
  qh4: "Contact Number",
  qh5: "Gender",
  qh6: "Occupation",
  qh7: "Medical and Family History",
  qh8: "Where exactly is the pain located?",
  qh9: "Does the pain radiate to other parts of the body, such as the arm, neck, back or abdomen?",
  qh10: "How would you describe the pain (e.g. sharp, dull, crushing, burning, tightness)?",
  qh11: "Is it constant or intermittent?",
  qh12: "On a scale of 1 to 10, how severe is the pain?",
  qh13: "How long does the pain last?",
  qh14: "Is it continuous or does it come and go?",
  qh15: "What were you doing when the pain started?",
  qh16: "Does anything make the pain better or worse (e.g. rest, movement, deep breathing, eating)?",
  qh17: "Do you have any other symptoms, such as shortness of breath, sweating, nausea, vomiting, dizziness or palpitations?",
  qh18: "Do you have a history of heart disease, hypertension, diabetes, or high cholesterol?",
  qh19: "Have you experienced similar pain before?",
  qh23: "Are you taking any medications, including over-the-counter drugs and supplements?",
  qh24: "Do you have any known allergies, especially to medications?"
};

type DiseaseFormData = {
  [key: string]: string;
};

const initialFormData: DiseaseFormData = {
  qh1: '', qh2: '', qh3: '', qh4: '', qh5: '', qh6: '', qh7: '', qh8: '', qh9: '', qh10: '',
  qh11: '', qh12: '', qh13: '', qh14: '', qh15: '', qh16: '', qh17: '', qh18: '', qh19: '', qh20: '',
  qh21: '', qh22: '', qh23: '', qh24: ''
};

export default function Page() {

  return (
    <Container className="text-justify py-4 justify-center items-center text-base lg:text-xl antialiased">
      <h2 className="font-bold text-2xl sm:text-2xl">Chest Pain</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-4 mx-4">
        <div className="relative w-full sm:w-1/2 aspect-video overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out my-4 hover:scale-105">
          <Image
            alt="back-pain"
            src={require("./../../../public/images/ChestPain_1.png")}
            className="transition-opacity duration-300 ease-in-out hover:opacity-90"
            width={500}
            height={500}
          />
        </div>
        <div className="relative w-full sm:w-1/2 aspect-video overflow-hidden rounded-lg shadow-sm transition-transform duration-300 ease-in-out my-4 hover:scale-105">
          <Image
            alt="back-pain"
            src={require("./../../../public/images/ChestPain_2.png")}
            className="transition-opacity duration-300 ease-in-out hover:opacity-90"
            width={500}
            height={500}
          />
        </div>
      </div>

      <p>
        In Ayurveda, chest pain can be attributed to various imbalances in the
        body&apos;s doshas (biological energies), dhatus (tissues), and malas (waste
        products). While chest pain can have multiple causes, Ayurveda considers
        the following factors from its perspective:
      </p>
      <ol className="list-decimal">
        <li className="pb-3">
          <b>Imbalance of Doshas:</b> Ayurveda identifies three primary doshas—Vata, Pitta, and Kapha—and chest pain can result from disturbances in any of these doshas. For example:
        </li>
        <ul>
          <li className="pb-3">
            <b>Vata Imbalance:</b> Excessive Vata in the chest region can lead to symptoms such as sharp or shooting pains, gas, bloating, and irregular breathing patterns.
          </li>
          <li className="pb-3">
            <b>Pitta Imbalance:</b> Elevated Pitta dosha may manifest as burning or piercing chest pain, inflammation, acidity, and heartburn.
          </li>
          <li className="pb-3">
            <b>Kapha Imbalance:</b> A Kapha imbalance can cause chest heaviness, dull aching pain, congestion, and excess mucus production in the respiratory tract.
          </li>
        </ul>
        <li className="pb-3">
          <b>Impaired Digestion and Agni (Digestive Fire):</b> According to Ayurveda, impaired digestion can lead to the accumulation of toxins (ama) in the body, which can then manifest as various health problems, including chest pain. Poor digestion, weak agni, and the accumulation of ama can contribute to imbalances in the doshas and the development of conditions such as gastritis, acid reflux, or heartburn, which may present with chest discomfort.
        </li>
        <li className="pb-3">
          <b>Emotional Factors:</b> Ayurveda recognizes the interconnectedness of the mind and body, and emotional disturbances can influence physical health. Stress, anxiety, and unresolved emotional issues can lead to disturbances in the doshas and contribute to symptoms such as chest tightness, palpitations, and psychosomatic chest pain.
        </li>
        <li className="pb-3">
          <b>Dietary and Lifestyle Factors:</b> Unhealthy dietary habits, such as consuming excessively spicy, oily, or heavy foods, as well as lifestyle factors like sedentary behavior, inadequate rest, and irregular eating patterns, can disrupt the balance of doshas and contribute to digestive disturbances and chest discomfort.
        </li>
        <li className="pb-3">
          <b>Seasonal Influences:</b> Ayurveda considers seasonal variations and their impact on the body&apos;s doshic balance. Changes in weather, temperature, and humidity can affect susceptibility to certain health conditions, including respiratory issues and chest discomfort.
        </li>
        <li className="pb-3">
          <b>Pre-existing Health Conditions:</b> Underlying health conditions such as heart disease, respiratory disorders, gastrointestinal issues, or musculoskeletal problems can also cause chest pain. Ayurveda aims to address the root cause of these conditions by restoring balance to the doshas and supporting overall health and well-being.
        </li>
      </ol>

      <p>Ayurvedic management of chest pain involves identifying the underlying doshic imbalance and addressing it through a combination of dietary modifications, lifestyle adjustments, herbal remedies, detoxification therapies, stress management techniques, and supportive therapies tailored to the individual&apos;s constitution and specific imbalances. It&apos;s essential for individuals experiencing chest pain to seek medical evaluation to rule out serious medical conditions and to integrate Ayurvedic approaches as part of a comprehensive treatment plan under the guidance of qualified healthcare practitioners.</p>

      <p className="text-2xl font-semibold ">Treatments</p>

      <p>Ayurveda offers a holistic approach to managing chest pain by addressing the underlying imbalances in the body&apos;s doshas (biological energies), promoting digestive health, and supporting overall well-being. The treatment of chest pain in Ayurveda typically involves a combination of dietary modifications, lifestyle adjustments, herbal remedies, and supportive therapies. Here are some Ayurvedic treatments and recommendations for chest pain:</p>

      <ol  className="list-decimal">
        <li className="text-xl font-bold pb-3">Dietary Modifications:</li>
        <ul className="list-disc">
            <li className="pb-3">Follow a balanced diet that includes fresh, whole foods and avoids processed, heavy, or difficult-to-digest foods.</li>
            <li className="pb-3">Include warm, cooked meals that are easy on the digestive system, such as soups, steamed vegetables, whole grains, and herbal teas.</li>
            <li className="pb-3">Reduce intake of spicy, oily, and fried foods, as well as excessive caffeine and alcohol, which can aggravate Pitta dosha and contribute to chest discomfort.</li>
        </ul>
        <li className="text-xl font-bold pb-3">Herbal Remedies:</li>
        <ul className="list-disc">
            <li className="pb-3">Ayurvedic herbs with digestive and carminative properties can help alleviate chest pain associated with digestive disturbances. Examples include ginger, fennel, cumin, coriander, and cardamom.</li>
            <li className="pb-3">Herbal formulations may be prescribed for cardiovascular support and to maintain heart health.</li>
        </ul>
        <li className="text-xl font-bold pb-3">Lifestyle Adjustments:</li>
        <ul className="list-disc">
            <li className="pb-3">Practice regular physical activity, such as walking, yoga, or gentle exercises, to improve circulation, digestion, and overall health.</li>
            <li className="pb-3">Incorporate stress-reducing practices like meditation, deep breathing exercises (pranayama), or aromatherapy to promote relaxation and emotional well-being.</li>
            <li className="pb-3">Maintain a regular daily routine with adequate rest and sleep to support the body&apos;s natural rhythms and balance the doshas.</li>
        </ul>
        <li className="text-xl font-bold pb-3">Detoxification Therapies:</li>
        <ul className="list-disc">
            <li className="pb-3">Panchakarma therapies, including Virechana (therapeutic purgation) or Basti (medicated enema), may be recommended to eliminate toxins (ama) from the body and restore doshic balance.</li>
            <li className="pb-3">External therapies such as herbal oil massage (Abhyanga) or herbal steam therapy (Swedana) can help improve circulation, relieve muscle tension, and promote relaxation.</li>
        </ul>
        <li className="text-xl font-bold pb-3">Consultation with an Ayurvedic Practitioner:</li>
        <ul className="list-disc">
            <li className="pb-3">Since Ayurveda is highly individualized, it&apos;s important to consult with a qualified Ayurvedic practitioner who can assess your unique constitution, doshic imbalances, and specific symptoms of chest pain.</li>
            <li className="pb-3">The practitioner can then create a personalized treatment plan incorporating dietary recommendations, herbal remedies, lifestyle adjustments, and supportive therapies tailored to your needs and imbalances.</li>
        </ul>
      </ol>
      <p>It&apos;s important to note that while Ayurvedic approaches can be beneficial for managing mild to moderate chest pain associated with digestive disturbances or stress, individuals experiencing severe or persistent chest pain should seek immediate medical attention to rule out serious medical conditions such as heart disease or other cardiac issues. Ayurvedic treatments can complement conventional medical care as part of a comprehensive approach to chest pain management.</p>

      <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Chest Pain Assessment Form</h1>
        <DiseasForm initialFormData={initialFormData} labels={labels}/>
      </div>
    </Container>
  );
}
