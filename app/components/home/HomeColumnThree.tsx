import React from 'react';

const HomeColumnThree = () => {
  const reasons = [
    "Lakshmi Ayurveda enables true delivery of Ayurveda with personalized treatment for each individual at all touchpoints.",
    "Personalized treatment for each individual at all touchpoints",
    "Focus on treating the root cause",
    "Combination of various treatments for holistic care",
    "Integration of modern technology with traditional practices",
    "Collaboration with Sri Lankan traditional practitioners",
    "Team of well-qualified (BAMS) doctors, specialists, and surgeons"
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-8 text-gray-800">
          Why Choose Lakshmi Ayurveda?
        </h2>
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <ul className="space-y-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomeColumnThree;