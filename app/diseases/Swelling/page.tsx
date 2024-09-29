'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { Container, Button, Form } from "react-bootstrap";

export default function Page() {
  const [formData, setFormData] = useState({
    qsl1: '', qsl2: '', qsl3: '', qsl4: '', qsl5: '',
    qsl6: '', qsl7: '', qsl8: '', qsl9: '', qsl10: '',
    qsl11: '', qsl12: '', qsl13: '', qsl14: '', qsl15: '',
    qsl16: '', qsl17: '', qsl18: '', qsl19: '', qsl20: '',
    qsl21: '', qsl22: '', qsl23: '', qsl24: '', qsl25: '',
    qsl26: '', qsl27: '', qsl28: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/swelling`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Form was successfully submitted.");
      } else {
        throw new Error("Failed to submit form.");
      }
    } catch (error) {
      console.error('Error submitting form', error);
      alert(`Error submitting form`);
    }
  };

  return (
    <Container className="text-justify py-4">
      <h2 className="pb-3 font-bold">Swelling in the Legs or Ankles</h2>

      <div className="flex flex-row place-content-around py-5">
        <Image
          alt="Swelling in legs"
          src={require("./../../../public/images/swelling_1.jpeg")}
          className="h-60"
        />
        <Image
          alt="Swelling in ankles"
          src={require("./../../../public/images/swelling_2.jpeg")}
          className="h-60"
        />
      </div>

      <h2>Swelling in Legs and Ankles Assessment Form</h2>

      <h6>In Ayurveda, swelling in the legs or ankles, often referred to as "Shotha" or "Shvayathu," is understood through the balance and imbalance of the body's doshas (Vata, Pitta, and Kapha) and the accumulation of ama (toxins). Here are the causes and perspectives from an Ayurvedic point of view:</h6>
      
      <h6>Dosha Imbalances</h6>
      <ul>
        <li><strong>Vata Dosha:</strong>
          <ul>
            <li>Characteristics: Dryness, coldness, and movement.</li>
            <li>Imbalance Effects: When Vata is imbalanced, it can cause poor circulation and fluid retention, leading to swelling. This is often seen in conditions where there is dryness or emaciation of tissues.</li>
          </ul>
        </li>
        <li><strong>Pitta Dosha:</strong>
          <ul>
            <li>Characteristics: Heat, sharpness, and fluidity.</li>
            <li>Imbalance Effects: Excess Pitta can cause inflammation and heat, leading to swelling. This can be associated with infections, inflammatory conditions, or heat-related issues.</li>
          </ul>
        </li>
        <li><strong>Kapha Dosha:</strong>
          <ul>
            <li>Characteristics: Heaviness, coldness, and stagnation.</li>
            <li>Imbalance Effects: An increase in Kapha can lead to accumulation of fluids and congestion, causing swelling. This is often seen in conditions where there is heaviness, lethargy, and fluid retention.</li>
          </ul>
        </li>
      </ul>

      <h6>Specific Causes According to Ayurveda</h6>
      <ul>
        <li><strong>Diet and Lifestyle Factors:</strong>
          <ul>
            <li>Consuming foods that are heavy, oily, salty, or difficult to digest can increase Kapha and lead to fluid retention.</li>
            <li>Sedentary lifestyle, lack of exercise, and prolonged periods of inactivity can cause poor circulation and increase Kapha.</li>
            <li>Eating at irregular times, overeating, or consuming incompatible foods can lead to the formation of ama (toxins), which can block channels and cause swelling.</li>
          </ul>
        </li>
        <li><strong>Environmental Factors:</strong>
          <ul>
            <li>Exposure to cold and damp environments can aggravate Vata and Kapha, leading to swelling.</li>
            <li>Exposure to heat and toxins can aggravate Pitta, leading to inflammatory swelling.</li>
          </ul>
        </li>
        <li><strong>Emotional Factors:</strong>
          <ul>
            <li>Stress, anxiety, and unresolved emotional issues can disturb Vata, leading to poor circulation and fluid retention.</li>
            <li>Anger and frustration can aggravate Pitta, leading to inflammatory conditions.</li>
          </ul>
        </li>
      </ul>

      <h6>Ayurvedic Management and Remedies</h6>
      <ul>
        <li><strong>Dietary Changes:</strong>
          <ul>
            <li><strong>For Vata Imbalance:</strong> Include warm, moist, and grounding foods such as soups, stews, and spices like ginger and cinnamon. Avoid cold and dry foods.</li>
            <li><strong>For Pitta Imbalance:</strong> Include cooling and soothing foods such as cucumbers, melons, and dairy products. Avoid spicy and oily foods.</li>
            <li><strong>For Kapha Imbalance:</strong> Include light, warm, and dry foods such as grains, legumes, and spices like black pepper and turmeric. Avoid dairy, heavy, and oily foods.</li>
          </ul>
        </li>
        <li><strong>Lifestyle Modifications:</strong>
          <ul>
            <li>Regular exercise tailored to the individual's dosha, such as walking, yoga, and pranayama (breathing exercises).</li>
            <li>Adequate rest and maintaining a regular sleep schedule.</li>
            <li>Stress reduction through meditation, mindfulness, and relaxation techniques.</li>
          </ul>
        </li>
        <li><strong>Panchakarma Therapies:</strong> Detoxification and rejuvenation therapies such as Virechana (purgation therapy), Basti (medicated enemas), and Abhyanga (oil massage) to balance the doshas and clear the channels.</li>
        <li><strong>Local Applications:</strong> Applying warm herbal poultices or oils like sesame oil (for Vata), coconut oil (for Pitta), and mustard oil (for Kapha) can help reduce swelling.</li>
        <li><strong>Hydration and Circulation:</strong> Ensuring proper hydration and promoting good circulation through massage and movement can help alleviate swelling.</li>
      </ul>

      <h6>Ayurvedic Consultation</h6>
      <p>It is important to consult with a qualified Ayurvedic practitioner to determine the specific causes and appropriate treatments based on one's constitution (Prakriti) and current state of health (Vikriti).</p>


      <h5 className="pb-3 font-bold">Patient Information</h5>
      <Form>
        <Form.Group controlId="patientName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="patientName" />
        </Form.Group>
        <Form.Group controlId="patientAge">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="patientAge" />
        </Form.Group>
        <Form.Group controlId="patientSex">
          <Form.Label>Sex</Form.Label>
          <Form.Control type="text" name="patientSex" />
        </Form.Group>
        <Form.Group controlId="patientAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="patientAddress" />
        </Form.Group>
        <Form.Group controlId="patientContact">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" name="patientContact" />
        </Form.Group>
        <Form.Group controlId="patientOccupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" name="patientOccupation" />
        </Form.Group>
      </Form>

      <h5 className="pb-3 font-bold">Medical and Family History</h5>

      <Form onSubmit={handleSubmit}>
        <h6>1. Onset and Duration:</h6>
        <Form.Group controlId="qsl1">
          <Form.Label>When did the swelling start?</Form.Label>
          <Form.Control type="text" name="qsl1" value={formData.qsl1} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl2">
          <Form.Label>Is it constant or does it come and go?</Form.Label>
          <Form.Control type="text" name="qsl2" value={formData.qsl2} onChange={handleChange} />
        </Form.Group>

        <h6>2. Location and Symmetry:</h6>
        <Form.Group controlId="qsl3">
          <Form.Label>Is the swelling in one leg or both legs?</Form.Label>
          <Form.Control type="text" name="qsl3" value={formData.qsl3} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl4">
          <Form.Label>Is it localized to the ankles or does it extend up the legs?</Form.Label>
          <Form.Control type="text" name="qsl4" value={formData.qsl4} onChange={handleChange} />
        </Form.Group>

        <h6>3. Characteristics of Swelling:</h6>
        <Form.Group controlId="qsl5">
          <Form.Label>Does the swelling change throughout the day?</Form.Label>
          <Form.Control type="text" name="qsl5" value={formData.qsl5} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl6">
          <Form.Label>Does it improve with rest or elevation?</Form.Label>
          <Form.Control type="text" name="qsl6" value={formData.qsl6} onChange={handleChange} />
        </Form.Group>

        <h6>Associated Symptoms:</h6>
        <Form.Group controlId="qsl7">
          <Form.Label>Are you experiencing pain or discomfort in the swollen areas?</Form.Label>
          <Form.Control type="text" name="qsl7" value={formData.qsl7} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl8">
          <Form.Label>Is the skin over the swollen area red, warm, or tender?</Form.Label>
          <Form.Control type="text" name="qsl8" value={formData.qsl8} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl9">
          <Form.Label>Do you have shortness of breath, chest pain, or difficulty breathing?</Form.Label>
          <Form.Control type="text" name="qsl9" value={formData.qsl9} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl10">
          <Form.Label>Are you experiencing any unusual weight gain or loss?</Form.Label>
          <Form.Control type="text" name="qsl10" value={formData.qsl10} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl11">
          <Form.Label>Have you noticed any changes in urination, such as frequency or volume?</Form.Label>
          <Form.Control type="text" name="qsl11" value={formData.qsl11} onChange={handleChange} />
        </Form.Group>

        <h6>Medical History:</h6>
        <Form.Group controlId="qsl12">
          <Form.Label>Do you have a history of heart disease, hypertension, kidney disease, liver disease, or diabetes?</Form.Label>
          <Form.Control type="text" name="qsl12" value={formData.qsl12} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl13">
          <Form.Label>Have you been diagnosed with varicose veins or chronic venous insufficiency?</Form.Label>
          <Form.Control type="text" name="qsl13" value={formData.qsl13} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl14">
          <Form.Label>Are you currently taking any medications, including over-the-counter drugs and supplements?</Form.Label>
          <Form.Control type="text" name="qsl14" value={formData.qsl14} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl15">
          <Form.Label>Have you recently started or stopped any medications?</Form.Label>
          <Form.Control type="text" name="qsl15" value={formData.qsl15} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl16">
          <Form.Label>Do you have any known allergies?</Form.Label>
          <Form.Control type="text" name="qsl16" value={formData.qsl16} onChange={handleChange} />
        </Form.Group>

        <h6>Lifestyle and Social History:</h6>
        <Form.Group controlId="qsl17">
          <Form.Label>How much physical activity do you engage in daily?</Form.Label>
          <Form.Control type="text" name="qsl17" value={formData.qsl17} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl18">
          <Form.Label>Do you sit or stand for prolonged periods at work?</Form.Label>
          <Form.Control type="text" name="qsl18" value={formData.qsl18} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl19">
          <Form.Label>Have you traveled recently, especially long distances?</Form.Label>
          <Form.Control type="text" name="qsl19" value={formData.qsl19} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl20">
          <Form.Label>Do you smoke or consume alcohol?</Form.Label>
          <Form.Control type="text" name="qsl20" value={formData.qsl20} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsl21">
          <Form.Label>What is your typical diet like?</Form.Label>
          <Form.Control type="text" name="qsl21" value={formData.qsl21} onChange={handleChange} />
        </Form.Group>

        <h6>Family History:</h6>
        <Form.Group controlId="qsl22">
          <Form.Label>Is there a family history of swelling, heart disease, kidney disease, or other relevant conditions?</Form.Label>
          <Form.Control type="text" name="qsl22" value={formData.qsl22} onChange={handleChange} />
        </Form.Group>

        <h6>Additional Comments:</h6>
        <Form.Group controlId="qsl23">
          <Form.Label>Any other symptoms or information you would like to share?</Form.Label>
          <Form.Control as="textarea" name="qsl23" value={formData.qsl23} onChange={handleChange} />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </Container>
  );
}
