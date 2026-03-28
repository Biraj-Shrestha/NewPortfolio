import React from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Camera,
  Layers,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "Photography Showcase",
      desc: "A curated collection of visual stories capturing the essence of Kathmandu and beyond.",
      img: "./Images/ktm.jpg",
      tags: ["Visual Arts", "Lighting", "Storytelling"],
      link: "#",
    },
    {
      title: "Digital Darkroom",
      desc: "Mastering post-processing techniques to create high-impact, professional aesthetic visuals.",
      img: "./Images/pimbahal.jpg",
      tags: ["Lightroom", "Color Grading", "Edit"],
      link: "#",
    },
    {
      title: "Creative Exploration",
      desc: "Pushing the boundaries of digital canvases through innovative design and motion.",
      img: "./Images/Aesthetic.jpg",
      tags: ["Design", "Innovation", "Art"],
      link: "#",
    },
  ];

  const galleryImages = [
    "/Images/Rain.jpg",
    "/Images/Five.jpg",
    "/Images/Clock.jpg",
    "/Images/flower.jpg",
    "/Images/Fruit.jpg",
    "/Images/elaichi.jpg",
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 overflow-hidden">
      {/* Header */}
      <section className="container mx-auto px-6 mb-24 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-4 block">
            Selected Works // 2024-2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
            The <span className="text-cyan-400">Archi</span>ve
          </h1>
          <p className="text-white/50 text-xl max-w-2xl font-medium leading-relaxed">
            A curated selection of digital creations, photography explorations,
            and technical implementations that define the Antigravity ethos.
          </p>
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group relative rounded-[2.5rem] bg-[#111] overflow-hidden border border-white/5 hover:border-cyan-400/30 transition-all duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 p-10 w-full space-y-4">
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-3xl font-black text-white group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm hidden group-hover:block transition-all duration-500">
                {project.desc}
              </p>
              <div className="pt-2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href={project.link}
                  className="p-3 bg-cyan-500 rounded-full text-black hover:bg-white transition-colors"
                >
                  <Eye className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full text-white hover:bg-cyan-500 hover:text-black transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Visual Process Section */}
      <section className="bg-surface-900/50 py-32 border-y border-white/5 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-cyan-400">
                <Sparkles className="w-5 h-5" />
                <span className="font-mono text-sm tracking-widest uppercase">
                  The Process
                </span>
              </div>
              <h2 className="text-5xl font-black text-white uppercase italic leading-tight">
                Turning Visions <br /> Into{" "}
                <span className="text-cyan-400">Reality.</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed">
                Every project is a journey from raw concept to polished final
                product. I focus on the subtle details that bridge the gap
                between "good" and "extraordinary."
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Discovery",
                    desc: "Understanding goals and site architecture.",
                    icon: <Eye />,
                  },
                  {
                    title: "Design",
                    desc: "Crafting futuristic, lightweight UI components.",
                    icon: <Layers />,
                  },
                  {
                    title: "Capture",
                    desc: "Integrating high-end visual content.",
                    icon: <Camera />,
                  },
                ].map((step, i) => (
                  <div
                    key={i}
                    className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all"
                  >
                    <div className="p-3 bg-cyan-500/20 rounded-xl text-cyan-400">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{step.title}</h4>
                      <p className="text-white/40 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className={`relative overflow-hidden rounded-3xl ${i % 3 === 0 ? "col-span-2 aspect-video" : "aspect-square"}`}
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt=""
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="py-32 text-center relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -z-10"
        />
        <div className="container mx-auto px-6 space-y-12">
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none">
            Let's Build <br /> Something{" "}
            <span className="text-cyan-400 uppercase">Weightless!!</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/contact"
              className="group bg-white text-black px-10 py-5 rounded-full font-black text-lg hover:bg-cyan-400 transition-all flex items-center gap-3"
            >
              Start a Project{" "}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Portfolio;
