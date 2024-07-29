'use client'
import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";

export default function page (){

  const [qd1, setQD1] = useState('');
  const [qd2, setQD2] = useState('');
  const [qd3, setQD3] = useState('');
  const [qd4, setQD4] = useState('');
  const [qd5, setQD5] = useState('');
  const [qd6, setQD6] = useState('');
  const [qd7, setQD7] = useState('');
  const [qd8, setQD8] = useState('');
  const [qd9, setQD9] = useState('');
  const [qd10, setQD10] = useState('');
  const [qd11, setQD11] = useState('');
  const [qd12, setQD12] = useState('');
  const [qd13, setQD13] = useState('');
  const [qd14, setQD14] = useState('');
  const [qd15, setQD15] = useState('');
  const [qd16, setQD16] = useState('');
  const [qd17, setQD17] = useState('');
  const [qd18, setQD18] = useState('');
  const [qd19, setQD19] = useState('');
  const [qd20, setQD20] = useState('');
  const [qd21, setQD21] = useState('');
  const [qd22, setQD22] = useState('');
  

    return(

        <Container   className="text-justify py-4" >
            <h2 className="pb-3 font-bold"> Diabetic</h2> 
            <div className="flex flex-row place-content-around py-5">
                <Image
                  alt="back-pain"
                  src={require("./../../../public/images/Dia1.jpg")}
                  className=" h-60"
                />
                <Image
                  alt="back-pain"
                  src={require("./../../../public/images/Dia2.jpg")}
                  className="h-60"
                />
              </div>

              <p className="pb-3 font-bold">
              In Ayurveda, diabetes (referred to as "Madhumeha") is understood to be caused by a combination of dietary, lifestyle, genetic, and environmental factors, which lead to an imbalance in the body's doshas (Vata, Pitta, and Kapha) and the accumulation of toxins (Ama). Here are the detailed causes from the Ayurvedic perspective:

              </p>




           {/* Dietary Causes  */}

            <h5 className="pb-3 font-bold">Dietary Causes
            </h5>

            <ol className="list-decimal"> <b>1.	Excessive Sweet Intake:</b> Consuming large amounts of sugary and sweet foods increases Kapha dosha.</ol>
            <ol className="list-decimal"> <b>2.	Heavy and Oily Foods: </b> Frequent consumption of fried and fatty foods leads to Kapha imbalance and Ama accumulation.</ol>
            <ol className="list-decimal"> <b>3.	Overeating:</b> Eating more than the digestive capacity creates digestive disturbances and toxin build-up.</ol>
            <ol className="list-decimal"> <b>4.	Dairy Overconsumption: </b>Excessive intake of milk and dairy products aggravates Kapha.</ol>
            <ol className="list-decimal"> <b>5.	Alcohol and Fermented Foods:</b>These substances disrupt digestive fire (Agni) and promote the formation of Ama.</ol>

             {/* Lifestyle Causes  */}

            <h5 className="pb-3 font-bold">Lifestyle Causes
            </h5>

            <ol className="list-decimal"> <b>1.	Sedentary Lifestyle:  </b>  Lack of physical activity leads to Kapha accumulation and metabolic slowdown.</ol>
            <ol className="list-decimal"> <b>2.	Irregular Sleep Patterns:  </b> Both excessive and insufficient sleep can disturb the balance of doshas.</ol>
            <ol className="list-decimal"> <b>3.	Lack of Routine: </b> Inconsistent daily habits and lack of a regular schedule (Dinacharya) disturb doshic harmony.</ol>
            <ol className="list-decimal"> <b>	4.	Mental Stress: </b>: Chronic stress, anxiety, and emotional disturbances can aggravate Vata and disrupt metabolic processes.</ol>


           {/* Psychological Factors  */}

           <h5 className="pb-3 font-bold">Psychological Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Emotional Imbalance:  </b> : Prolonged periods of negative emotions such as worry, fear, and depression can affect hormonal balance and insulin sensitivity.</ol>
            <ol className="list-decimal"> <b>2.	Mental Strain:   </b> Continuous mental exertion and stress impact endocrine function and glucose metabolism.</ol>


            {/* Genetic and Hereditary Factors  */}

            <h5 className="pb-3 font-bold">Genetic and Hereditary Factors 
            </h5>

            <ol className="list-decimal"> <b>1.	Family History:  </b> A genetic predisposition to diabetes is recognized, acknowledging that hereditary factors can influence doshic balance.</ol>
            <ol className="list-decimal"> <b>2.	Prakriti (Constitutional Type):   </b> Individuals with a Kapha-dominant constitution are more susceptible to diabetes.</ol>


             {/* Environmental Factors */}

             <h5 className="pb-3 font-bold">Environmental Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Seasonal Changes:   </b> Transitions between seasons affect dosha balance, especially if diet and lifestyle are not adjusted accordingly.</ol>
            <ol className="list-decimal"> <b>2.	Exposure to Toxins:    </b> Environmental pollutants and toxins can impair metabolic processes and contribute to Ama formation.</ol>


             {/* Other Contributing Factors */}

             <h5 className="pb-3 font-bold">Other Contributing Factors
            </h5>

            <ol className="list-decimal"> <b>1.	Weak Digestive Fire (Agni):   </b> Poor digestive function leads to incomplete digestion, resulting in the accumulation of toxins (Ama).</ol>
            <ol className="list-decimal"> <b>2.	Obesity:    </b>Excess body weight is associated with Kapha imbalance and insulin resistance.</ol>


           {/* Pathogenesis in Ayurveda */}

           <h5 className="pb-3 font-bold">Pathogenesis in Ayurveda
            </h5>

            <ul className="list-decimal"> <b>•	Kapha Imbalance:  </b> Poor digestive function leads to incomplete digestion, resulting in the accumulation of toxins (Ama).</ul>
            <ul className="list-decimal"> <b>•	Pitta Imbalance:   </b>Aggravated Pitta affects metabolism, leading to increased thirst, hunger, and digestion issues.</ul>
            <ul className="list-decimal"> <b>•	Vata Imbalance:   </b>Aggravated Vata can cause symptoms like dry skin, constipation, and rapid weight loss.</ul>



           {/* Ayurvedic Management Approach */}

           <h5 className="pb-3 font-bold">Ayurvedic Management Approach
            </h5>

            <ol className="list-decimal"> <b>1.	Dietary Adjustments: </b> Emphasize a diet that balances Kapha, avoiding sweets, heavy, and oily foods, and incorporating bitter, astringent, and pungent tastes.</ol>
            <ol className="list-decimal">2.	  Encourage physical activities like walking, yoga, and specific exercises to balance Kapha.</ol>
            <ol className="list-decimal"> <b>3.	Stress Management: </b> Practice meditation, breathing exercises (pranayama), and maintain mental peace.</ol>
            <ol className="list-decimal"> <b>4.	Routine and Discipline: </b>Follow a consistent daily routine (Dinacharya) to maintain doshic balance.</ol>
            <ol className="list-decimal"> <b>5.	Detoxification: </b>Regular detox practices (Panchakarma) to eliminate accumulated toxins and improve digestive fire.</ol>

                {/* Summary */}

                <p className="pb-3 ">
                From the Ayurvedic viewpoint, the causes of diabetes are rooted in dietary habits, lifestyle choices, emotional well-being, genetic predispositions, and environmental exposures, all contributing to the imbalance of doshas and the accumulation of toxins. Addressing these causes holistically through diet, lifestyle modifications, stress management, and detoxification can help in managing and preventing diabetes effectively

              </p>


                {/*form */}

             <form action="" className="p-4 bg-gray-50 rounded border shadow">
  <div className="grid gap-y-4">
    <div className="form-group list-decimal">
      <label>Name</label>
      <input placeholder="" value={qd1} onChange={(e) => setQD1(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Gender</label>
      <input placeholder="" value={qd2} onChange={(e) => setQD2(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Address</label>
      <input placeholder="" value={qd3} onChange={(e) => setQD3(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Contact Number</label>
      <input placeholder="" value={qd4} onChange={(e) => setQD4(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Occupation</label>
      <input placeholder="" value={qd5} onChange={(e) => setQD5(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have a family history of diabetes or other metabolic disorders?</label>
      <input placeholder="" value={qd6} onChange={(e) => setQD6(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	Have  you  been diagnosed with high blood pressure or high cholesterol?</label>
      <input placeholder="" value={qd7} onChange={(e) => setQD7(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Are you experiencing increased, thirst, frequent urination, fatigue, or blurred vision?</label>
      <input placeholder="" value={qd8} onChange={(e) => setQD8(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you noticed any unexplained weight loss or gain?</label>
      <input placeholder="" value={qd9} onChange={(e) => setQD9(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>What does you typical diet look like? How often do you consume sugary or high- carbohydrate  foods?</label>
      <input placeholder="" value={qd10} onChange={(e) => setQD10(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>How often do you exercise, and what type of physical activities do you engage in?</label>
      <input placeholder="" value={qd11} onChange={(e) => setQD11(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you smoke or use tobacco products?</label>
      <input placeholder="" value={qd12} onChange={(e) => setQD12(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>How much alcohol do you consume?</label>
      <input placeholder="" value={qd13} onChange={(e) => setQD13(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	Have you noticed any recent changes in your weight</label>
      <input placeholder="" value={qd14} onChange={(e) => setQD14(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	How activity are you on a daily basis? Do you have a sedentary job or lifestyle?</label>
      <input placeholder="" value={qd15} onChange={(e) => setQD15(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	Have you had your blood, glucose levels tested before?  If so, when and what were the results?</label>
      <input placeholder="" value={qd16} onChange={(e) => setQD16(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you had any recent blood tests or health screenings?</label>
      <input placeholder="" value={qd17} onChange={(e) => setQD17(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	Are you taking any medications that might affect your blood sugar levels, such as steroids or antipsychotics?</label>
      <input placeholder="" value={qd18} onChange={(e) => setQD18(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Do you have any other health conditions, such as polycystic ovary syndrome ( PCOS) or thyroid issues?</label>
      <input placeholder="" value={qd19} onChange={(e) => setQD19(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	How many hours of sleep do you typically get each night? Do you experience any sleep disorders like sleep apnea?</label>
      <input placeholder="" value={qd20} onChange={(e) => setQD20(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>	How do you manage stress? Have you been under significant stress recently?</label>

      <input placeholder="" value={qd21} onChange={(e) => setQD21(e.target.value)} className="form-control" />
    </div>
    <div className="form-group">
      <label>Have you noticed any darkened areas, of skin particularly around your neck or armpits ( acanthosis nigricans )n ?</label>
      <input placeholder="" value={qd22} onChange={(e) => setQD22(e.target.value)} className="form-control" />
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
