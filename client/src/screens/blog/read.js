import React from 'react'
import BreadCrumb from '../../Components/Blog/BreadCrumb'

const breadCrumbsData = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Blog",
        link: "/blog"
    },
    {
        name: "Article title",
        link: "/blog/123"
    }
]

const Read = () => {
  return (
    <section className='mx-auto max-w-5xl flex flex-col px-5 py-5'>
      <article className='flex-1'>
        <BreadCrumb data={breadCrumbsData} />
      </article>
    </section>
  )
}

export default Read
