import { useEffect } from "react";

export default function useIntersectionObserver(handler) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          return entry.target.classList.add("show");
        }
        return entry.target.classList.remove("show");
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => {
        // console.log("unobserve => ", el);
        observer.unobserve(el);
      });
    };
  }, [handler]);
}
