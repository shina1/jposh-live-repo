import React from "react";
import ArticleCards from "./ArticleCards";
import {FaArrowRight} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { articles } from "../../data";

const BlogArticles = () => {

  return (
    <section className="flex flex-col container m-auto px-5 py-10">
      {/* <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 border border-red-500"> */}
      {/* md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)] */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-x-5 gap-y-5 pb-10">
      {
        articles.map((article) => {
          return (
           <>
           <Link to={`/blog/${article.id}`}>
            <ArticleCards title={article.title} desc={article.desc} id={article.id} className="w-full " key={article.id}/> 
            </Link>   
           </>
          )
        })
      }
       
        {/* <ArticleCards
          className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"
        />
        */}
      </div>
      <button className="flex flex-row mx-auto items-center gap-x-2 font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg"><span className="text-primary">More articles</span> <FaArrowRight size={15} /></button>
    </section>
  );
};

export default BlogArticles;
