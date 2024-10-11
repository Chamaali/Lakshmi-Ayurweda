'use client'

import Link from "next/link";
import { useState } from "react";
import CalculateTotal from "../constants/CalculateTotal"; // Adjust the path as necessary

interface BookAppointmentModalProps {
  closeBookAppointmentModal: () => void; // Define the type for the prop
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  closeBookAppointmentModal,
}) => {
  const [consultation, setConsultation] = useState(""); // phone, video, clinic
  const [plan, setPlan] = useState(""); // mini, pro
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // male, female, other
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(0); // calculated total price based on consultation and plan
  const [paymentMethod, setPaymentMethod] = useState(""); // credit, debit, paypal, etc.
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpire, setCardExpire] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          consultation, plan, name, age, gender, phone, email, total, paymentMethod, cardNumber, cardExpire, cvv
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to book appointment");
      }

      alert("Appointment booked successfully");
      closeBookAppointmentModal();
    } catch (error) {
      console.error(error);
      alert("Failed to book appointment");
    }
  };

  return (
    <section className="fixed flex items-center justify-center text-black  inset-0 z-10 overflow-y-auto my-2">
      <div className="mx-auto  bg-white rounded p-6 shadow-lg">
        <div className="mx-auto">
          <h2 className="text-lg font-semibold text-gray-900">Book Appointment</h2>

          <div className="mt-3 sm:mt-4 lg:flex lg:items-start lg:gap-12">
            <form onSubmit={handleSubmit}>
              <div className="md:grid md:grid-cols-3 gap-4 rounded-lg border border-gray-200 p-4 shadow-sm">
                {/* // Appointment details */}
                <div>
                  <p className="text-gray-500 text-xs">Appointment Details</p>

                  <div className="text-black text-sm font-medium mb-4">
                    <label>Type of Consultation:</label>
                    <select
                      className="block w-full rounded-lg border p-2.5"
                      value={consultation}
                      onChange={(e) => {
                        setConsultation(e.target.value);
                      }}
                    >
                      <option value="">Select --</option>
                      <option value="phone">Phone Consultation</option>
                      <option value="video">Video Consultation</option>
                      <option value="clinic">Clinic Consultation</option>
                    </select>
                  </div>

                  <div className="text-black text-sm font-medium mb-4">
                    <label>Type of Package:</label>
                    <select
                      className="block w-full rounded-lg border p-2.5"
                      value={plan}
                      onChange={(e) => {
                        setPlan(e.target.value);
                      }}
                    >
                      <option value="">Select --</option>
                      <option value="mini">Mini</option>
                      <option value="pro">Pro</option>
                    </select>

                    <div className="mt-5">
                      <Link
                        href="./../pages/packageDetails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs"
                      >
                        Read Package Details
                      </Link>
                    </div>
                  </div>
                </div>

                {/* // Patient details */}
                <div>
                  <p className="text-gray-500 text-xs">Personal Details</p>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Name:</label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="John B. Brown"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Age:</label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="28"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Gender:</label>
                    <select
                      className="block w-full rounded-lg border p-2.5"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="">Select --</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Phone:</label>
                    <input
                      type="tel"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="+94123456789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Email:</label>
                    <input
                      type="email"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="abc@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* // Payment details */}
                <div>
                  <p className="text-gray-500 text-xs">Payment Details</p>

                  <div className="mb-2">
                    <label className="block text-sm font-medium">Total:</label>
                    <input
                      type="text"
                      value={`LKR ${total}`}
                      className="block w-full rounded-lg border p-2.5"
                      readOnly
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Payment Method:</label>
                    <select
                      className="block w-full rounded-lg border p-2.5"
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <option value="">Select --</option>
                      <option value="visa">Visa</option>
                      <option value="mastercard">Mastercard</option>
                    </select>
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-medium">Card Number:</label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="**** **** **** ****"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">Card Expiration:</label>
                    <input
                      type="month"
                      className="block w-full rounded-lg border p-2.5"
                      value={cardExpire}
                      onChange={(e) => setCardExpire(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-2">
                    <label className="block text-sm font-medium">CVV:</label>
                    <input
                      type="text"
                      className="block w-full rounded-lg border p-2.5"
                      placeholder="***"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              <CalculateTotal consultation={consultation} plan={plan} setTotal={setTotal} />

              <div className="mt-5 flex justify-end">
                <button
                  type="button"
                  className="mr-4 text-sm font-medium text-gray-500"
                  onClick={closeBookAppointmentModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Confirm Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookAppointmentModal;
