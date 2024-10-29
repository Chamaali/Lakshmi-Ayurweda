import DynamicConditionPage from "./../DynamicConditionPage";

const CholesterolPage = () => {
  // Define the headers for chest pain data
  const headers = {
    qh1: "Name",
    qh2: "Age",
    qh3: "Address",
    qh4: "Gender",
    qh5: "Contact Number",
    qh6: "Occupation",
    qh7: "Do you have a family history of hypertension or heart disease?",
    qh8: "Do you have a family history of high cholesterol, heart diseases or stroke?",
    qh9: "Have you been diagnosed with any chronic conditions like hypertension or diabetes?",
    qh10: "Are you currently taking any medications or supplements?",
    qh11: "What does your typical diet look like? Do you consume a lot of salt, processed foods, or caffeine?",
    qh12: "Can you describe your typical diet? (e.g. intake of saturated fats, trans fats, fiber, fruits, and vegetables)",
    qh13: "How often do you exercise and what type of physical activities do you engage in?",
    qh14: "Do you smoke or use tobacco products?",
    qh15: "How much alcohol do you consume, and how frequently?",
    qh16: "Have you experienced any symptoms that might be related to cholesterol levels, such as chest pain, shortness of breath, or fatigue?",
    qh17: "Do you notice any changes in your weight, particularly weight gain?",
    qh18: "Have you experienced similar pain before?",
    qh19: "Have you had your cholesterol levels checked before? If so, what were the results?",
    qh20: "Have you had any recent blood tests, and do you know your current lipid profile (including LDL, HDL, and triglycerides)?",
    qh21: "Are you aware of the lifestyle changes that can help manage cholesterol levels, such as dietary modifications, increased physical activity, and smoking cessation?",
  };

  return <DynamicConditionPage condition="cholesterols" headers={headers} />;
};

export default CholesterolPage;
