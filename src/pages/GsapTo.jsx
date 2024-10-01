import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTo = () => {
  // This hook looks and behaves like `useEffect`.
  // Also has a dependency array that defines when it has to run.
  useGSAP(() => {
    // `.to()` - animates element from their CURRENT state to a NEW state.
    // Params: • Target Element
    //         • variables for animation (See cheatsheet for more.)
    // 'repeat: -1' means repeat the animation infinitely.
    // 'yoyo: true' means reverse animation on every cycle. Ex: 'repeat: 4'. 3 normal, 2 reversed. (initial animation is not counted on the number on 'repeat')

    // Animation is Normal, then translateX to 250px and change color.
    gsap.to("#blue-box", {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 180,
      duration: 2,
      ease: "steps(8)",
      backgroundColor: "#191919",
    });
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
