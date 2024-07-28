'use client'

import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";

export default function page() {


    const [qc1, setQC1] = useState('');
    const [qc2, setQC2] = useState('');
    const [qc3, setQC3] = useState('');
    const [qc4, setQC4] = useState('');
    const [qc5, setQC5] = useState('');
    const [qc6, setQC6] = useState('');
    const [qc7, setQC7] = useState('');
    const [qc8, setQC8] = useState('');
    const [qc9, setQC9] = useState('');
    const [qc10, setQC10] = useState('');
    const [qc11, setQC11] = useState('');
    const [qc12, setQC12] = useState('');
    const [qc13, setQC13] = useState('');
    const [qc14, setQC14] = useState('');
    const [qc15, setQC15] = useState('');
    const [qc16, setQC16] = useState('');
    const [qc17, setQC17] = useState('');
    const [qc18, setQC18] = useState('');
    const [qc19, setQC19] = useState('');
    const [qc20, setQC20] = useState('');
    const [qc21, setQC21] = useState('');
    const [qc22, setQC22] = useState('');
    const [qc23, setQC23] = useState('');
    const [qc24, setQC24] = useState('');
    const [qc25, setQC25] = useState('');
    const [qc26, setQC26] = useState('');
    const [qc27, setQC27] = useState('');
    const [qc28, setQC28] = useState('');
    const [qc29, setQC29] = useState('');
    const [qc30, setQC30] = useState('');
    const [qc31, setQC31] = useState('');
     
    const handleSubmit= async(e: React.FormEvent) => {

      try{
        const res = await fetch (`${process.env.NEXT_PUBLIC_BASE_URL}/api/cholesterol)`, {
                method: "POST",

                headers:{
                  "Content-Type":"application/json",
                },
                  body: JSON.stringify({
                    qc1, qc2, qc3, qc4, qc5, qc6, qc7, qc8, qc9, qc10, qc11, qc12, qc13, qc14, qc15, qc16, qc17, qc18, qc19, qc20, qc21, qc22, qc23, qc24,qc25,qc26,qc27,qc28,qc29,qc30,qc31
                  }),
        });
        if (res.ok) {
          alert("Form was successfully submitted.");
          console.log("Form was successfully submitted.")
      } else {
          throw new Error("Failed to submit form.");
      }






      } catch (error) {
        console.error('Error submiting of chest pain form', error);
        alert(`Error submitting form`);
    }

    }





    return (
      <Container className="text-justify py-4"onSubmit={handleSubmit}>
        <h2 className="pb-3 font-bold"> Cholesterol</h2>
        
        <div className="flex flex-row place-content-around py-5">
                <Image
                  alt="back-pain"
                  src={require("./../../../public/images/Chole_1.png")}
                  className=" h-60"
                />
                <Image
                  alt="back-pain"
                  src={require("./../../../public/images/Chole_2.png")}
                  className="h-60"
                />
              </div>
        
              <p className="pb-3 font-bold">
              Hypercholesterolemia, or high cholesterol, is addressed in Ayurveda by focusing on balancing the body's doshas, particularly Kapha, and improving the functioning of the digestive system (Agni). Here's a detailed look at how Ayurveda approaches hypercholesterolemia:
        
              </p>
        
                 {/* <ol>
        
            </ol> */}
            <h5 className="pb-3 font-bold">Ayurvedic Perspective on Hypercholesterolemia
            </h5>
              <ol className="list-decimal">
                <li className="pb-3">
                  <b>Dosha Imbalance:</b> 
                </li>
                <ul>
                  <li className="pb-3">
                   
                    <b>Kapha Dosha:</b> High cholesterol is primarily linked to an imbalance in Kapha dosha, which governs the structure, lubrication, and stability in the body. Excess Kapha leads to the accumulation of fatty tissues and blockages in the body's channels (srotas).
        
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
                  <b>Lifestyle: </b>Sedentary lifestyle, lack of physical activity, and high-stress levels.
                </li>
                <li className="pb-3">
                  <b>Digestive Issues: </b>Weak digestive fire (Agni) leading to improper metabolism and accumulation of Ama (toxins).
        
                </li>
                </ul>
        
                <li className="pb-3">
                  <b> Symptoms: </b> 
                </li>
                <ul>
                <li className="pb-3">
                Heaviness in the body
                </li>
                <li className="pb-3">
                Lethargy and fatigue
                </li>
                <li className="pb-3">
                Breathlessness
                </li>
                <li className="pb-3">
                Digestive issues such as sluggish digestion
                </li>
                <li className="pb-3">
                Obesity or weight gain
        
                </li>
                </ul>
              
              </ol>
        
               {/* <ol>
        
            </ol> */}
            <h5 className="pb-3 font-bold">Ayurvedic Management Strategies
            </h5>
              <ol className="list-decimal">
                <li className="pb-3">
                  <b>Dietary Recommendations:</b> 
                </li>
                <ul>
                  <li className="pb-3">
                  <b>Kapha-pacifying Diet:</b> Emphasize light, warm, and easily digestible foods.
                  </li>
                  <li className="pb-3">
                  <b>Avoid:  </b>Heavy, oily, and greasy foods; dairy products; sweets; red meat; processed foods.
                  </li>
                  <li className="pb-3">
                  <b>Include: </b>
                        <ul>
                            <li className="pb-3">
                            <b>Vegetables:</b> Leafy greens, cruciferous vegetables.
                            </li>
        
                            <li className="pb-3">
                            <b>Fruits:  </b>Apples, pears, pomegranates.
        
                            </li>
                            <li className="pb-3">
                            <b>Grains: </b>Barley, millet, quinoa.
        
                            </li>
                            <li className="pb-3">
                            <b>Legumes: </b>Lentils, mung beans.
        
                            </li>
                            <li className="pb-3">
                            <b>Spices: </b>Turmeric, ginger, garlic, black pepper, cinnamon to enhance digestion and reduce Kapha.
        
        
                            </li>
                            
                            
                        </ul> 
                
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
                  <b>Daily Routine (Dinacharya):  </b>Establish a consistent daily routine including waking up early, tongue scraping, oil pulling, self-massage (Abhyanga) with warming oils, and maintaining regular meal times.
        
        
                </li>
                </ul>
        
        
            <li className="pb-3">
                  <b>Detoxification Practices (Panchakarma):
                  </b> 
            </li>
                <ul>
                <li className="pb-3">
                   <b>Virechana: </b> Therapeutic purgation to eliminate toxins and balance doshas.
        
        
                </li>
                <li className="pb-3">
                  <b>Basti:</b> Medicated enemas to cleanse the colon and improve overall health.
        
                </li>
                <li className="pb-3">
                  <b>Udvarthana: </b>Herbal powder massage to reduce excess fat and improve skin tone.
        
        
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
                  <b>Nasya:</b>Administration of medicated oils through the nasal passages to enhance overall health and 
                </li>
                </ul>    
               
              
              </ol>
        
              <p className="pb-3 ">
              Ayurvedic management of hypercholesterolemia involves a holistic approach aimed at balancing the body's doshas, particularly Kapha, improving digestive fire (Agni), and eliminating toxins (Ama). This approach includes dietary modifications, herbal remedies, lifestyle changes, and detoxification therapies. Regular consultation with an Ayurvedic practitioner is essential to tailor treatments to individual needs and ensure effective management of high cholesterol.
        
              </p> 
        
              <form action="" className="p-4 bg-gray-50 rounded border shadow">
          <div className="grid gap-y-4">
            <div className="form-group list-decimal">
              <label>Name</label>
              <input placeholder="" value={qc1} onChange={(e) => setQC1(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input placeholder="" value={qc2} onChange={(e) => setQC2(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Sex</label>
              <input placeholder="" value={qc3} onChange={(e) => setQC3(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input placeholder="" value={qc4} onChange={(e) => setQC4(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input placeholder="" value={qc5} onChange={(e) => setQC5(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Contact Number</label>
              <input placeholder="" value={qc6} onChange={(e) => setQC6(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Occupation</label>
              <input placeholder="" value={qc7} onChange={(e) => setQC7(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have a family history of hypertension or  heart disease?
              </label>
              <input placeholder="" value={qc8} onChange={(e) => setQC8(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have a family history of high cholesterol, heart diseases or stroke?
              </label>
              <input placeholder="" value={qc9} onChange={(e) => setQC9(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you been diagnosed with any chronic conditions like hypertension or diabetes?
              </label>
              <input placeholder="" value={qc10} onChange={(e) => setQC10(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Are you currently taking any medications or supplements?
        
        </label>
              <input placeholder="" value={qc11} onChange={(e) => setQC11(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>What does your typical diet look like ?Do you consume a lot of salt, processed foods, or caffeine?
              </label>
              <input placeholder="" value={qc12} onChange={(e) => setQC12(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Can you describe your typical diet? ( e. g. intake of saturated fats, trans fats, fiber, fruits, and vegetables)
              </label>
              <input placeholder="" value={qc13} onChange={(e) => setQC13(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How  often  do  you exercise and what type of physical activities do you engage in?
              </label>
              <input placeholder="" value={qc14} onChange={(e) => setQC14(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you smoke or use tobacco products?
              </label>
              <input placeholder="" value={qc15} onChange={(e) => setQC15(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How much alcohol do you consume, and how frequently?
              </label>
              <input placeholder="" value={qc16} onChange={(e) => setQC16(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you experienced any symptoms that might be related to cholesterol levels such as chest pain, shortness of breath, or fatigue?
              </label>
              <input placeholder="" value={qc17} onChange={(e) => setQC17(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you notice any changes in your weight, particularly weight gain?
              </label>
              <input placeholder="" value={qc18} onChange={(e) => setQC18(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you experienced similar pain before?</label>
              <input placeholder="" value={qc19} onChange={(e) => setQC19(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you had your cholesterol levels checked before ?  If so, what were the results?
              </label>
              <input placeholder="" value={qc20} onChange={(e) => setQC20(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you had any recent blood tests, and do you know your current lipid profile ( including LDL, HDL  and triglycerides) ?
        
        </label>
              <input placeholder="" value={qc21} onChange={(e) => setQC21(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Are you aware of the lifestyle changes that can help manage cholesterol levels such as dietary modifications, increased physical activity and smoking cessation?
              </label>
              <input placeholder="" value={qc22} onChange={(e) => setQC22(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you made any recent changes to your diet or exercise habits?
              </label>
              <input placeholder="" value={qc23} onChange={(e) => setQC23(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Are you under any significant stress or dealing with major life changes?
              </label>
              <input placeholder="" value={qc24} onChange={(e) => setQC24(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Have you experienced any symptoms such as headaches, dizziness, or blurred vision?
              </label>
              <input placeholder="" value={qc25} onChange={(e) => setQC25(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How often do you monitor your blood pressure, and what have your recent readings been?
              </label>
              <input placeholder="" value={qc26} onChange={(e) => setQC26(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How would you describe your stress  levels?
              </label>
              <input placeholder="" value={qc27} onChange={(e) => setQC27(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have any major stressors in your life( e.g. work, family issues) ?
              </label>
              <input placeholder="" value={qc28} onChange={(e) => setQC28(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How do you typically manage stress?
        
        </label>
              <input placeholder="" value={qc29} onChange={(e) => setQC29(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>How many hours of sleep do you get each night?
              </label>
              <input placeholder="" value={qc30} onChange={(e) => setQC30(e.target.value)} className="form-control" />
            </div>
            <div className="form-group">
              <label>Do you have any issues with sleep, such as insomnia or sleep apnea?
        
              </label>
              <input placeholder="" value={qc31} onChange={(e) => setQC31(e.target.value)} className="form-control" />
            </div>
            
          </div>
          <div className="gap-5 flex justify-end pt-5">
         
        
            <button
              type="submit"
              className="bg-blue-600 py-2 px-3 rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
        
        
        
        
        
        
        
        
        
        
        </Container>
          );
        }
        