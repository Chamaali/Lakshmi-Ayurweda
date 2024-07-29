
import Image from "next/image";
import React, { useState } from 'react';
import { Container } from "react-bootstrap";

export default function page (){

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
              </Container>
    )

}
