import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Welcome to GreenLife Where Nature and Community Thrive Together!"
      />

      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
