(() => {
  const root = document.documentElement;
  const button = document.querySelector(".motion-toggle");
  if (!button) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let paused = false;
  try {
    paused = localStorage.getItem("ambient-motion-paused") === "true";
  } catch {
    // Animation controls still work when browser storage is unavailable.
  }

  function update() {
    const disabled = paused || reducedMotion.matches;
    root.dataset.motion = disabled || document.hidden ? "off" : "on";
    button.hidden = false;
    button.disabled = reducedMotion.matches;
    button.setAttribute("aria-pressed", String(disabled));
    button.textContent = reducedMotion.matches ? "Motion off (system setting)" : paused ? "Resume animation" : "Pause animation";
  }

  button.addEventListener("click", () => {
    paused = !paused;
    try {
      localStorage.setItem("ambient-motion-paused", String(paused));
    } catch {
      // Keep the current preference for this page even without storage.
    }
    update();
  });
  reducedMotion.addEventListener("change", update);
  document.addEventListener("visibilitychange", update);
  update();
})();
