import { useEffect } from "react";

const useHeroObserver = (setScrolled) => {
  useEffect(() => {
    const hero = document.getElementById("hero-section");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [setScrolled]);
};

export default useHeroObserver;

//This custom hook, `useHeroObserver`, sets up an Intersection Observer to monitor the visibility of an element with the ID `hero-section`. When the element is no longer intersecting the viewport (i.e., it is scrolled out of view), it updates the `setScrolled` state to `true`. The observer is configured with a threshold of 0.3, meaning it will trigger when 30% of the element is visible in the viewport.