import React from "react";

const NeumorphicButton = ({ label = "Button", onClick }) => {
  return (
    <>
      <style>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Alumni+Sans+Pinstripe&display=swap");

          .neu-root {
            --height: 1;
            font-family: "Alumni Sans Pinstripe", sans-serif;
          }

          /* Light top-left shadow (Outer) */
          .neu-button:before {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border-radius: 1rem;
            box-shadow: rgba(255, 255, 255, 0.5) calc(-0.33rem * var(--height)) calc(-0.33rem * var(--height)) 0.6rem;
            transition: box-shadow;
             transition-duration: 150ms;
             transition-delay: 150ms;
          }

          /* Light top-left shadow (Inner - reveals on hover) */
          .neu-inner:before {
            content: "";
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            border-radius: 1rem;
            box-shadow: inset rgba(255, 255, 255, 0.5) 0 0 0;
            transition: box-shadow;
             transition-duration: 150ms;
             transition-delay: 150ms;
          }
            .neu-button {
   box-shadow: rgba(0, 0, 0, 0.5) calc(0.33rem * var(--height)) calc(0.33rem * var(--height)) 0.6rem;
            transition: box-shadow;
             transition-duration: 150ms;
            transition-delay:150ms;
}
            .neu-button:hover {
   box-shadow: rgba(255, 255, 255, 0.5) calc(-0.33rem * var(--height)) calc(-0.33rem * var(--height)) 0.6rem;
            transition: box-shadow;
             transition-duration: 150ms;
            transition-delay: 150ms;
}
          /* Hover States */
          .neu-button:hover:before {
            box-shadow: rgba(255, 255, 255, 0.5) 0 0 0;
            transition: box-shadow;
             transition-duration: 150ms;
            transition-delay: 150ms;
          }

          .neu-button:hover .neu-inner:before {
            box-shadow: inset rgba(255, 255, 255, 0.5) calc(-0.25rem * var(--height)) calc(-0.25rem * var(--height)) 0.6rem;
            transition: box-shadow;
             transition-duration: 150ms;
            transition-delay: 150ms;
          }
        `}
      </style>

      <div className="neu-root flex justify-center items-center">
        <button
          onClick={onClick}
          className="neu-button group relative flex justify-center items-center w-[6rem] h-[6rem] rounded-[1rem] cursor-pointer bg-[#ddd] text-[#333] uppercase text-[1.5rem]"
        >
          <div
            className="neu-inner relative flex justify-center items-center w-full h-full rounded-[1rem] 
                          /* Inner dark shadow (reveals on hover) */
                          shadow-[inset_rgba(0,0,0,0.5)_0_0_0] 
                          transition-all duration-150 ease-in 
                          group-hover:shadow-[inset_rgba(0,0,0,0.5)_calc(0.25rem*var(--height))_calc(0.25rem*var(--height))_0.6rem] 
                          group-hover:delay-150 group-hover:ease-out"
          >
            <span className="relative z-10 transition-transform duration-150 ease-in-out group-hover:translate-y-[0.1516rem]">
              {label}
            </span>
          </div>
        </button>
      </div>
    </>
  );
};

export default NeumorphicButton;
