import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Acerca de la página"
        description="Bienvenido a GreenLife, donde la naturaleza y la comunidad prosperan juntas!"
      />

      <AboutSectionOne />
    </>
  );
};

export default AboutPage;
