(() => {
  "use strict";
  const header = document.querySelector(".site-header");
  const regions = [...document.querySelectorAll("[data-nav-section]")];
  const links = [...document.querySelectorAll("[data-section-link]")];
  let scheduled = false;

  function headerHeight() {
    return header ? header.getBoundingClientRect().height : 0;
  }

  function updateHeader() {
    document.documentElement.style.setProperty("--header-height", `${headerHeight()}px`);
  }

  function updateNavigation() {
    if (!regions.length) return;
    const threshold = headerHeight() + 60;
    let current = regions[0].dataset.navSection;
    for (const region of regions) {
      if (region.getBoundingClientRect().top <= threshold) current = region.dataset.navSection;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = regions[regions.length - 1].dataset.navSection;
    }
    for (const link of links) {
      if (link.dataset.sectionLink === current) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  }

  function scheduleUpdate() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      updateNavigation();
      scheduled = false;
    });
  }

  function getTarget() {
    if (!location.hash) return null;
    try { return document.getElementById(decodeURIComponent(location.hash.slice(1))); }
    catch { return null; }
  }

  function focusTarget() {
    const target = getTarget();
    if (target) target.focus({ preventScroll: true });
  }

  updateHeader();
  updateNavigation();
  if (header && "ResizeObserver" in window) {
    new ResizeObserver(() => { updateHeader(); scheduleUpdate(); }).observe(header);
  }
  addEventListener("resize", () => { updateHeader(); scheduleUpdate(); }, { passive: true });
  addEventListener("scroll", scheduleUpdate, { passive: true });
  addEventListener("hashchange", () => { focusTarget(); scheduleUpdate(); });
  addEventListener("pageshow", scheduleUpdate);

  if (location.hash) {
    requestAnimationFrame(() => {
      const target = getTarget();
      if (!target) return;
      updateHeader();
      target.scrollIntoView({ behavior: "instant", block: "start" });
      focusTarget();
      updateNavigation();
    });
  }
})();
