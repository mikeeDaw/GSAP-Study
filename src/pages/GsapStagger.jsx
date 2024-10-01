import gsap from "gsap";

const GsapStagger = () => {
  // 'stagger' is a property.
  //   - If the tween has multiple targets, you can add a delay between each
  //     start of the animation on individual targets.
  // For more complex staggers, use the "Stagger Object". (See more on docs)

  const staggerAnim = (idx) => {
    console.log(idx);
    gsap.to(".stagger-box", {
      y: 100,
      scaleY: 0.2,
      opacity: 0,
      skewX: 50,
      duration: 1.5,
      ease: "bounce",
      stagger: {
        each: 0.1,
        grid: [3, 7],
        from: idx,
      },
    });

    gsap.to(".stagger-box", {
      y: 0,
      opacity: 1,
      scaleY: 1,
      skewX: 0,
      delay: 2.5,
    });
  };

  let boxes = 0;
  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="flex flex-col gap-5 mt-20">
        {Array.from({ length: 3 }).map((_, idx) => {
          return (
            <div className="flex gap-5" key={`X${idx}`}>
              {Array.from({ length: 7 }).map((_, idx2) => (
                <div
                  key={`Y${idx2 + idx}`}
                  className="w-20 h-20 bg-indigo-400 rounded-lg stagger-box"
                  onClick={() => {
                    staggerAnim(idx * 7 + idx2);
                  }}
                />
              ))}
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default GsapStagger;
