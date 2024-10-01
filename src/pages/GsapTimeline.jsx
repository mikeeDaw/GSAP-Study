import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const GsapTimeline = () => {
  // A bit complex so see the documentation for more info.

  // .timeline - a timeline instance to manage multiple animations.
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  useGSAP(() => {
    // Animations by using `tl` is executed after another.
    tl.to("#yellow-box", {
      x: 250,
      rotation: 180,
      borderRadius: "100%",
      duration: 1,
      ease: "sine",
    });

    tl.to("#yellow-box", {
      x: 550,
      ease: "back.in",
      backgroundColor: "#394738",
      duration: 1.5,
    });

    // 3rd param - Placement of animation. See docs.
    // ">0.5" - insert 0.5 sec after the END of the most recently added animation.
    tl.to(
      "#yellow-box",
      {
        x: 0,
        ease: "back.in",
        duration: 1,
        borderRadius: "0.5rem",
        backgroundColor: "#eab308",
      },
      ">0.5"
    );
  }, []);

  // Pause or Play animation function
  const pausePlay = () => {
    if (tl.paused()) {
      tl.play();
    } else {
      tl.pause();
    }
  };

  return (
    <main>
      <h1>GsapTimeline</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.timeline()</code> method is similar to the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods, but the difference is that the{" "}
        <code>gsap.timeline()</code> method is used to create a timeline
        instance that can be used to manage multiple animations, while the{" "}
        <code>gsap.to()</code>, <code>gsap.from()</code>, and{" "}
        <code>gsap.fromTo()</code> methods are used to animate elements from
        their current state to a new state, from a new state to their current
        state, and from a new state to a new state, respectively.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.timeline()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.timeline()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <button onClick={pausePlay}>Play/Pause</button>

        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTimeline;
