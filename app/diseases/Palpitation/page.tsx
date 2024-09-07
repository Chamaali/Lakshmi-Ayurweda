'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";

export default function page() {

const [qp1, setQP1] = useState('');
const [qp2, setQP2] = useState('');
const [qp3, setQP3] = useState('');
const [qp4, setQP4] = useState('');
const [qp5, setQP5] = useState('');
const [qp6, setQP6] = useState('');
const [qp7, setQP7] = useState('');
const [qp8, setQP8] = useState('');
const [qp9, setQP9] = useState('');
const [qp10, setQP10] = useState('');
const [qp11, setQP11] = useState('');
const [qp12, setQP12] = useState('');
const [qp13, setQP13] = useState('');
const [qp14, setQP14] = useState('');
const [qp15, setQP15] = useState('');
const [qp16, setQP16] = useState('');
const [qp17, setQP17] = useState('');
const [qp18, setQP18] = useState('');
const [qp19, setQP19] = useState('');
const [qp20, setQP20] = useState('');
const [qp21, setQP21] = useState('');
const [qp22, setQP22] = useState('');
const [qp23, setQP23] = useState('');
const [qp24, setQP24] = useState('');
const [qp25, setQP25] = useState('');
const [qp26, setQP26] = useState('');
const [qp27, setQP27] = useState('');
const [qp28, setQP28] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/hypertensions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        qp1, qp2, qp3, qp4, qp5, qp6, qp7, qp8, qp9, qp10,
        qp11, qp12, qp13, qp14, qp15, qp16, qp17, qp18, qp19, qp20,
        qp21, qp22, qp23, qp24, qp25, qp26, qp27, qp28
      }),
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

    return (

      

        <Container className="text-justify py-4" onSubmit={handleSubmit}  > 

<h2 className="pb-3 font-bold"> Palpitation</h2> 

{/* images*/}
        
            
<div className="flex flex-row place-content-around py-5">
<Image
  alt="Hypertension"
  src={require("./../../../public/images/pal_1.jpeg")}
  className=" h-60"
/>
<Image
  alt="Hypertension"
  src={require("./../../../public/images/pal_2.jpg")}
  className="h-60"
/>


</div>
{/*Introduction*/}

<p  className="pb-3 font-bold">
In Ayurveda, palpitations, often referred to as "Hrudgata Vata" or "Hrudroga," are understood through the balance and imbalance of the body's doshas (Vata, Pitta, and Kapha) and the overall state of the heart and nervous system. Here are some causes and perspectives from an Ayurvedic point of view: 

</p>

{/* Dosha Imbalances  */}

<h5 className="pb-3 font-bold">Dosha Imbalances 
            </h5>

            <ol className="list-decimal"> <b>1.	Vata Dosha: </b> </ol>
             <ol><b>• Characteristics: </b>Dryness, coldness, and movement. </ol>
             <ol><b>• Imbalance Effects: </b>When Vata is aggravated, it can disturb the normal rhythmic function of the heart, leading to palpitations. This may be due to factors such as stress, anxiety, or irregular lifestyle habits.</ol>

             <ol className="list-decimal"> <b>2.	Pitta Dosha:  </b> </ol>
             <ol><b>• Characteristics: </b>Heat, intensity, and sharpness.  </ol>
             <ol><b>• Imbalance Effects: </b>Excess Pitta can lead to inflammation and hyperactivity, affecting the heart's electrical system and causing palpitations. Pitta-related emotions like anger and frustration can also aggravate palpitations. </ol>

             <ol className="list-decimal"> <b>3.	Kapha Dosha:  </b> </ol>
             <ol><b>• Characteristics: </b>Heaviness, coldness, and stability.  </ol>
             <ol><b>• Imbalance Effects: </b>When Kapha is increased, it can lead to congestion and stagnation, affecting the circulation and heart function. This may manifest as palpitations accompanied by a feeling of heaviness in the chest. </ol>
            

{/* Specific Causes According to Ayurveda  */}

<h5 className="pb-3 font-bold">Specific Causes According to Ayurveda 
            </h5>

            <ol className="list-decimal"> <b>1.	Diet and Lifestyle Factors:  </b> </ol>
             <ol> • Consuming foods that aggravate Vata or Pitta dosha, such as dry, cold, or spicy foods, can disturb the heart's rhythm.  </ol>
             <ol> • Irregular eating habits, excessive fasting, or overeating can also contribute to imbalances and palpitations. </ol>
             <ol> • Sedentary lifestyle, lack of exercise, and excessive physical exertion can disturb the balance of doshas and affect heart health.  </ol>


             <ol className="list-decimal"> <b>2.	Emotional Factors: </b> </ol>
             <ol>• Stress, anxiety, fear, and other strong emotions can disturb Vata dosha and trigger palpitations.  </ol>
             <ol>• Pitta-related emotions like anger and resentment can create heat in the body, aggravating palpitations. </ol>
             


             <ol className="list-decimal"> <b>3.	Environmental Factors:  </b> </ol>
             <ol>• Exposure to cold, dry, or windy weather can aggravate Vata dosha and increase the risk of palpitations.  </ol>
             <ol>• Exposure to heat or intense sunlight can aggravate Pitta dosha and exacerbate palpitations.  </ol>
            
{/* Ayurvedic Management and Remedies   */}

<h5 className="pb-3 font-bold">Ayurvedic Management and Remedies 
            </h5>

            <ol className="list-decimal"> <b>1.	Dietary Changes: </b> </ol>
             <ol><b>• For Vata Imbalance:  </b>Include warm, nourishing, and grounding foods such as soups, stews, cooked grains, and root vegetables. Avoid dry, cold, and raw foods.  </ol>

             <ol><b>• For Pitta Imbalance:  </b>Include light, warm, and easily digestible foods such as steamed vegetables, whole grains, legumes, and spices like ginger and black pepper. Avoid heavy, oily, and sweet foods. </ol>

             <ol><b>• For Kapha Imbalance:</b>Include cooling and soothing foods such as fresh fruits, vegetables, dairy products, and herbal teas. Avoid spicy, oily, and fried foods. </ol>



             <ol className="list-decimal"> <b>2.	Lifestyle Modifications:   </b> </ol>
             <ol>• Establishing a regular daily routine that includes adequate rest, exercise, and relaxation practices can help balance the doshas and support heart health.  </ol>
             <ol>• Practicing stress-reducing techniques such as meditation, deep breathing exercises, and yoga can help calm the mind and reduce emotional triggers for palpitations.  </ol>

             <ol className="list-decimal"> <b>3.Panchakarma Therapies: </b> </ol>
             <ol>• Detoxification and rejuvenation therapies such as Abhyanga (oil massage), Shirodhara (oil pouring on the forehead), and Nasya (nasal administration of medicated oils) may be prescribed to balance the doshas and promote overall well-being.  </ol>

             <ol className="list-decimal"> <b>4.Pranayama and Yoga:  </b> </ol>
             <ol>• Practices such as Pranayama (breathing exercises) and specific yoga asanas (postures) can help regulate the breath, calm the mind, and strengthen the heart and circulatory system.  </ol>

    <p>It's important to consult with a qualified Ayurvedic practitioner to determine the specific causes of palpitations and to receive personalized recommendations for treatment and lifestyle modifications based on individual constitution and imbalances. 

</p>



 {/*form */}

<form action="" className="p-4 bg-gray-50 rounded border shadow">
  <div className="grid gap-y-4">
    <div className="form-group list-decimal">
      <label>Name</label>
      <input placeholder="" value={qp1} onChange={(e) => setQP1(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Age</label>
      <input placeholder="" value={qp2} onChange={(e) => setQP2(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Gender</label>
      <input placeholder="" value={qp3} onChange={(e) => setQP3(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Address</label>
      <input placeholder="" value={qp4} onChange={(e) => setQP4(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Contact Number</label>
      <input placeholder="" value={qp5} onChange={(e) => setQP5(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Occupation</label>
      <input placeholder="" value={qp6} onChange={(e) => setQP6(e.target.value)} className="form-control" />
    </div>
    <h5><b>MEDICAL AND FAMILY HISTORY</b></h5>
    

    <h5><b>Onset and Duration </b> </h5>
    <div className="form-group">
      <label>When did you first notice the palpitations? </label>
      <input placeholder="" value={qp7} onChange={(e) => setQP7(e.target.value)} className="form-control" />
    </div>
    <h6><b>How long do the palpitations last? </b></h6>
    <div className="form-group">
      <label>Are they brief (seconds to minutes) or prolonged (minutes to hours)? </label>
      <input placeholder="" value={qp8} onChange={(e) => setQP8(e.target.value)} className="form-control" />
    </div>

    
    <h5><b>Nature of Palpitations </b> </h5>
    <h6><b>Can you describe what the palpitations feel like? </b></h6>

    <div className="form-group">
      <label>Are they pounding, fluttering, or racing? </label>
      <input placeholder="" value={qp9} onChange={(e) => setQP9(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you feel like your heart is skipping beats? </label>
      <input placeholder="" value={qp10} onChange={(e) => setQP10(e.target.value)} className="form-control" />
    </div>


    <h5><b>Frequency and Triggers </b> </h5>
    <h6><b>How often do the palpitations occur?  </b></h6>
    <div className="form-group">
      <label>Are they occasional or frequent? </label>
      <input placeholder="" value={qp11} onChange={(e) => setQP11(e.target.value)} className="form-control" />
    </div>
    <h6><b>Are there specific triggers that seem to bring on the palpitations?   </b></h6>
    <div className="form-group">
      <label>Do they occur during exercise, stress, or at rest? </label>
      <input placeholder="" value={qp12} onChange={(e) => setQP12(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Are they related to consumption of caffeine, alcohol, or certain foods? </label>
      <input placeholder="" value={qp13} onChange={(e) => setQP13(e.target.value)} className="form-control" />
    </div>



    <h5><b>Associated Symptoms  </b> </h5>
    <h6><b>Do you experience any other symptoms with the palpitations?    </b></h6>
    <div className="form-group">
      <label>Chest pain or discomfort? </label>
      <input placeholder="" value={qp14} onChange={(e) => setQP14(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Shortness of breath? </label>
      <input placeholder="" value={qp15} onChange={(e) => setQP15(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Dizziness or lightheadedness? </label>
      <input placeholder="" value={qp16} onChange={(e) => setQP16(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Fainting or near-fainting episodes? </label>
      <input placeholder="" value={qp16} onChange={(e) => setQP16(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label><b>Do you notice any swelling in your legs or ankles? </b></label>
      <input placeholder="" value={qp16} onChange={(e) => setQP16(e.target.value)} className="form-control" />
    </div>
    



    <h5><b>Medical History </b> </h5>
    <div className="form-group">
      <label>Do you have a history of heart disease, such as arrhythmias, heart failure, or myocardial infarction? </label>
      <input placeholder="" value={qp17} onChange={(e) => setQP17(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have any other chronic conditions, such as thyroid disease, anemia, or hypertension? </label>
      <input placeholder="" value={qp18} onChange={(e) => setQP18(e.target.value)} className="form-control" />
    </div>
    <h5><b>Medications and Supplements  </b> </h5>
    <div className="form-group">
      <label>Are you currently taking any medications, including over-the-counter drugs and supplements? </label>
      <input placeholder="" value={qp19} onChange={(e) => setQP19(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you recently started or stopped any medications? </label>
      <input placeholder="" value={qp20} onChange={(e) => setQP20(e.target.value)} className="form-control" />
    </div>

    <h5><b>Lifestyle and Social History  </b> </h5>

    <div className="form-group">
      <label>Do you smoke or use tobacco products? </label>
      <input placeholder="" value={qp21} onChange={(e) => setQP21(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you consume alcohol or use recreational drugs? </label>
      <input placeholder="" value={qp22} onChange={(e) => setQP22(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>How much caffeine do you consume daily (e.g., coffee, tea, energy drinks)? </label>
      <input placeholder="" value={qp23} onChange={(e) => setQP23(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you experience high levels of stress or anxiety? </label>
      <input placeholder="" value={qp24} onChange={(e) => setQP24(e.target.value)} className="form-control" />
    </div>

    <h5><b>Recent Changes and Events   </b> </h5>


    <div className="form-group">
      <label>Have there been any recent changes in your health, lifestyle, or stress levels? </label>
      <input placeholder="" value={qp25} onChange={(e) => setQP25(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you had any recent illnesses or infections? </label>
      <input placeholder="" value={qp26} onChange={(e) => setQP26(e.target.value)} className="form-control" />
    </div>
  
  </div>
  <div className="gap-5 flex justify-end pt-5">
    <button type="submit" className="bg-blue-600 py-2 px-3 rounded text-white">
      Submit
    </button>
  </div>
</form>
   
            

    
    
    </Container>
    )    
}


