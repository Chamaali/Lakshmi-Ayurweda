import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";

export default function page() {
  return (
    <Container className="text-justify py-4">
      <h2 className="pb-3 font-bold">Back Pain</h2>

<div className="flex flex-row place-content-around py-5">
<Image alt="back-pain" src={require('@/public/images/4_FootMassage.jpg')} width={400}/>
<Image alt="back-pain" src={require('@/public/images/4_FootMassage.jpg')} width={400}/>
</div>

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

<form action="" className="p-4 bg-gray-50 rounded border shadow">
    <div className="grid gap-y-4">
    <div className="form-group">
        <label>Name</label>
        <input placeholder="" type="" className="form-control"  />
    </div>
    <div className="form-group">
        <label htmlFor="email">Age</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Address</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Phone</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Where exactly is the pain located?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">How long have you been experiencing this pain?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Did it start suddenly or gradually?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">How would you describe the pain ( sharp, dull throbbing, burning)?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Is the pain constant or does it come and go?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">What is the severity of the pain on a scale of 1 to 10</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Does anything make the pain better or worse (e.g. certain movements, rest, medications)?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Does the pain interfere with your daily activities or sleep?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Have you experienced any limitations in movement or function due to the pain?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Do you have any numbness, tingling or weakness in your legs?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Have you noticed any changes in bowel or bladder function?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Have you had any previous episodes of back pain or related issues?</label>
        <input placeholder="" type="email" className="form-control" />
    </div>
    </div>
   <div className="gap-5 flex justify-end pt-5">
   <button  className="bg-gray-200 py-2 px-3   rounded">Cansel</button>
    <button type="submit" className="bg-blue-600 py-2 px-3  rounded text-white">Submit</button>
   </div>
</form>
    </Container>
  );
}
