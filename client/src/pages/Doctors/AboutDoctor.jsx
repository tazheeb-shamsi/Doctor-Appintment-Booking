import { formatDate } from "../../utilities/dateFormat";

const AboutDoctor = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About :
          <span className="text-irisBlueColor font-bold text-24px leading-9">
            Dr. Tazheeb Shamsi
          </span>
        </h3>
        <p className="text__para">
          Dr. Tazheeb Shamsi is currently associated with and has over 20 years
          of experience. He did his MBBS from Sri Siddhartha Medical College,
          Tumkur in 1999; DNB from Bangalore Baptist Hospital in 2007; and
          Diploma in Tuberculosis and Chest Diseases from Bangalore Medical
          College in 2002.He has also done diabetes modules from Joslin diabetes
          centre(USA) As a General Physician,diabetologist and Pulmonologist,
          Dr. Suratwala expertise lies in treating cases related to DIABETES
          HYPERTENSION, THYROID Disorders; CHEST Infections; and all kinds of
          FEVER,. In addition, he also caters to Asthma; Allergies; Smokers
          Lungs; Sinusitis; Respiratory Infections; and Tuberculosis.He has
          experience in treating urinary infections,gastrointestinal disorders,
          liver related issues and other common medical illnesses. <br /> Dr.
          Tazheeb is a member of Karnataka Medical Council and Association of
          Physicians of India.he is also a member of indian medical
          association.he attends conferences regularly to update his knowledge.
          His biggest joy is to see a smile on his patients face after their
          recovery and that's what keeps him motivated.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Education
        </h3>
        <ul className="pt-4 md:p5">
          <li className="flex flex—col sm:justify—between sm:items—end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semiBold">
                {formatDate("07-01-1999")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium  text-textColor">
              New Apollo Hospital,New York.
            </p>
          </li>
          <li className="flex flex—col sm:justify—between sm:items—end md:gap-5 mb-[30px]">
            <div>
              <span className=" text-irisBlueColor text-[15px] leading-6 font-semiBold">
                {formatDate("06-26-2005")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium  text-textColor">
              New Apollo Hospital,New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          Experiance
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="font-semibold leading-6 text-[15px] text-yellowColor">
              {formatDate("07-04-2010")} - {formatDate("07-04-2010")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium  text-textColor">
              New Apollo Hospital,New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="font-semibold leading-6 text-[15px] text-yellowColor">
              {formatDate("07-04-2001")} - {formatDate("11-04-2023")}
            </span>

            <p className="text-[16px] leading-6 font-medium text-textColor">
              Jr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium  text-textColor">
              New Apollo Hospital,New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutDoctor;
