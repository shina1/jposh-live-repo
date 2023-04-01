import React from 'react'
import ArticleCards from './ArticleCards'

const BlogArticles = () => {
  return (
    <section className='m-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <ArticleCards className="w-full md:w-[calc(50%-20px)] lg:w-[calc(30%-20px)]"/>
        <ArticleCards className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"/>
        <ArticleCards className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"/>
        <ArticleCards className="w-full md:w-[calc(50%-20px)]
        lg:w-[calc(33.33%-21px)]"/>
      
    </section>
  )
}

export default BlogArticles
