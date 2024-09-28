'use client';
import Image from "next/image";
import React, { useState } from 'react';
import { Container, Button, Form } from "react-bootstrap";

export default function Page() {
  const [formData, setFormData] = useState({
    qsb1: '', qsb2: '', qsb3: '', qsb4: '', qsb5: '',
    qsb6: '', qsb7: '', qsb8: '', qsb9: '', qsb10: '',
    qsb11: '', qsb12: '', qsb13: '', qsb14: '', qsb15: '',
    qsb16: '', qsb17: '', qsb18: '', qsb19: '', qsb20: '',
    qsb21: '', qsb22: '', qsb23: '', qsb24: '', qsb25: '',
    qsb26: '', qsb27: '', qsb28: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/shortnessOfBreath`, {
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
      <h2 className="pb-3 font-bold">Shortness of Breath</h2>

      <div className="flex flex-row place-content-around py-5">
        <Image
          alt="Shortness of Breath"
          src={require("./../../../public/images/SOB_1.jpeg")}
          className="h-60"
        />
        <Image
          alt="Shortness of Breath"
          src={require("./../../../public/images/SOB_2.jpeg")}
          className="h-60"
        />
      </div>

      <p className="pb-3 font-bold">
        In Ayurveda, shortness of breath, often referred to as "Shwasa Roga," is understood through the balance and imbalance of the body's doshas (Vata, Pitta, and Kapha) and the overall prana (life force).
      </p>

      <h5 className="pb-3 font-bold">Dosha Imbalances</h5>
      <ol className="list-decimal">
        <li><b>Vata Dosha:</b> Dryness, cold, and movement. An aggravated Vata can lead to constriction of the airways.</li>
        <li><b>Pitta Dosha:</b> Heat, sharpness, and intensity. Excess Pitta can cause inflammation in the respiratory system.</li>
        <li><b>Kapha Dosha:</b> Heaviness, cold, and stagnation. An increase in Kapha can result in mucus accumulation.</li>
      </ol>

      <h5 className="pb-3 font-bold">Symptoms of Shortness of Breath</h5>
      <p>
        Common symptoms associated with shortness of breath include:
      </p>
      <ul className="list-disc pl-5">
        <li>Difficulty in breathing or a sensation of breathlessness.</li>
        <li>Feeling of tightness in the chest.</li>
        <li>Wheezing or coughing.</li>
        <li>Increased heart rate.</li>
        <li>Fatigue or exhaustion.</li>
      </ul>

      <h5 className="pb-3 font-bold">Possible Causes</h5>
      <p>
        Shortness of breath can arise from various causes, including:
      </p>
      <ul className="list-disc pl-5">
        <li>Respiratory diseases (e.g., asthma, COPD).</li>
        <li>Cardiac issues (e.g., heart failure).</li>
        <li>Allergies or environmental factors.</li>
        <li>Stress and anxiety.</li>
        <li>Obesity and sedentary lifestyle.</li>
      </ul>

      <h5 className="pb-3 font-bold">Treatment and Management</h5>
      <p>
        Effective treatment and management strategies may include:
      </p>
      <ul className="list-disc pl-5">
        <li>Breathing exercises and pranayama.</li>
        <li>Herbal remedies tailored to the individual's dosha.</li>
        <li>A balanced diet to reduce inflammation and support lung function.</li>
        <li>Regular physical activity and yoga.</li>
        <li>Stress management techniques, including meditation and mindfulness.</li>
      </ul>

      
      <Form onSubmit={handleSubmit}>
        <h5 className="pb-3 font-bold">PATIENT INFORMATION</h5>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={formData.qsb22} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="age" value={formData.qsb23} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="sex">
          <Form.Label>Sex</Form.Label>
          <Form.Control type="text" name="sex" value={formData.qsb24} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" name="address" value={formData.qsb24} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="contactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" name="contactNumber" value={formData.qsb25} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="occupation">
          <Form.Label>Occupation</Form.Label>
          <Form.Control type="text" name="occupation" value={formData.qsb27} onChange={handleChange} />
        </Form.Group>

        <h5 className="pb-3 font-bold">1. MEDICAL AND FAMILY HISTORY</h5>

        <h6>1. Onset and Duration:</h6>
        <Form.Group controlId="qsb1">
          <Form.Label>When did the shortness of breath start?</Form.Label>
          <Form.Control type="text" name="qsb1" value={formData.qsb1} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb2">
          <Form.Label>Is it sudden or gradual?</Form.Label>
          <Form.Control type="text" name="qsb2" value={formData.qsb2} onChange={handleChange} />
        </Form.Group>

        <h6>2. Nature of Breathlessness:</h6>
        <Form.Group controlId="qsb3">
          <Form.Label>Is it constant or does it come and go?</Form.Label>
          <Form.Control type="text" name="qsb3" value={formData.qsb3} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb4">
          <Form.Label>Are there specific triggers or situations that make it worse (e.g., exercise, lying down, exposure to allergens)?</Form.Label>
          <Form.Control type="text" name="qsb4" value={formData.qsb4} onChange={handleChange} />
        </Form.Group>

        <h6>3. Associated Symptoms:</h6>
        <Form.Group controlId="qsb5">
          <Form.Label>Are you experiencing chest pain or tightness?</Form.Label>
          <Form.Control type="text" name="qsb5" value={formData.qsb5} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb6">
          <Form.Label>Do you have a cough? If so, is it dry or productive (producing mucus)?</Form.Label>
          <Form.Control type="text" name="qsb6" value={formData.qsb6} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb7">
          <Form.Label>Do you have wheezing or a high-pitched sound when breathing?</Form.Label>
          <Form.Control type="text" name="qsb7" value={formData.qsb7} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb8">
          <Form.Label>Are there any associated symptoms like fever, swelling in the legs, or weight loss?</Form.Label>
          <Form.Control type="text" name="qsb8" value={formData.qsb8} onChange={handleChange} />
        </Form.Group>

        <h6>4. Severity:</h6>
        <Form.Group controlId="qsb9">
          <Form.Label>How severe is the shortness of breath? Can you describe it on a scale from 1 to 10?</Form.Label>
          <Form.Control type="number" name="qsb9" value={formData.qsb9} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb10">
          <Form.Label>How does it affect your daily activities?</Form.Label>
          <Form.Control type="text" name="qsb10" value={formData.qsb10} onChange={handleChange} />
        </Form.Group>

        <h5 className="pb-3 font-bold">Medical History</h5>

        <h6>5. Previous Medical Conditions:</h6>
        <Form.Group controlId="qsb11">
          <Form.Label>Do you have a history of respiratory conditions like asthma, chronic obstructive pulmonary disease (COPD), or bronchitis?</Form.Label>
          <Form.Control type="text" name="qsb11" value={formData.qsb11} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb12">
          <Form.Label>Do you have a history of heart conditions, such as heart failure, coronary artery disease, or arrhythmias?</Form.Label>
          <Form.Control type="text" name="qsb12" value={formData.qsb12} onChange={handleChange} />
        </Form.Group>

        <h6>6. Medications:</h6>
        <Form.Group controlId="qsb13">
          <Form.Label>Are you taking any medications, including over-the-counter drugs and supplements?</Form.Label>
          <Form.Control type="text" name="qsb13" value={formData.qsb13} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb14">
          <Form.Label>Have you recently started or stopped any medications?</Form.Label>
          <Form.Control type="text" name="qsb14" value={formData.qsb14} onChange={handleChange} />
        </Form.Group>

        <h6>7. Allergies:</h6>
        <Form.Group controlId="qsb15">
          <Form.Label>Do you have any known allergies?</Form.Label>
          <Form.Control type="text" name="qsb15" value={formData.qsb15} onChange={handleChange} />
        </Form.Group>

        <h5 className="pb-3 font-bold">Lifestyle and Social History</h5>

        <h6>8. Smoking and Substance Use:</h6>
        <Form.Group controlId="qsb16">
          <Form.Label>Do you smoke or have you ever smoked? If so, how much and for how long?</Form.Label>
          <Form.Control type="text" name="qsb16" value={formData.qsb16} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb17">
          <Form.Label>Do you use recreational drugs or alcohol?</Form.Label>
          <Form.Control type="text" name="qsb17" value={formData.qsb17} onChange={handleChange} />
        </Form.Group>

        <h6>9. Occupational and Environmental Exposure:</h6>
        <Form.Group controlId="qsb18">
          <Form.Label>Are you exposed to dust, chemicals, or pollutants at work or home?</Form.Label>
          <Form.Control type="text" name="qsb18" value={formData.qsb18} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb19">
          <Form.Label>Do you have any pets?</Form.Label>
          <Form.Control type="text" name="qsb19" value={formData.qsb19} onChange={handleChange} />
        </Form.Group>

        <h5 className="pb-3 font-bold">Recent Activities and Travel</h5>

        <h6>10. Recent Illnesses or Infections:</h6>
        <Form.Group controlId="qsb20">
          <Form.Label>Have you had any recent infections or illnesses?</Form.Label>
          <Form.Control type="text" name="qsb20" value={formData.qsb20} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="qsb21">
          <Form.Label>Have you traveled recently? If so, where?</Form.Label>
          <Form.Control type="text" name="qsb21" value={formData.qsb21} onChange={handleChange} />
        </Form.Group>

        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
