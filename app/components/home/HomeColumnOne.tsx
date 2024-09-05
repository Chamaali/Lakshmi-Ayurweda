"use client";
// import Carousel from '/public/images/4.png';
import Image from "next/image";
import Dig from "/public/images/7.png";

const HomeColumnOne = () => {
  return (
    <>
      <div
        className="bg-[length:1920px]  bg-opacity-10"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dmwk6ybet/image/upload/v1714157388/Lakshmi%20Ayurweda/Background%20Images/bg-1_qlqfua.jpg')",
        }}
      >
        <div className="container">
          <div className="flex flex-row py-4">
            <a href=""  className="no-underline ">
              <div className="flex-column bg-white  rounded-xl  w-48 h-48 mx-3 p-3 content-center hover:scale-105 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="grid justify-items-center gap-4 ">
                  <Image
                    className=""
                    alt=""
                    src={require("@/public/icons/Book Icon.png")}
                    width={50}
                  />
                  <p className="text-green-700 font-serif text-lg text-center">
                    Book an Appointment
                  </p>
                </div>
              </div>
            </a>
            <a href="../../pages/locateClinic" className="no-underline ">
              <div className="flex-column bg-white  rounded-xl  w-48 h-48 mx-3 p-3 content-center hover:scale-105 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="grid justify-items-center gap-4 ">
                  <Image
                    className=""
                    alt=""
                    src={require("../../../public/icons/Locate Icon.png")}
                    width={80}
                  />
                  <p className="text-green-700 font-serif  text-lg text-center">
                    Locate Clinic
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="flex flex-row py-4">
            <a href=""  className="no-underline ">
              <div className="flex-column bg-white  rounded-xl  w-48 h-48 mx-3 p-3 content-center hover:scale-105 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="grid justify-items-center gap-4 ">
                  <Image
                    className=""
                    alt=""
                    src={require("../../../public/icons/Wellness Icon.png")}
                    width={60}
                  />
                  <p className="text-green-700 font-serif  text-lg text-center">
                    Panchakarma Therapy
                  </p>
                </div>
              </div>
            </a>
            <a href="./../services/buyOnlineProducts" className="no-underline ">
              <div className="flex-column bg-white  rounded-xl  w-48 h-48 mx-3 p-3 content-center hover:scale-105 hover:bg-gray-100 transition duration-300 ease-in-out">
                <div className="grid justify-items-center gap-4 ">
                  <Image
                    className=""
                    alt=""
                    src={require("../../../public/icons/Buy Icon.png")}
                    width={70}
                  />
                  <p className="text-green-700 font-serif  text-lg text-center ">
                    Buy Products
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeColumnOne;
