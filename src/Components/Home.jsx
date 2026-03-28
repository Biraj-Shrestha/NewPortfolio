import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const c = containerRef.current;

      const loadingLetter = c.querySelectorAll(".willem__letter");
      const box = c.querySelectorAll(".willem-loader__box");
      const growingImage = c.querySelectorAll(".willem__growing-image");
      const headingStart = c.querySelectorAll(".willem__h1-start");
      const headingEnd = c.querySelectorAll(".willem__h1-end");
      const coverImageExtra = c.querySelectorAll(".willem__cover-image-extra");
      const headerLetter = c.querySelectorAll(".willem__letter-white");

      const tl = gsap.timeline({
        defaults: { ease: "expo.inOut" },
        onStart: () => c.classList.remove("hidden"),
      });

      tl.from(loadingLetter, {
        yPercent: 100,
        stagger: 0.025,
        duration: 1.25,
      })
        .fromTo(
          box,
          { width: "0em" },
          { width: "1em", duration: 1.25 },
          "< 1.25",
        )
        .fromTo(
          growingImage,
          { width: "0%" },
          { width: "100%", duration: 1.25 },
          "<",
        )
        .fromTo(
          headingStart,
          { x: "0em" },
          { x: "-0.05em", duration: 1.25 },
          "<",
        )
        .fromTo(headingEnd, { x: "0em" }, { x: "0.05em", duration: 1.25 }, "<")
        .fromTo(
          coverImageExtra,
          { opacity: 1 },
          { opacity: 0, duration: 0.05, ease: "none", stagger: 0.5 },
          "-=0.05",
        )
        .to(
          growingImage,
          { width: "100vw", height: "100vh", duration: 2 },
          "< 1.25",
        )
        .to(box, { width: "110vw", duration: 2 }, "<")
        .from(
          headerLetter,
          { yPercent: 100, opacity:0, duration: 1.25, ease: "expo.out", stagger: 0.025 },
          "< 1.2",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="#"
      className="hidden relative overflow-hidden text-[#f4f4f4]"
    >
      {/* ========== LOADER ========== */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="flex justify-center relative whitespace-nowrap font-medium text-[5.5em] sm:text-[9em] lg:text-[12.5em] leading-[0.75]">
          {/* "Bir" */}
          <div className="willem__h1-start pt-2 flex justify-end w-[1.5em] overflow-hidden">
            {"Bir".split("").map((l, i) => (
              <span key={i} className="willem__letter block relative">
                {l}
              </span>
            ))}
          </div>

          {/* Image Box */}
          <div className="willem-loader__box flex flex-col justify-center items-center w-0 relative">
            <div className="flex justify-center items-center min-w-[1em] h-[100%] relative">
              <div className="willem__growing-image flex justify-center items-center w-full h-full absolute overflow-hidden">
                <div className="absolute w-full min-w-[1em] h-full">
                  <img
                    className="willem__cover-image-extra pointer-events-none object-cover select-none w-full h-full absolute top-0 left-0 z-[3]"
                    src="/Images/party.jpg"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="willem__cover-image-extra pointer-events-none object-cover select-none w-full h-full absolute top-0 left-0 z-[2]"
                    src="/Images/TreeBone.jpg"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="willem__cover-image-extra pointer-events-none object-cover select-none w-full h-full absolute top-0 left-0 z-[1]"
                    src="/Images/me.jpg"
                    loading="lazy"
                    alt=""
                  />
                  <img
                    className="pointer-events-none object-cover object-center select-none w-full h-full absolute top-0 left-0"
                    src="/Images/photo.jpg"
                    loading="lazy"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          {/* "aj" */}
          <div className="willem__h1-end pt-2 flex justify-start w-[1.5em] overflow-hidden pb-[0.15em]">
            {"aj".split("").map((l, i) => (
              <span
                key={i}
                className="willem__letter block relative pb-[0.15em]"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="flex flex-col justify-between items-center w-full h-screen relative">
        {/* Top spacer */}
        <div className="w-full" />
      </div>
    </section>
  );
}
