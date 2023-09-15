import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import heroImg1 from "/images/hero-img01.png";
import heroImg2 from "/images/hero-img02.png";
import heroImg3 from "/images/hero-img03.png";
import icon1 from "/images/icon01.png";
import icon2 from "/images/icon02.png";
import icon3 from "/images/icon03.png";
import avatarIcon from "/images/avatar-icon.png";
import featureImg from "/images/feature-img.png";
import faqImg from "/images/faq-img.png";
import videoIcon from "/images/video-icon.png";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorsList from "../components/Doctors/DoctorsList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ============= Hero Section ================== */}
      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* ============= Hero Content ================== */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__paragraph">
                  For 30 years in a row, Indian News & World Report has
                  recognized us as one of the best public hospitals in the
                  nation and #1 in Bangalore. We are serving our best and
                  maintaining our current standards.we are constantly striving
                  to improve our facilities and services to meet the
                  ever-changing needs of our patients and community.
                </p>

                <button className="btn">Request an Appointment</button>
              </div>

              {/* ========== hero counter ============ */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Year of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Clinic Locations</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px]">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p className="text__paragraph">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ============= Hero Content Ends================== */}

            <div className="flex gap-[30px] justify-end">
              <div>
                <img className="w-full" src={heroImg1} alt="hero1" />
              </div>
              <div className="mt-[30px]">
                <img className="w-full mb-[30px]" src={heroImg2} alt="hero1" />
                <img className="w-full" src={heroImg3} alt="hero1" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= Hero Section End================== */}

      {/* ============= CallToAction Section start================== */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="" />
                {/* <img src={icon3} alt="" /> */}
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[50px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  World class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to Clinic
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-headingColor mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= CallToAction Section End================== */}

      <About />

      {/* ============= Services Section Starts================== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>
      {/* ============= Services Section Ends================== */}

      {/* ============= Features Section Start================== */}
      <section>
        <div className="container ">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual Treatment <br />
                any time.
              </h2>
              <ul className="pl-4">
                <li className="text__paragraph">
                  1. Schedule appointment directly.
                </li>
                <li className="text__paragraph">
                  2. Search for your Doctor here, and contact there office.
                </li>
                <li className="text__paragraph">
                  3. View our Doctors who are acceptig new patients, and use the
                  scheduling tool to Schedule your appointment with the Doctor.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            <div className="relative flex justify-end z-10 xl:w-[770px] mt-[50px] lg:mt-0 ">
              <img src={featureImg} alt="" className="w-3/4" />

              <div className="absolute w-[150px] lg:w-[248px] bg-white  bottm-[50px] md:bottm-[100px] left-1 shadow-lg md:l-7 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] md:mt-[350px] mt-[125px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue , 25
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[400]">
                      10:00 AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#ccf0f3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:left-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consiltion
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] lg:text-[16px] leading-3 lg:leading-[22px] font-[700] text-headingColor ">
                    Tazheeb Shamsi
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============= Features Section Ends================== */}

      {/* ================ Our Great Doctors Section Start ============== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <DoctorsList />
        </div>
      </section>
      {/* ================ Our Great Doctors Section Ends============== */}

      {/* ============= FAQ Section Start================== */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w1/2 hidden md:block">
              <img src={faqImg} alt="faqImage" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by beloved patients</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ============= FAQ Section Ends================== */}

      {/* ============= Testionial Section Start================== */}
      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">What our patients say</h2>
            <p className="text__paragraph text-center">
              World class care for everyone. Our health system offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* ============= Testionial Section Ends================== */}
    </>
  );
};

export default Home;
