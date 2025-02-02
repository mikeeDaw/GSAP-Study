import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapFromTo = () => {
  useGSAP(() => {
    // .fromTo - Animates a NEW state  to a NEW state.
    // Params: • Target element
    //         • "from" object
    //         • "to" object

    // the 'yoyo','repeat', or any special property only works on the "to" object.
    gsap.fromTo(
      "#red-box",
      {
        x: 0,
        borderRadius: 0,
        rotation: 0,
      },
      {
        x: 250,
        yoyo: true,
        repeat: -1,
        borderRadius: "100%",
        rotation: 180,
        duration: 2,
        ease: "power1.in",
        backgroundColor: "#191919",
      }
    );
  }, []);
  return (
    <main>
      <h1>GsapFromTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is used to animate elements from a
        new state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.fromTo()</code> method is similar to the{" "}
        <code>gsap.from()</code> and <code>gsap.to()</code> methods, but the
        difference is that the <code>gsap.fromTo()</code> method animates
        elements from a new state to a new state, while the{" "}
        <code>gsap.from()</code> method animates elements from a new state to
        their current state, and the <code>gsap.to()</code> method animates
        elements from their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.fromTo()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.fromTo()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFromTo;
