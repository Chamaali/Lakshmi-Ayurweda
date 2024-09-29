import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import ImageContainer from "../diseases_components/ImageContainer";
import DiseasForm from "../diseases_components/DiseasForm";

type Labels = { [key: string]: string };

const labels: Labels = {
  qh1: "Name",
  qh2: "Age",
  qh3: "Address",
  qh4: "Phone",
  qh5: "Email",
  qh6: "Where exactly is the pain located?",
  qh7: "How long have you been experiencing this pain?",
  qh8: "Did it start suddenly or gradually?",
  qh9: "How would you describe the pain (sharp, dull throbbing, burning)?",
  qh10: "Is the pain constant or does it come and go?",
  qh11: "What is the severity of the pain on a scale of 1 to 10?",
  qh12: "Does anything make the pain better or worse (e.g., certain movements, rest, medications)?",
  qh13: "Does the pain interfere with your daily activities or sleep?",
  qh14: "Have you experienced any limitations in movement or function due to the pain?",
  qh15: "Do you have any numbness, tingling, or weakness in your legs?",
  qh16: "Have you noticed any changes in bowel or bladder function?",
  qh17: "Have you had any previous episodes of back pain or related issues?",
  qh18: "Please provide more details regarding the pain pattern.",
  qh19: "Have you tried any treatment methods? If so, what?",
  qh20: "Are you currently taking any medications for the pain?",
  qh21: "Has the pain affected your mental health?",
  qh22: "Would you like to share any other details about your condition?"
};

type DiseaseFormData = {
    [key: string]: string;
  };
  
  const initialFormData: DiseaseFormData = {
    qh1: '', qh2: '', qh3: '', qh4: '', qh5: '', qh6: '', qh7: '', qh8: '', qh9: '', qh10: '',
    qh11: '', qh12: '', qh13: '', qh14: '', qh15: '', qh16: '', qh17: '', qh18: '', qh19: '', qh20: '',qh21: '', qh22: ''
  };
  

export default function page() {
  return (
    <Container className="text-justify py-4">
        <ImageContainer topic="Back Pain" first_image="/images/BackPain_1.png" second_image="/images/BackPain_2.png"/>
      <p>In Ayurveda, back pain can be related to various underlying imbalances or conditions, including those affecting the musculoskeletal system, nervous system, and overall energy balance of the body. Here are some common conditions that may be associated with back pain in Ayurveda:</p>
    {/* <ol>

    </ol> */}
        <ol className="list-decimal">
            <li className="pb-3"><b>Vata Imbalance:</b> According to Ayurveda, back pain often arises due to an excess of Vata dosha, which governs movement and the nervous system. When Vata is aggravated, it can lead to symptoms such as stiffness, dryness, and pain in the back.</li>
            <li className="pb-3"><b>Sandhivata (Osteoarthritis):</b> Sandhivata is an Ayurvedic term for osteoarthritis, a degenerative joint disease characterized by the breakdown of cartilage and bones in the joints. Osteoarthritis commonly affects weight-bearing joints like the knees, hips, and spine, leading to pain, stiffness, and limited mobility in the back.</li>
            <li className="pb-3"><b>Kati Shoola (Low Back Pain):</b> Kati Shoola refers to low back pain in Ayurveda, which can be caused by various factors such as muscle strain, disc herniation, spinal stenosis, or degenerative changes in the spine. Poor posture, sedentary lifestyle,may be kidney disease and excessive physical exertion can contribute to Kati Shoola.</li>
            <li className="pb-3"><b>Grudhrasi (Sciatica):</b> Sciatica is a condition characterized by pain that radiates along the sciatic nerve, which runs from the lower back down the back of each leg. In Ayurveda, sciatica is known as Grudhrasi and is often attributed to Vata aggravation and compression of the nerve roots in the lumbar spine.</li>
            <li className="pb-3"><b>Ama Vata (Toxic Vata):</b> Ama Vata refers to the accumulation of toxins (ama) and Vata imbalance in the body, leading to symptoms such as joint pain, stiffness, and inflammation, including back pain. Poor digestion, improper diet, and lifestyle factors contribute to the accumulation of ama in the body.</li>
            <li className="pb-3"><b>Pichu (Disc Degeneration):</b> Pichu is an Ayurvedic term for disc degeneration, which occurs when the intervertebral discs in the spine deteriorate over time due to aging, injury, or wear and tear. Disc degeneration can lead to conditions like disc bulge, herniation, or spinal instability, resulting in back pain and discomfort.</li>
        </ol>

        <p></p>

        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Back Pain Assessment Form</h1>
            <DiseasForm initialFormData={initialFormData} labels={labels} />
            
        </div>

    </Container>
  );
}
