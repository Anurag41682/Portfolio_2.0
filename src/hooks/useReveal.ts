import { useEffect } from "react";

// Adds `is-visible` to every `.reveal` element once it scrolls into view.
const useReveal = () => {
  useEffect(() => {
    const root = document.documentElement;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    root.classList.add("reveal-ready");
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, []);
};

export default useReveal;
