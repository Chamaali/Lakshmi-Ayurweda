"use client";

import Link from "next/link";
import { useState } from "react";
import CalculateTotal from "../constants/CalculateTotal"; // Adjust the path as necessary
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase"; // Adjust the path based on your project structure

interface BookAppointmentModalProps {
  closeBookAppointmentModal: () => void; // Define the type for the prop
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({
  closeBookAppointmentModal,
}) => {
  const [step, setStep] = useState(1); // 1: BookAppointment, 2: UploadReceipt


  const [consultation, setConsultation] = useState(""); // phone, video, clinic
  const [plan, setPlan] = useState(""); // mini, pro
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState(""); // male, female, other
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [total, setTotal] = useState(0); // calculated total price based on consultation and plan
  // const [paymentMethod, setPaymentMethod] = useState(""); // credit, debit, paypal, etc.
  // const [cardNumber, setCardNumber] = useState("");
  // const [cardExpire, setCardExpire] = useState("");
  // const [cvv, setCvv] = useState("");
  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [imageExtension, setImageExtension] = useState<string | null>(null);
  

  const handleFileUpload = async (file: File) => {
    if (!file) return;
    const extension = file.name.split(".").pop()?.toLowerCase() || "";
    setImageExtension(extension);
    // console.log(extension)
    setUploading(true);
    const storageRef = ref(storage, `receipts/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        console.error(error);
        alert("Failed to upload receipt.");
        setUploading(false);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setReceiptUrl(url);
        setUploading(false);
      }
    );
  };

  const validateInputs = (): boolean => {
    if (!name || !age || !gender || !phone || !email) {
      alert("Please fill out all required fields before proceeding.");
      return false;
    }
    return true;
  };
  const handleNextStep = () => {
    if (validateInputs()) {
      setStep(2); // Proceed to the payment step if validation passes
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevents the default form submission
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/appointments`,
        {
          // cache: "force-cache"
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, age, gender, phone, email, typeOfConsultation:consultation, typeofPackage:plan, totalAmount:total, url:receiptUrl
            // , paymentMethod, cardNumber, cardExpire, cvv
          }),
        }
      );
      console.log(res)
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
    <>
      {step === 1 && (
        <section className="fixed flex items-center justify-center text-black  inset-0 z-10 overflow-y-auto my-2">
          <div className="mx-auto  bg-white rounded p-6 shadow-lg">
            <div className="mx-auto">
              <h2 className="text-lg font-semibold text-gray-900">
                Book Appointment
              </h2>

              <div className="mt-3 sm:mt-4 lg:flex lg:items-start lg:gap-12">
                <form onSubmit={handleSubmit}>
                  <div className="md:grid md:grid-cols-1 gap-4 rounded-lg border border-gray-200 p-4 shadow-sm">
                    {/* // Patient details */}
                    <div>
                      <p className="text-gray-500 text-xs">Personal Details</p>
                      <div className="mb-2">
                        <label className="block text-sm font-medium">
                          Name:
                        </label>
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
                        <label className="block text-sm font-medium">
                          Age:
                        </label>
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
                        <label className="block text-sm font-medium">
                          Gender:
                        </label>
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
                        <label className="block text-sm font-medium">
                          Phone:
                        </label>
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
                        <label className="block text-sm font-medium">
                          Email:
                        </label>
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
                  </div>

                  <CalculateTotal
                    consultation={consultation}
                    plan={plan}
                    setTotal={setTotal}
                  />

                  <div className="mt-5 flex justify-end">
                    <button
                      type="button"
                      className="mr-4 text-sm font-medium text-gray-500"
                      onClick={closeBookAppointmentModal}
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                      onClick={() => handleNextStep()}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Step 2 ============================================================ */}
      {step === 2 && (
        <section className="fixed flex items-center justify-center text-black  inset-0 z-10 overflow-y-auto my-2">
          <div className="mx-auto  bg-white rounded p-6 shadow-lg">
            <div className="mx-auto">
              <h2 className="text-lg font-semibold text-gray-900">
                Book Appointment
              </h2>

              <div className="mt-3 sm:mt-4 lg:flex lg:items-start lg:gap-12">
                <form onSubmit={handleSubmit}>
                  <div className="md:grid md:grid-cols-2 gap-4 rounded-lg border border-gray-200 p-4 shadow-sm">
                    {/* // Appointment details */}
                    <div>
                      <p className="text-gray-500 text-xs">
                        Appointment Details
                      </p>

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
                      </div>
                      <div className="mb-2">
                        <label className="block text-sm font-medium">
                          Total:
                        </label>
                        <input
                          type="text"
                          value={`LKR ${total}`}
                          className="block w-full rounded-lg border p-2.5"
                          readOnly
                        />
                      </div>
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

                    {/* // Payment details */}
                    <div>
                      <div className="mx-auto bg-white rounded p-6">
                        <h2 className="text-lg font-semibold text-gray-900">
                          Upload Payment Receipt
                        </h2>
                        <div className="mt-3">
                          <p className="text-gray-500 text-xs">
                            Payment Receipt
                          </p>
                          <input
                            type="file"
                            accept="image/*,application/pdf"
                            className="block w-full rounded-lg border p-2.5"
                            onChange={(e) =>
                              e.target.files &&
                              handleFileUpload(e.target.files[0])
                            }
                          />
                          {uploading && (
                            <p className="text-sm text-blue-500">
                              Uploading...
                            </p>
                          )}
                          {receiptUrl && (
                            <div className="mt-4">
                              {imageExtension == "pdf" ? (
                                <a
                                  href={receiptUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 underline"
                                >
                                  View Uploaded PDF
                                </a>
                              ) : (
                                <img
                                  style={{
                                    maxWidth: "200px",
                                    width: "100%",
                                    height: "auto",
                                  }}
                                  src={receiptUrl}
                                  alt="Uploaded Receipt"
                                  className="w-full max-w-md rounded-lg shadow-md mt-2"
                                />
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* <div className="mb-2">
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
                    </div> */}
                    {/* <div className="mb-2">
                      <label className="block text-sm font-medium">CVV:</label>
                      <input
                        type="text"
                        className="block w-full rounded-lg border p-2.5"
                        placeholder="***"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        required
                      />
                    </div> */}
                    {/* </div> */}
                  </div>

                  <CalculateTotal
                    consultation={consultation}
                    plan={plan}
                    setTotal={setTotal}
                  />

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
                      onClick={() => setStep(1)}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 ml-2 bg-blue-500 text-white rounded-lg"
                      // onClick={() => setStep(1)}
                    >
                      Confirm Appoinment
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default BookAppointmentModal;
