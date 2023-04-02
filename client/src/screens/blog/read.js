import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../../Components/Blog/BreadCrumb";
import SugestedPost from "../../Components/Blog/SugestedPost";
import images from "../../constants/images";

const breadCrumbsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/blog/123",
  },
];

const postsData = [
    {
        _id: "at1",
        image : images.Post1,
        title: "Help children get better education",
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100"
    },
    {
        _id: "at2",
        image : images.Post2,
        title: "Help children get better education",
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100"
    },
    {
        _id: "at3",
        image : images.Post3,
        title: "Help children get better education",
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100"
    },
    {
        _id: "at4",
        image : images.Post4,
        title: "Help children get better education",
        createdAt: "Sun Apr 02 2023 10:09:21 GMT+0100"
    },
]

const tagsData = [
    "Lifestyle",
    "Fashion",
    "Lear",
    "Beauty",
    "Styles"
]
const Read = () => {
  return (
    <section className="mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start lg:mb-12">
      <article className="flex-1">
        <BreadCrumb data={breadCrumbsData} />
        <div>
          <img
            src={images.Post1}
            alt="article banner"
            className="rounded-xl w-full"
          />
          {/* category */}
          <Link
            to="blog/?category=selectedCategory"
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
          >
            Education
          </Link>
          {/* title */}
          <h1 className="text-xl font-medium font-roboto mt-4 text-dark-hard md:text-[26px]">
            Help children get better education
          </h1>
          {/* content */}
          <div className="text-dark-soft mt-4">
            <p className="leading-7 md:text-base font-roboto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus
              vitae congue mauris rhoncus aenean vel elit scelerisque. In
              egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi
              tristique senectus et netus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Egestas purus viverra accumsan in
              nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit
              scelerisque. In egestas erat imperdiet sed euismod nisi porta
              lorem mollis. Morbi tristique senectus et netus. Mattis
              pellentesque id nibh tortor id aliquet lectus proin. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
        </div>
      </article>
        <SugestedPost header="Latest Articles" posts={postsData} tags={tagsData}
        className="mt-8 md:mb-8 lg:mt-0 lg:max-w-xs"
        />
    </section>
  );
};

export default Read;
