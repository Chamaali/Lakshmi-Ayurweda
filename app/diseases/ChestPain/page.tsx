'use client'

import Image from "next/image";
import React, { useState } from "react";
import { Container } from "react-bootstrap";

export default function Page() {

    const [q1, setQ1] = useState('');
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [q4, setQ4] = useState('');
    const [q5, setQ5] = useState('');
    const [q6, setQ6] = useState('');
    const [q7, setQ7] = useState('');
    const [q8, setQ8] = useState('');
    const [q9, setQ9] = useState('');
    const [q10, setQ10] = useState('');
    const [q11, setQ11] = useState('');
    const [q12, setQ12] = useState('');
    const [q13, setQ13] = useState('');
    const [q14, setQ14] = useState('');
    const [q15, setQ15] = useState('');
    const [q16, setQ16] = useState('');
    const [q17, setQ17] = useState('');
    const [q18, setQ18] = useState('');
    const [q19, setQ19] = useState('');
    const [q20, setQ20] = useState('');
    const [q21, setQ21] = useState('');
    const [q22, setQ22] = useState('');
    const [q23, setQ23] = useState('');
    const [q24, setQ24] = useState('');

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/chestpains`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24
                }),
            });

            // alert("Form was successfully submitted.");
    
            // console.log("Form was successfully submitted.")
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
    <Container className="text-justify py-4 justify-center items-center text-base lg:text-xl antialiased" onSubmit={handleSubmit}>
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
        <form action="" className="p-4 bg-gray-50 rounded border shadow">
        <div className="grid gap-y-4 px-4 sm:px-6 lg:px-8">
            <div className="form-group list-decimal">
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <input
                placeholder=""
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">Age</label>
              <input
                placeholder=""
                value={q2}
                onChange={(e) => setQ2(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">Address</label>
              <input
                placeholder=""
                value={q3}
                onChange={(e) => setQ3(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">Contact Number</label>
              <input
                placeholder=""
                value={q4}
                onChange={(e) => setQ4(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">Gender</label>
              <input
                placeholder=""
                value={q5}
                onChange={(e) => setQ5(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">Occupation</label>
              <input
                placeholder=""
                value={q6}
                onChange={(e) => setQ6(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Medical and Family History
              </label>
              <input
                placeholder=""
                value={q7}
                onChange={(e) => setQ7(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Where exactly is the pain located?
              </label>
              <input
                placeholder=""
                value={q8}
                onChange={(e) => setQ8(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Does the pain radiate to other parts of the body, such as the arm, neck, back or abdomen?
              </label>
              <input
                placeholder=""
                value={q9}
                onChange={(e) => setQ9(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                How would you describe the pain (e.g. sharp, dull, crushing, burning, tightness)?
              </label>
              <input
                placeholder=""
                value={q10}
                onChange={(e) => setQ10(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Is it constant or intermittent?
              </label>
              <input
                placeholder=""
                value={q11}
                onChange={(e) => setQ11(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                On a scale of 1 to 10, how severe is the pain?
              </label>
              <input
                placeholder=""
                value={q12}
                onChange={(e) => setQ12(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                How long does the pain last?
              </label>
              <input
                placeholder=""
                value={q13}
                onChange={(e) => setQ13(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Is it continuous or does it come and go?
              </label>
              <input
                placeholder=""
                value={q14}
                onChange={(e) => setQ14(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                What were you doing when the pain started?
              </label>
              <input
                placeholder=""
                value={q15}
                onChange={(e) => setQ15(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Does anything make the pain better or worse (e.g. rest, movement, deep breathing, eating)?
              </label>
              <input
                placeholder=""
                value={q16}
                onChange={(e) => setQ16(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Do you have any other symptoms, such as shortness of breath, sweating, nausea, vomiting, dizziness or palpitations?
              </label>
              <input
                placeholder=""
                value={q17}
                onChange={(e) => setQ17(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Do you have a history of heart disease, hypertension, diabetes, or high cholesterol?
              </label>
              <input
                placeholder=""
                value={q18}
                onChange={(e) => setQ18(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-lg"
              />
            </div>

            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
                Have you experienced similar pain before?
              </label>
              <input
                placeholder=""
                value={q19}
                onChange={(e) => setQ19(e.target.value)}
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus"
              />
            </div>
            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
              Are you taking any medications, including over- the- counter drugs and supplements?
              </label>
              <input 
                placeholder="" 
                value={q23} 
                onChange={(e)=> setQ23(e.target.value)} 
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus"
                />
            </div>
            <div className="form-group">
              <label className="block text-lg font-medium text-gray-700">
              Do you have any known allergies, especially to medications?
              </label>
              <input 
                placeholder="" 
                value={q24} 
                onChange={(e)=> setQ24(e.target.value)} 
                className="form-control mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus" 
              />
            </div>
          </div>
          <div className="gap-5 flex justify-end pt-5">
            {/* <button className="bg-gray-200 py-2 px-3   rounded">Cansel</button> */}
            <button
              type="submit"
              className="bg-blue-600 py-2 px-3  rounded text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
