'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";


export default function page() {

    const [qh1, setQH1] = useState('');
    const [qh2, setQH2] = useState('');
    const [qh3, setQH3] = useState('');
    const [qh4, setQH4] = useState('');
    const [qh5, setQH5] = useState('');
    const [qh6, setQH6] = useState('');
    const [qh7, setQH7] = useState('');
    const [qh8, setQH8] = useState('');
    const [qh9, setQH9] = useState('');
    const [qh10, setQH10] = useState('');
    const [qh11, setQH11] = useState('');
    const [qh12, setQH12] = useState('');
    const [qh13, setQH13] = useState('');
    const [qh14, setQH14] = useState('');
    const [qh15, setQH15] = useState('');
    const [qh16, setQH16] = useState('');
    const [qh17, setQH17] = useState('');
    const [qh18, setQH18] = useState('');
    const [qh19, setQH19] = useState('');
    const [qh20, setQH20] = useState('');
  return (

    <Container className="text-justify py-4" > 
    <h2 className="pb-3 font-bold"> Hypertension</h2>

    {/* images*/}
        
            
    <div className="flex flex-row place-content-around py-5">
                <Image
                  alt="Hypertension"
                  src={require("./../../../public/images/hyper_1.jpg")}
                  className=" h-60"
                />
                <Image
                  alt="Hypertension"
                  src={require("./../../../public/images/hyper_2.jpg")}
                  className="h-60"
                />
                <Image
                  alt="Hypertension"
                  src={require("./../../../public/images/hyper_3.jpg")}
                  className="h-60"
                />




    </div>
    {/*Introduction*/}

    <p  className="pb-3 font-bold">
    In Ayurveda, hypertension, also known as "Rakta Chapa" or "Uccha Raktachapa," is considered a condition resulting from an imbalance of the doshas, primarily Vata and Pitta, and the accumulation of Ama (toxins) in the body. Here are the detailed causes of hypertension from the Ayurvedic perspective:

    </p>
 

    {/* Dietary Causes  */}

            <h5 className="pb-3 font-bold">Dietary Causes
            </h5>

            <ol className="list-decimal"> <b>1.	Excessive Sweet Intake:</b> High consumption of salty foods aggravates Pitta dosha, leading to increased blood pressure.</ol>
            <ol className="list-decimal"> <b>2.	Spicy and Sour Foods:  </b> These foods can also disturb Pitta, causing heat and inflammation in the body.</ol>
            <ol className="list-decimal"> <b>3.	Heavy and Oily Foods: </b> Such foods increase Kapha dosha, contributing to blockages in the circulatory system.</ol>
            <ol className="list-decimal"> <b>4.	Processed and Junk Foods: </b>These foods create Ama and disturb the balance of the doshas, especially Pitta and Vata.</ol>
            <ol className="list-decimal"> <b>5.	Overeating:</b>Consuming large quantities of food can overload the digestive system and lead to the formation of Ama.</ol>

    {/* Lifestyle Causes  */}

            <h5 className="pb-3 font-bold">Lifestyle Causes
            </h5>

            <ol className="list-decimal"> <b>1.	Sedentary Lifestyle:  </b> Lack of physical activity leads to poor circulation and Kapha accumulation.</ol>
            <ol className="list-decimal"> <b>2.	Stress and Anxiety: </b> High levels of mental stress and anxiety aggravate Vata dosha and can raise blood pressure.</ol>
            <ol className="list-decimal"> <b>3.	Irregular Sleep Patterns: </b> Both insufficient and excessive sleep can disturb Vata and Pitta doshas.</ol>
            <ol className="list-decimal"> <b>	4.	Lack of Routine: </b>Inconsistent daily habits disrupt doshic balance and contribute to stress and anxiety.</ol>     

    {/* Psychological Factors  */}

            <h5 className="pb-3 font-bold">Psychological Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Emotional Stress:  </b> Chronic stress, worry, anger, and other negative emotions can disturb the balance of Vata and Pitta, leading to hypertension.</ol>
            <ol className="list-decimal"> <b>2.	Mental Strain: </b> Continuous mental exertion and stress impact the cardiovascular system.</ol>
            
    {/*Genetic and Hereditary Factors */}

    <h5 className="pb-3 font-bold">Genetic and Hereditary Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Family History:  </b> A genetic predisposition to hypertension is acknowledged in Ayurveda, with hereditary factors influencing doshic balance.</ol>
            <ol className="list-decimal"> <b>2.	Prakriti (Constitutional Type): </b> Individuals with a Vata or Pitta-dominant constitution may be more prone to hypertension.</ol>
              



    {/* Environmental Factors  */}

    <h5 className="pb-3 font-bold">Environmental Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Climate and Seasonal Changes:   </b> : Extreme weather conditions, particularly hot weather, can aggravate Pitta dosha.</ol>
            <ol className="list-decimal"> <b>2.	Pollutants and Toxins:  </b> Exposure to environmental toxins can impair bodily functions and contribute to the formation of Ama.</ol>

    {/*Other Contributing Factors */}

    <h5 className="pb-3 font-bold">Other Contributing Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Poor Digestion (Agni):  </b> Weak digestive fire (Agni) leads to incomplete digestion, resulting in the accumulation of Ama, which obstructs channels (srotas) and disrupts normal blood flow.</ol>
            <ol className="list-decimal"> <b>2.	Obesity:   </b> Excess body weight is associated with Kapha imbalance and can lead to hypertension.</ol> 

    
    {/*Pathogenesis in Ayurveda */}

    <h5 className="pb-3 font-bold">Other Contributing Factors
            </h5>

            <ul className="list-decimal"> <b>•	Vata Imbalance </b> Aggravated Vata causes irregularity and instability in blood flow, leading to increased pressure in the arteries.</ul>
            <ul className="list-decimal"> <b>•	Pitta Imbalance:  </b> Increased Pitta causes heat and inflammation in the blood vessels, contributing to hypertension.</ul>  
            <ul className="list-decimal"> <b>•	Ama Accumulation:  </b> Toxins obstruct the channels (srotas), leading to poor circulation and increased blood pressure.</ul>        


    {/* Ayurvedic Management Approach  */}

            <h5 className="pb-3 font-bold">Ayurvedic Management Approach
            </h5>

            <ol className="list-decimal"> <b>1.	Dietary Adjustments:  </b> Emphasize a balanced diet that pacifies Vata and Pitta, avoiding salty, spicy, and sour foods, and incorporating cooling and calming foods like cucumber, coconut water, and leafy greens.</ol>
            <ol className="list-decimal"> <b>2.	Regular Exercise:  </b> Engage in moderate physical activities like walking, yoga, and specific asanas to improve circulation and balance doshas.</ol>
            <ol className="list-decimal"> <b>3.	Stress Management:  </b> Practice meditation, pranayama (breathing exercises), and relaxation techniques to reduce stress and anxiety.</ol>
            <ol className="list-decimal"> <b>4.	Routine and Discipline	 </b>Follow a consistent daily routine (Dinacharya) and seasonal regimen (Ritucharya) to maintain doshic balance.</ol>
            <ol className="list-decimal"> <b>5.	Detoxification:  </b>Regular detox practices (Panchakarma) to eliminate accumulated toxins and improve digestive fire.</ol>  

            <h5 className="pb-3 font-bold text-base/4">1.	Lifestyle Recommendations:
            </h5>
            <ul className="list-decimal"> <b>o	Abhyanga (Oil Massage):  </b> Practice meditation, pranayama (breathing exercises), and relaxation techniques to reduce stress and anxietRegular self-massage with calming oils like sesame or coconut oil to balance Vata and Pittay.</ul>
            <ul className="list-decimal"> <b>o	Shirodhara:   </b> A therapy involving the pouring of warm oil on the forehead, which helps in reducing stress and calming the mind.</ul>

           

            <h5 className="pb-3 font-bold">Conclusion
            </h5>

            <p  className="pb-3 font-bold">
            From the Ayurvedic perspective, hypertension is caused by a combination of dietary habits, lifestyle choices, emotional well-being, genetic predispositions, and environmental exposures, leading to the imbalance of Vata and Pitta doshas and the accumulation of toxins. Managing these causes holistically through diet, lifestyle modifications, stress management, and detoxification can help in effectively preventing and treating hypertension.

    </p>  

    {/*form */}

    <form action="" className="p-4 bg-gray-50 rounded border shadow">
  <div className="grid gap-y-4">
    <div className="form-group list-decimal">
      <label>Name</label>
      <input placeholder="" value={qh1} onChange={(e) => setQH1(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Age</label>
      <input placeholder="" value={qh2} onChange={(e) => setQH2(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Gender</label>
      <input placeholder="" value={qh3} onChange={(e) => setQH3(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Address</label>
      <input placeholder="" value={qh4} onChange={(e) => setQH4(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Contact Number</label>
      <input placeholder="" value={qh5} onChange={(e) => setQH5(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Occupation</label>
      <input placeholder="" value={qh6} onChange={(e) => setQH6(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have a family history of high cholesterol or heart disease?</label>
      <input placeholder="" value={qh7} onChange={(e) => setQH7(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you ever been diagnosed with high blood pressure or diabetes?</label>
      <input placeholder="" value={qh8} onChange={(e) => setQH8(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Are you currently on any medications, including those for cholesterol?</label>
      <input placeholder="" value={qh9} onChange={(e) => setQH9(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Can you describe your diet? (e.g., intake of saturated fats, trans fats, fiber, etc.)</label>
      <input placeholder="" value={qh10} onChange={(e) => setQH10(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>How often do you exercise and what types of physical activities do you engage in?</label>
      <input placeholder="" value={qh11} onChange={(e) => setQH11(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you smoke or use tobacco products?</label>
      <input placeholder="" value={qh12} onChange={(e) => setQH12(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>How much alcohol do you consume?</label>
      <input placeholder="" value={qh13} onChange={(e) => setQH13(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you experienced any chest pain, shortness of breath or other cardiac symptoms?</label>
      <input placeholder="" value={qh14} onChange={(e) => setQH14(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have any symptoms of peripheral artery disease, such as leg pain while walking?</label>
      <input placeholder="" value={qh15} onChange={(e) => setQH15(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you had your cholesterol levels checked before? If so, what were the results?</label>
      <input placeholder="" value={qh16} onChange={(e) => setQH16(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you had any recent blood tests or imaging studies, like a lipid panel or an echocardiogram?</label>
      <input placeholder="" value={qh17} onChange={(e) => setQH17(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have any other health conditions that might affect your cholesterol levels, such as thyroid disease or liver conditions?</label>
      <input placeholder="" value={qh18} onChange={(e) => setQH18(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>What is your weight and height to assess your body mass index (BMI)?</label>
      <input placeholder="" value={qh19} onChange={(e) => setQH19(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Are you experiencing any unusual stress or major changes in your life currently?</label>
      <input placeholder="" value={qh20} onChange={(e) => setQH20(e.target.value)} className="form-control" />
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
