import aboutImg from "/images/about.png";
import aboutCardImg from "/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row justify-between gap-[50px] lg:gap-[130px] xl:gap-0">
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
          <img src={aboutImg} alt="aboutImg" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="aboutCardImg" />
          </div>
        </div>

        {/* ====== about Content ======= */}

        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
          <h2 className="heading">Proud to be one of the nations best</h2>
          <p className="text__paragraph">
            For 30 years in a row, India News & World Report has recognized us
            as one of the best public hospitals in the Nation and #1 in
            Bangalore. We are serving our best and maintaining our current
            standards.we are constantly striving to improve our facilities and
            services to meet the ever-changing needs of our patients and
            community.
          </p>
          <p className="text__paragraph">
            Our dedicated team of healthcare professionals remains committed to
            providing exceptional care and ensuring that we remain at the
            forefront of medical advancements.
          </p>
          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
