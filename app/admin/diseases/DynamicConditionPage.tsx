"use client";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

interface ConditionData {
  [key: string]: string;
}

interface DynamicConditionPageProps {
  condition: string;
  headers: { [key: string]: string }; // Dynamic headers prop
}

const fetchConditionData = async (condition: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/${condition}`,
      { cache: "no-cache" }
    );
    if (!res.ok) throw new Error(`Failed to fetch ${condition}: ${res.status} ${res.statusText}`);
    const data = await res.json();
    return data[condition];
  } catch (error) {
    console.error(`Error fetching ${condition}`, error);
    return null;
  }
};

const DynamicConditionPage: React.FC<DynamicConditionPageProps> = ({ condition, headers }) => {
  const [data, setData] = useState<ConditionData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchConditionData(condition);
      if (result) setData(result);
      else setError(`No data fetched for ${condition}`);
    };
    fetchData();
  }, [condition]);

  if (error) return <div>{error}</div>;

  return (
    <Container className="py-8">
      <section>
        <h6 className="font-bold capitalize">{condition.replace(/_/g, " ")}</h6>

        {/* Scrollable container for the table */}
        <div className="relative overflow-y-auto shadow-md sm:rounded-lg" style={{ maxHeight: '400px' }}>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {/* Render dynamic headers */}
                <th className="px-6 py-3" scope="col">Question</th>
                {data.map((_, i) => (
                  <th key={i} className="px-6 py-3" scope="col">
                    {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Render data rows based on the headers */}
              {Object.keys(headers).map((key, i) => (
                <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="px-6 py-4 font-medium">{headers[key]}</td>
                  {data.map((item, index) => (
                    <td key={index} className="px-6 py-4">
                      {item[key] || "N/A"}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
};

export default DynamicConditionPage;
