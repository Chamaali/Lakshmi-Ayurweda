import DynamicConditionPage from "../DynamicConditionPage";

const Page = () => {
  // Define the headers for chest pain data
  const headers = {
    qh1: "Name",
    qh2: "Gender",
    qh3: "Address",
    qh4: "Contact Number",
    qh5: "Occupation",
    qh6: "Do you have a family history of diabetes or other metabolic disorders?",
    qh7: "Have you been diagnosed with high blood pressure or high cholesterol?",
    qh8: "Are you experiencing increased thirst, frequent urination, fatigue, or blurred vision?",
    qh9: "Have you noticed any unexplained weight loss or gain?",
    qh10: "What does your typical diet look like? How often do you consume sugary or high-carbohydrate foods?",
    qh11: "How often do you exercise, and what type of physical activities do you engage in?",
    qh12: "Do you smoke or use tobacco products?",
    qh13: "How much alcohol do you consume?",
    qh14: "Have you noticed any recent changes in your weight?",
    qh15: "How active are you on a daily basis? Do you have a sedentary job or lifestyle?",
    qh16: "Have you had your blood glucose levels tested before? If so, when and what were the results?",
    qh17: "Have you had any recent blood tests or health screenings?",
    qh18: "Are you taking any medications that might affect your blood sugar levels, such as steroids or antipsychotics?",
    qh19: "Do you have any other health conditions, such as polycystic ovary syndrome (PCOS) or thyroid issues?",
    qh20: "How many hours of sleep do you typically get each night? Do you experience any sleep disorders like sleep apnea?",
    qh21: "How do you manage stress? Have you been under significant stress recently?",
    qh22: "Have you noticed any darkened areas of skin, particularly around your neck or armpits (acanthosis nigricans)?"
  };

  return <DynamicConditionPage condition="diabetics" headers={headers} />;
};

export default Page;
