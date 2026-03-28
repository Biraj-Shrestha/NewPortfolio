import React, { useEffect, useRef } from "react";
import {
  animate,
  scroll,
  cubicBezier,
} from "https://cdn.jsdelivr.net/npm/motion@11.11.16/+esm";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ScrollGrid = () => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const hero = imageRef.current;
    const section = sectionRef.current;
    const grid = containerRef.current;

    if (!hero || !section || !grid) return;

    const layers = grid.querySelectorAll(".layer");

    // 1. Capture the Target Grid Size
    // We reset the hero to natural grid size briefly to measure it
    hero.style.width = "100%";
    hero.style.height = "100%";
    const targetWidth = hero.offsetWidth;
    const targetHeight = hero.offsetHeight;

    // 2. Set Initial Fullscreen State
    hero.style.width = "100vw";
    hero.style.height = "100vh";
    hero.style.borderRadius = "0px";

    // 3. Hero Animation: Fullscreen -> Grid Cell
    scroll(
      animate(
        hero,
        {
          width: ["100vw", `${targetWidth}px`],
          height: ["100vh", `${targetHeight}px`],
          borderRadius: ["0rem", "1rem"],
          fontSize: ["4rem", "1.5rem"], // Shrink text as it goes into the grid
        },
        {
          easing: cubicBezier(0.65, 0, 0.35, 1),
        },
      ),
      { target: section, offset: ["start start", "end end"] },
    );

    // 4. Background Images: Center -> Grid Position
    const viewportCenterX = window.innerWidth / 2;
    const viewportCenterY = window.innerHeight / 2;

    layers.forEach((layer, layerIndex) => {
      const items = layer.querySelectorAll(":scope > div");

      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenterX = rect.left + rect.width / 2;
        const itemCenterY = rect.top + rect.height / 2;

        // Calculate how far the item is from the viewport center
        const offsetX = viewportCenterX - itemCenterX;
        const offsetY = viewportCenterY - itemCenterY;

        scroll(
          animate(
            item,
            {
              opacity: [0, 0, 1],
              scale: [0.5, 0.5, 1], // Start small and grow
              x: [offsetX, offsetX, 0], // Move from center to grid position
              y: [offsetY, offsetY, 0],
            },
            {
              // Delay appearance so they stay hidden under the hero initially
              offset: [0, 0.4, 1],
              easing: cubicBezier(0.2, 0.8, 0.2, 1),
            },
          ),
          {
            target: section,
            offset: ["start start", `${0.8 + layerIndex * 0.1} end`],
          },
        );
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="content-wrap"
      id="projects"
    >
      <style>{`
        .content-wrap { background: #000; color: #fff; font-family: system-ui; }
        
        /* The length of the scroll journey */
        .scroll-section { min-height: 400vh; position: relative; }

        .sticky-container {
          height: 100vh;
          width: 100%;
          position: sticky;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .content-wrap .grid {
          --container-width: 1100px;
          --gap: 20px;
          width: var(--container-width);
          max-width: calc(100vw - 4rem);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: var(--gap);
          aspect-ratio: 16 / 9;
          position: relative;
          }
          
        .layer {
          display: grid;
          grid-column: 1 / -1;
          grid-row: 1 / -1;
          grid-template-columns: subgrid;
          grid-template-rows: subgrid;
          pointer-events: none;
          }
          
          .layer > div {
            pointer-events: auto;
          will-change: transform, opacity;
          position: relative;
          display: flex;
          justify-content:center;
          align-items:center;
          }
          .layer > div a {
  display: block;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}
          .layer > div >a::before {
  content: "Click to View";
  color:white;
  font-size:25px;
  font-family:"Outfit";
  text-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 1rem;
}
          .layer > div > a:hover::before {
          opacity: 1;
}

        .content-wrap .grid img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1rem;
          aspect-ratio: 1 / 1;
          background: #222;
        }
        /* Hero Cell Positioning */
        .scaler {
          grid-column: 3;
          grid-row: 2;
          z-index: 100; /* Always stay on top of other images */
          position: relative;
        }

        .layer:nth-of-type(1) div:nth-child(1) { grid-column: 1; grid-row: 1; }

        .layer:nth-of-type(1) div:nth-child(2) { grid-column: 2; grid-row: 1; }

        .layer:nth-of-type(1) div:nth-child(3) { grid-column: 3; grid-row: 1; }

        .layer:nth-of-type(1) div:nth-child(4) { grid-column: 4; grid-row: 1; }

        .layer:nth-of-type(1) div:nth-child(5) { grid-column: 5; grid-row: 1; }

        .layer:nth-of-type(2) div:nth-child(1) { grid-column: 1; grid-row: 2; }

        .layer:nth-of-type(2) div:nth-child(2) { grid-column: 2; grid-row: 2; }

        .layer:nth-of-type(2) div:nth-child(3) { grid-column: 3; grid-row: 2; }

        .layer:nth-of-type(2) div:nth-child(4) { grid-column: 4; grid-row: 2; }

        .layer:nth-of-type(2) div:nth-child(5) { grid-column: 5; grid-row: 2; }

        .layer:nth-of-type(3) div:nth-child(1) { grid-column: 1; grid-row: 3; }

        .layer:nth-of-type(3) div:nth-child(2) { grid-column: 2; grid-row: 3; }

        .layer:nth-of-type(3) div:nth-child(3) { grid-column: 3; grid-row: 3; }

        .layer:nth-of-type(3) div:nth-child(4) { grid-column: 4; grid-row: 3; }

        .layer:nth-of-type(3) div:nth-child(5) { grid-column: 5; grid-row: 3; }

        @media (max-width: 768px) {
  .content-wrap .grid {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(7, 1fr); /* Added one extra row for better spacing */
    gap: 10px;
    width: 100%;
    max-width: 95vw;
  }
    .content-wrap .grid img {
          aspect-ratio: 16 / 13;
        }
.sticky-container {
          height: 100vh;}
  /* 1. Make the Hero box span both columns in the middle */
  .scaler {
    grid-column: 1 / -1; 
    grid-row: 3;
    z-index: 100;
    width: 100%;
    height: 100%;
  }
    
        .layer:nth-of-type(1) div:nth-child(1) { grid-column: 1; grid-row: 1; }
        .layer:nth-of-type(1) div:nth-child(2) { grid-column: 2; grid-row: 1; }
        .layer:nth-of-type(1) div:nth-child(3) { grid-column: 1; grid-row: 2; }
        .layer:nth-of-type(1) div:nth-child(4) { grid-column: 2; grid-row: 2; }
        .layer:nth-of-type(1) div:nth-child(5) { grid-column: 1; grid-row: 3; }
        .layer:nth-of-type(2) div:nth-child(1) { grid-column: 2; grid-row: 3; }
        .layer:nth-of-type(2) div:nth-child(2) { grid-column: 1; grid-row: 4; }
        .layer:nth-of-type(2) div:nth-child(5) { grid-column: 2; grid-row: 4; }
        .layer:nth-of-type(2) div:nth-child(4) { grid-column: 1; grid-row: 5; }
        .layer:nth-of-type(2) div:nth-child(3) { grid-column: 2; grid-row: 5; }
}
        `}</style>

      <main ref={containerRef} className="relative">
        <section ref={sectionRef} className="scroll-section">
          <div className="sticky-container">
            <div className="grid">
              {/* Layer 1: Corners */}
              <div className="layer">
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/water.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/Rain.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/TreeBone.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/durbar.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/sky.jpg" alt="" />
                  </Link>
                </div>
              </div>

              {/* Layer 2: Sides */}
              <div className="layer">
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/pimbahal.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/Fruit.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/pimbahal.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/vibe.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/Nyachowk.jpg" alt="" />
                  </Link>
                </div>
              </div>

              {/* Layer 3: Top/Bottom Center */}
              <div className="layer">
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/flower.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/elaichi.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/marigold.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/buddha.jpg" alt="" />
                  </Link>
                </div>
                <div>
                  <Link
                    to="https://nepalpuspanjalisiksyalaya.netlify.app/"
                    className="cursor-pointer"
                  >
                    <img src="/Images/top.jpg" alt="" />
                  </Link>
                </div>
              </div>

              {/* The Hero Element */}
              <div className="scaler">
                <div
                  ref={imageRef}
                  className="flex justify-center items-center bg-black text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[outfit]"
                >
                  My Projects
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </motion.div>
  );
};

export default ScrollGrid;
