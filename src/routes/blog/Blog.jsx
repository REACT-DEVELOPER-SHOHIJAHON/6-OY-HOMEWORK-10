import React from "react";
import { useTranslation } from "react-i18next";
import artwork from "../../assets/artwork.svg";
import blog1 from "../../assets/blogs-1.png";
import Nav from "../home/nav/Nav";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <>
      <Nav />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <img
              className="w-full rounded-lg shadow-2xl"
              src={blog1}
              alt={t("blog-1")}
            />
          </div>

          <div className="space-y-16">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-12 rounded-2xl shadow-2xl">
              <h3 className="text-white font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 text-center leading-tight">
                {t("blog-1")}
              </h3>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-4")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-5")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed">
                {t("blog-6")}
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 p-12 rounded-2xl shadow-2xl">
              <h2 className="text-white font-montserrat font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-8 text-center leading-tight">
                {t("blog-2")}
              </h2>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-4")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-5")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed">
                {t("blog-6")}
              </p>
            </div>

            <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 p-12 rounded-2xl shadow-2xl">
              <h2 className="text-white font-montserrat font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-8 text-center leading-tight">
                {t("blog-3")}
              </h2>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-4")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl mb-6 text-center leading-relaxed">
                {t("blog-5")}
              </p>
              <p className="text-white font-montserrat text-lg md:text-xl lg:text-2xl xl:text-3xl text-center leading-relaxed">
                {t("blog-6")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center mt-16 mb-12">
        <img
          className="w-full max-w-4xl rounded-lg shadow-2xl"
          src={artwork}
          alt={t("artwork")}
        />
      </div>
    </>
  );
};

export default Blog;
