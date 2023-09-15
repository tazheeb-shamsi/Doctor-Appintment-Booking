import { useState } from "react";
import doctorImg from "/images/doctor-img02.png";
import starIcon from "/images/Star.png";
import AboutDoctor from "./AboutDoctor";
import Feedback from "./Feedback";
import SidePannel from "./SidePannel";

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px] max-h-[200px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span className="bg-[#ccf0f3] text-irisBLueColor py-1 lg:py-2 px-6 text-[12px] lg:text-[16px] leading-4 lg:leading-7 font-semibold rounded">
                  Surgion
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Tazheeb Shamsi
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] lg:text-[16px] leading-5 lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className=" text-[14px] lg:text-[16px] leading-5 lg:leading-7 font-[400] text-textColor">
                    (298)
                  </span>
                </div>
                <p className="text__para text-[14px] md:text-[14px] leading-5 lg:max-w-[390px]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
                  deleniti cum exercitationem, harum aspernatur reprehenderit
                  tempore doloribus alias molestias obcaecati temporibus quos
                  laborum dolor consequatur vitae perferendis! Commodi, beatae
                  quia.
                </p>
              </div>
            </div>

            <div className="border-b border-solid border-[#0066ff34] mt-[50px]">
              <button
                className={`${
                  tab === "about" &&
                  "border-b-2 border-solid border-primaryColor"
                }px-5 py-2 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}
                onClick={() => setTab("about")}
              >
                About
              </button>
              <button
                className={`${
                  tab === "feedback" &&
                  " border-b-2 border-solid border-primaryColor"
                }px-5 py-2 mr-5 text-[16px] leading-7 font-semibold text-headingColor`}
                onClick={() => setTab("feedback")}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {tab === "about" && <AboutDoctor />}
              {tab === "feedback" && <Feedback />}
            </div>
          </div>

          <div>
            <SidePannel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
