# LEARN GSAP :/

- GSAP [Cheatsheet](https://gsap.com/cheatsheet/)

## Installation

- `npm install gsap @gsap/react`
  - `gsap` - the normal gsap library
  - `@gsap/react` - to use the `useGSAP` hook on React.

## Concepts

1. GSAP Object

   - The Access point to everything the engine does.
   - Create animations, configure settings, register plugins, and Global control to all animations.

2. Tween

   - can change a single/multiple properties of an multiple objects over time.
   - ex: `gsap.to('.star', { x: 750, duration: 3 }) `
     - `'.star'` (target param) - the "target". A selector or a ref.
     - `{x:750, duration:3}` (vars param) - properties were animating or how the tween is going to run.

3. Timeline
   - is a container for multiple tweens.
   - has unique sequencing options. one tween at a time or simultaneously play their animations.

## NOTES

- Every animation has a virtual playhead (a vertical line that moves during playback of a media)

## Topics

- useGSAP hook - `GsapTo.jsx`
- gsap.to() - `GsapTo.jsx`
- gsap.from() - `GsapFrom.jsx`
- gsap.fromTo() - `GsapFromTo.jsx`
- gsap.timeline() - `GsapTimeline.jsx`
- stagger - `GsapStagger.jsx`
- scrollTrigger - `GsapScrollTrigger.jsx`
- text - `GsapText.jsx`
