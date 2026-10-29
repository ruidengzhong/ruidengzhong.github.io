(() => {
  const entries = [...document.querySelectorAll(".timeline-entry")];
  if (!entries.length || !("IntersectionObserver" in window)) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const observer = new IntersectionObserver(
    (changes) => {
      changes.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.classList.remove("reveal-pending");
          observer.unobserve(target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -24px 0px" }
  );
  // Content is visible by default, including when scripting is unavailable.
  if (!reduced.matches && document.documentElement.dataset.motion === "on") {
    entries.forEach((entry) => {
      if (entry.getBoundingClientRect().top >= window.innerHeight) {
        entry.classList.add("reveal-pending");
        observer.observe(entry);
      }
    });
  }
  function revealAll() {
    entries.forEach((entry) => entry.classList.remove("reveal-pending"));
    observer.disconnect();
  }
  reduced.addEventListener("change", () => {
    if (reduced.matches) revealAll();
  });
  new MutationObserver(() => {
    if (document.documentElement.dataset.motion === "off") revealAll();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["data-motion"] });
  entries.forEach((entry) => entry.addEventListener("focusin", () => entry.classList.remove("reveal-pending")));
})();
