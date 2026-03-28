import React from "react";

const ITEMS = [
  { text: "I BUILD", span: "BUILD BIGGER" },
  { text: "UI/UX", span: "IN WEEKS" },
  { text: "FRONTEND", span: "LIFE TO PROJECT" },
  { text: "BACKEND", span: "CONTACT NOW" },
  { text: "APP", span: "FAST RESPONSE" },
];

export default function TextEffect() {
  return (
    <div className="w-screen lg:w-[80vw] mx-auto font-['outfit'] pt-10" id="about" >
      <style>{`
        .text-reveal {
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          transition: background-size cubic-bezier(0.1, 0.5, 0.5, 1) 0.5s;
          animation-name: reveal;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
          animation-timeline: view();
          animation-range: entry 100% cover 50%;
        }

        @keyframes reveal {
          to {
            background-size: 100%;
          }
        }

        .text-reveal-span {
          clip-path: polygon(0 50%, 100% 50%, 100% 50%, 0 50%);
          transition: all cubic-bezier(0.1, 0.5, 0.5, 1) 0.4s;
        }

        .text-hover:hover > .text-reveal-span {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
        }

        .about-text {
          color: rgba(182, 182, 182, 0.2);
          background: linear-gradient(to right, #b6b6b6, #b6b6b6) no-repeat;
          -webkit-background-clip: text;
          background-clip: text;
          background-size: 0%;
          animation: reveal linear forwards;
          animation-timeline: view();
          animation-range: entry 100% cover 50%;
        }
      `}</style>

      {/* ── About Me ────────────────────────────────── */}
      <div className="my-20 px-4 lg:px-0">
        <h2 className="text-reveal text-3xl lg:text-5xl text-[#b6b6b6] font-semibold font-[outfit] mb-10 text-center">
          About Me !!
        </h2>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
          Computer Science student at St. Xavier&apos;s College currently in my
          fifth semester, 
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
          building real-world experience as a freelancer on
          Fiverr and Upwork. I design and 
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
          develop digital solutions — from web
          applications to complete platforms — while 
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
          actively seeking
          internship opportunities to sharpen my craft further.
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center mt-6">
          Beyond code, I&apos;m a passionate photographer who
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
           finds joy in
          capturing Nepal&apos;s festivals, landscapes, and everyday moments
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
           through a lens. This eye for detail carries into everything I build
          — clean 
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center">
           interfaces, thoughtful design, and pixel-perfect execution.
        </p>
        <p className="about-text text-lg lg:text-2xl leading-relaxed lg:leading-[1.8] font-[outfit] max-w-[900px] mx-auto text-center mt-6 font-semibold">
          Let&apos;s connect and create something meaningful
          together.
        </p>
      </div>

      {/* ── Section Heading ─────────────────────────── */}
      <div className="flex justify-center items-center my-20">
        <h1 className="text-reveal text-[clamp(30px,5vw,70px)] text-center text-[#b6b6b6] font-semibold font-[outfit] pb-5">
          Project in mind ? Let&apos;s Build it!!
        </h1>
      </div>

      {/* ── Text Effect Items ───────────────────────── */}
      <div className="flex flex-col w-[90vw] lg:w-full mx-auto justify-center items-start">
        {ITEMS.map((item, i) => (
          <h2
            key={i}
            className="text-reveal text-hover group text-[10vw] lg:text-[7vw] tracking-[-0.01em] leading-[100%] m-0 w-full border-b border-[#2f2b28] flex flex-col items-start justify-center relative py-2"
          >
     {item.text}
            <span className="text-reveal-span absolute w-full h-full left-0 bg-[#4246ce] text-[#0d0d0d] flex items-center">
              {item.span}
            </span>
          </h2>
        ))}
      </div>

    </div>
  );
}