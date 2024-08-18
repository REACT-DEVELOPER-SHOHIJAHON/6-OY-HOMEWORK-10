import React, { useState } from "react";
import { Link } from "react-router-dom";
import blog1 from "../../../assets/blogs-1.png";
import blog2 from "../../../assets/blogs-2.png";
import { useTranslation } from "react-i18next";

const Blogs = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("all");

  const blogImages = [blog1, blog2, blog1, blog2, blog1, blog2];
  const categories = [
    "all",
    "ui-design",
    "ux-design",
    "product-design",
    "articles",
    "tutorials",
    "news",
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Categories Section */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-6 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`text-lg font-medium px-4 py-2 rounded-lg transition-transform duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 hover:text-white hover:shadow-md"
                }`}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogImages.map((blogImage, index) => (
            <Link
              to="/blog"
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden transition-shadow duration-300"
            >
              <img
                src={blogImage}
                alt={`Blog ${index + 1}`}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <p className="text-sm text-gray-600 font-medium mb-2">
                  {t("blogs-8")}
                </p>
                <p className="text-pink-500 font-bold text-xl mb-4">
                  {t("blogs-9")}
                </p>
                <p className="text-base text-gray-700 mb-4">{t("blogs-10")}</p>
                <Link
                  to="/blog"
                  className="text-pink-500 font-medium text-lg border-b-2 border-pink-500 pb-1 hover:underline"
                >
                  {t("blogs-11")}
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
