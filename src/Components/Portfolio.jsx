import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 1%",
          end: "bottom 1%",
          scrub: true,
        },
      });
      gsap.to(".lastCard", {
        scale: 0.9,
        scrollTrigger: {
          trigger: ".lastCard",
          start: "top 1%",
          end: "bottom 1%",
          scrub: true,
        },
      });
    });
  }, []);

  const projects = [
    {
      title: "Nepal Puspanjali Sikshyalaya",
      description:
        "Nepal Puspanjali Sikshyalaya was my first official project in the field of frontend development, marking an important milestone in my practical learning journey. This project was developed for a preschool, focusing on a user-friendly, colorful, and intuitive interface suitable for young learners and parents.",
      review:
        "The client appreciated the clean design, easy navigation, and how well the website reflected the preschool’s identity. It improved their communication with parents and strengthened their online presence.",
      images: [
        "/Images/desktopSchool.png",
        "/Images/frontSchool.png",
        "/Images/reviewSchool.png",
      ],
      isLast: false,
    },
    {
      title: "WishKart",
      description:
        "WishKart is a digital greeting card platform that allows users to create and share personalized cards for various occasions. It offers customizable templates, colors, and text in a user-friendly interface.",
      review:
        "Users appreciated the simple interface, attractive templates, and ease of creating personalized cards. The platform was praised for being creative, convenient, and time-saving.",
      images: [
        "/Images/kartFront.png",
        "/Images/kartCh.png",
        "/Images/kartVal.png",
      ],
      isLast: false,
    },
    {
      title: "SaralCSIT",
      description:
        "SaralCSIT is an educational platform designed for CSIT students, providing organized study materials, notes, and academic resources in one place.",
      review:
        "Users found the platform helpful due to its clean layout, organized content, and ease of accessing study materials, improving their academic experience.",
      images: [
        "/Images/csitFront.png",
        "/Images/csitPrepare.png",
        "/Images/csitSem.png",
      ],
      isLast: false,
    },
    {
      title: "Finora Blogs",
      description:
        "Finora Blogs is a platform that provides easy-to-understand financial knowledge, covering topics like budgeting, saving, investing, and financial planning.",
      review:
        "Users appreciated the clarity and simplicity of the articles, making finance easy to understand and apply in real life.",
      images: [
        "/Images/blogFront.png",
        "/Images/blogReview.png",
        "/Images/blogPost.png",
      ],
      isLast: true,
    }, 
  ];

  return (
    <div className="relative z-20 lg:px-5 py-10">

      <h1 className="text-reveal text-center text-3xl lg:text-5xl font-semibold font-[poppins] py-10 lg:py-20">
        More about my Projects!!
      </h1>
      {projects.map((project, index) => (
        <section
          key={index}
          className={`sticky ${
            project.isLast ? "lastCard" : "card"
          } top-0 bg-[#0d141f] grid grid-cols-1 h-screen overflow-hidden lg:grid-cols-16 grid-rows-3 lg:grid-rows-2 rounded-2xl`}
        >
          {/* Image */}
          <div className="p-6 col-span-8 order-2 lg:order-1">
            <img
              src={project.images[0]}
              className="w-full h-full object-cover rounded-2xl"
              alt=""
            />
          </div>

          {/* Description */}
          <div className="flex flex-col justify-center gap-10 items-center order-1 lg:order-2 px-5 col-span-8">
            <h2 className="text-3xl lg:text-4xl text-center font-semibold font-[poppins]">
              {project.title}
            </h2>
            <p className="text-center">{project.description}</p>
          </div>

          {/* Review */}
          <div className="flex flex-col justify-center gap-10 items-center order-3 px-5 col-span-6">
            <h2 className="text-4xl text-center font-semibold font-[poppins]">Client's Review</h2>
            <p className="text-center">{project.review}</p>
          </div>

          {/* Images */}
          <div className="hidden lg:flex p-6 gap-5 col-span-10 order-4">
            <img
              src={project.images[1]}
              className="w-1/2 h-full object-cover rounded-2xl"
              alt=""
            />
            <img
              src={project.images[2]}
              className="w-1/2 h-full object-cover rounded-2xl"
              alt=""
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Portfolio;
