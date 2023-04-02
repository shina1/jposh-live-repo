import React from "react";
import ArticleCards from "./ArticleCards";
import {FaArrowRight} from 'react-icons/fa';

const BlogArticles = () => {
  return (
    <section className="flex flex-col container m-auto px-5 py-10">
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        <ArticleCards className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]" />
        <ArticleCards
          className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"
        />
        <ArticleCards
          className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"
        />
        <ArticleCards
          className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"
        />
      </div>
      <button className="flex flex-row mx-auto items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg"><span className="text-primary">More articles</span> <FaArrowRight size={15} /></button>
    </section>
  );
};

export default BlogArticles;
