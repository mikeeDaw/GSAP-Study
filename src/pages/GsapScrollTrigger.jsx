// Register the plugin first.
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const GsapScrollTrigger = () => {
  // "Scroll Trigger" is a property.
  //   - a plugin. Register it first.
  //   - allows to create animations that are triggered by the scroll position
  //     of the page.
  //   - for more complex scrollTriggers, use the object. (See docs.)
  //   Some Concepts: Scrub, pin, and snap.

  // Create a Ref for the container of the boxes.
  const scrollRef = useRef();

  useGSAP(() => {
    // Way to convert the children elements into an array.
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, idx, list) => {
      gsap.to(box, {
        x: 500,
        scrollTrigger: {
          // Means the 'trigger' is the next child on the container. If last child,
          // the trigger is itself.
          trigger: list[list.length === idx + 1 ? idx : idx + 1],
          // "(The target) (Viewport)"
          start: "bottom 80%",
          end: "top center",
          toggleActions: "play pause resume reset",
          // Adds markers on the side.
          markers: true,
          // scrub: true,
        },
        duration: 2,
        ease: "circ.inOut",
      });
    });
  }, []);

  return (
    <main>
      <h1>GsapScrollTrigger</h1>

      <p className="mt-5 text-gray-500">
        Gsap Scroll Trigger is a plugin that allows you to create animations
        that are triggered by the scroll position of the page.
      </p>

      <p className="mt-5 text-gray-500">
        With ScrollTrigger, you can define various actions to be triggered at
        specific scroll points, such as starting or ending an animation,
        scrubbing through animations as the user scrolls, pinning elements to
        the screen, and more.{" "}
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/docs/v3/Plugins/ScrollTrigger/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap scroll trigger
        </a>{" "}
        method.
      </p>

      <div className="w-full h-[70vh] flex justify-center items-center flex-col">
        <p className="text-center text-gray-500">
          Scroll down to see the animation
        </p>

        <svg
          className="animate-bounce mt-5"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="blue"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5" />
          <path d="M5 12l7 7 7-7" />
        </svg>
      </div>

      <div className="mt-20 w-full h-[150vh] pb-40" ref={scrollRef}>
        <div
          id="scroll-pink"
          className="scroll-box w-20 h-20 rounded-lg bg-pink-500"
        />
        <div
          id="scroll-orange"
          className="scroll-box w-20 h-20 rounded-lg bg-orange-500 mt-36"
        />
        <div
          id="scroll-green"
          className="scroll-box w-20 h-20 rounded-lg bg-green-500 mt-36"
        />
      </div>
    </main>
  );
};

export default GsapScrollTrigger;
