// CalculateTotal.tsx
import { useEffect } from "react";

interface CalculateTotalProps {
  consultation: string;
  plan: string;
  setTotal: (total: number) => void;
}

const CalculateTotal: React.FC<CalculateTotalProps> = ({
  consultation,
  plan,
  setTotal,
}) => {
  useEffect(() => {
    const calculateTotal = (consultation: string, plan: string) => {
      let price = 0;
      if (consultation === "phone") price = plan === "pro" ? 2 : 1;
      if (consultation === "video") price = plan === "pro" ? 4 : 3;
      if (consultation === "clinic") price = plan === "pro" ? 6 : 5;
      setTotal(price);
    };

    if (consultation && plan) {
      calculateTotal(consultation, plan);
    }
  }, [consultation, plan, setTotal]);

  return null; // This component does not render anything
};

export default CalculateTotal;
