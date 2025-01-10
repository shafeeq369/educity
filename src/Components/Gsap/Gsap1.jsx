import  { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import './Gsap.css'

import gallery_1 from "../../assets/gallery-1.png"
import gallery_2 from "../../assets/gallery-2.png"
import gallery_3 from "../../assets/gallery-3.png"
import gallery_4 from "../../assets/gallery-4.png"


gsap.registerPlugin(ScrollTrigger);

const Gsap1 = () => {
  const sectionRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const boxes = boxesRef.current;

    
    gsap.fromTo(
      boxes[0],
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: boxes[0],
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      boxes[1],
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        scrollTrigger: {
          trigger: boxes[1],
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      boxes[2],
      { y: 100, rotation: -180, opacity: 0 },
      {
        y: 0,
        rotation: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: boxes[2],
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      boxes[3],
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: boxes[3],
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="section">
      <div className="box" ref={(el) => (boxesRef.current[0] = el)}>
        <img src={gallery_1} alt="" />
      </div>
      <div className="box" ref={(el) => (boxesRef.current[1] = el)}>
      <img src={gallery_2} alt="" />
      </div>
      <div className="box" ref={(el) => (boxesRef.current[2] = el)}>
      <img src={gallery_3} alt="" />
      </div>
      <div className="box" ref={(el) => (boxesRef.current[3] = el)}>
      <img src={gallery_4} alt="" />
      </div>
    </div>
  );
};

export default Gsap1;
