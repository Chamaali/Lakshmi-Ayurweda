import DynamicConditionPage from "./../DynamicConditionPage";

const Page = () => {
  // Define the headers for chest pain data
  const headers = {
    qh1: "Name",
    qh2: "Age",
    qh3: "Gender",
    qh4: "Address",
    qh5: "Contact Number",
    qh6: "Occupation",
    qh7: "Do you have a family history of high cholesterol or heart disease?",
    qh8: "Have you ever been diagnosed with high blood pressure or diabetes?",
    qh9: "Are you currently on any medications, including those for cholesterol?",
    qh10: "Can you describe your diet? (e.g., intake of saturated fats, trans fats, fiber, etc.)",
    qh11: "How often do you exercise and what types of physical activities do you engage in?",
    qh12: "Do you smoke or use tobacco products?",
    qh13: "How much alcohol do you consume?",
    qh14: "Have you experienced any chest pain, shortness of breath or other cardiac symptoms?",
    qh15: "Do you have any symptoms of peripheral artery disease, such as leg pain while walking?",
    qh16: "Have you had your cholesterol levels checked before? If so, what were the results?",
    qh17: "Have you had any recent blood tests or imaging studies, like a lipid panel or an echocardiogram?",
    qh18: "Do you have any other health conditions that might affect your cholesterol levels, such as thyroid disease or liver conditions?",
    qh19: "What is your weight and height to assess your body mass index (BMI)?",
    qh20: "Are you experiencing any unusual stress or major changes in your life currently?",
  };

  return <DynamicConditionPage condition="chestpains" headers={headers} />;
};

export default Page;
