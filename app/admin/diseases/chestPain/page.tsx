"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export const getChestpains = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/chestpains`,
      {
        cache: "no-cache",
      }
    );

    if (!res.ok) {
      throw new Error(
        `Failed to fetch chestpains: ${res.status} ${res.statusText}`
      );
    }

    // Try to parse the response as JSON
    try {
      const data = await res.json();
      return data.chestpains;
    } catch (jsonError) {
      // Log the response text to understand what was returned
      const text = await res.text();
      console.error("Failed to parse JSON", jsonError);
      console.error("Response text:", text);
      throw new Error("Failed to parse JSON response");
    }
  } catch (error) {
    console.error("Error loading chestpains", error);
    return null;
  }
};

const ChectPainPage: React.FC = () => {
  const [chestpains, setChestpains] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchChestpains = async () => {
      try {
        const data = await getChestpains();
        if (data) {
          setChestpains(data);
        } else {
          setError("No chestpains data fetched");
        }
      } catch (fetchError) {
        setError("Error loading chestpains");
      }
    };

    fetchChestpains();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="py-8 ">
      
      <section>
        <div className="grid basis-3/4">
          <h6 className="justify-self-start font-bold">Chest Pain</h6>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="bg-white border-b">
                <td scope="col" className="px-6 py-3" title="Name">
                  Q1
                </td>
                <td scope="col" className="px-6 py-3" title="Age">
                  Q2
                </td>
                <td scope="col" className="px-6 py-3" title="Address">
                  Q3
                </td>
                <td scope="col" className="px-6 py-3" title="Contact Number">
                  Q4
                </td>
                <td scope="col" className="px-6 py-3" title="Gender">
                  Q5
                </td>
                <td scope="col" className="px-6 py-3" title="Occupation">
                  Q6
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Medical and family history"
                >
                  Q7
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Where exactly is the pain located?"
                >
                  Q8
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Does the pain radiate to other parts of the body, such as the arm, neck, back or abdomen?"
                >
                  Q9
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="How would you describe the pain (e.g. sharp, dull, crushing, burning, tightness)"
                >
                  Q10
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Is it constant or intermittent?"
                >
                  Q11
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="On a scale of 1 to 10, how severe is the pain?"
                >
                  Q12
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="How long does the pain last?"
                >
                  Q13
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Is it continuous or does it come and go?"
                >
                  Q14
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title=" What were you doing when the pain started?"
                >
                  Q15
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Does anything make the pain better or worse ( e. g. rest, movement, deep breathing, eating)?"
                >
                  Q16
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Do you have any other symptoms, such as shortness of breath, sweating, nausea, vomiting, dizziness or palpitations?"
                >
                  Q17
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Do you have any history of heart disease, hypertension, diabetes, or high cholesterol?"
                >
                  Q18
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Have you experienced similar pain before?"
                >
                  Q19
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Do you smoke or have a history of smoking?"
                >
                  Q20
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Do you have a family history of heart disease or other cardiovascular conditions?"
                >
                  Q21
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="What is your diet and exercise routine like?"
                >
                  Q22
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Are you taking any medications, including over- the- counter drugs and supplements?"
                >
                  Q23
                </td>
                <td
                  scope="col"
                  className="px-6 py-3"
                  title="Do you have any known allergies, especially to medications?"
                >
                  Q24
                </td>
              </tr>
            </thead>
            <tbody>
              {chestpains.map((chestpain: any, index: number) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  key={index}
                >
                  <td className="px-6 py-4">{chestpain.q1}</td>
                  <td className="px-6 py-4">{chestpain.q2}</td>
                  <td className="px-6 py-4">{chestpain.q3}</td>
                  <td className="px-6 py-4">{chestpain.q4}</td>
                  <td className="px-6 py-4">{chestpain.q5}</td>
                  <td className="px-6 py-4">{chestpain.q6}</td>
                  <td className="px-6 py-4">{chestpain.q7}</td>
                  <td className="px-6 py-4">{chestpain.q8}</td>
                  <td className="px-6 py-4">{chestpain.q9}</td>
                  <td className="px-6 py-4">{chestpain.q10}</td>
                  <td className="px-6 py-4">{chestpain.q11}</td>
                  <td className="px-6 py-4">{chestpain.q12}</td>
                  <td className="px-6 py-4">{chestpain.q13}</td>
                  <td className="px-6 py-4">{chestpain.q14}</td>
                  <td className="px-6 py-4">{chestpain.q15}</td>
                  <td className="px-6 py-4">{chestpain.q16}</td>
                  <td className="px-6 py-4">{chestpain.q17}</td>
                  <td className="px-6 py-4">{chestpain.q18}</td>
                  <td className="px-6 py-4">{chestpain.q19}</td>
                  <td className="px-6 py-4">{chestpain.q20}</td>
                  <td className="px-6 py-4">{chestpain.q21}</td>
                  <td className="px-6 py-4">{chestpain.q22}</td>
                  <td className="px-6 py-4">{chestpain.q23}</td>
                  <td className="px-6 py-4">{chestpain.q24}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </Container>
  );
};

export default ChectPainPage;


