import React from "react";
import linkedin from "../../../assets/linkedin.svg";
import twitter from "../../../assets/twitter.svg";
import medium from "../../../assets/medium.svg";
import hero from "../../../assets/hero.svg";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300 py-16">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 flex flex-col items-start">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-4">
            {t("hero-1")}
          </h2>
          <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
            {t("hero-2")}
          </h3>
          <p className="text-gray-700 text-base mb-8">{t("hero-3")}</p>
          <div className="flex gap-6">
            <SocialIcon src={twitter} alt="Twitter" />
            <SocialIcon src={linkedin} alt="LinkedIn" />
            <SocialIcon src={medium} alt="Medium" />
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            className="w-full max-w-md lg:max-w-lg transition-transform duration-300 hover:scale-105"
            src={hero}
            alt="Hero"
          />
        </div>
      </div>
    </section>
  );
};

const SocialIcon = ({ src, alt }) => (
  <img
    className="w-12 h-12 transition-transform duration-300 hover:scale-110"
    src={src}
    alt={alt}
  />
);

export default Hero;
