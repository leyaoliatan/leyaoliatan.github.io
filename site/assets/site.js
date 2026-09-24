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
/* Rotating footer cube */

(() => {
  "use strict";

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const cube = document.querySelector(".footer-cube");

  if (!cube || reduceMotion) return;

  const orientations = [
    [-18, 24, 0],
    [-18, 114, 0],
    [-108, 114, 0],
    [-108, 204, 0],
    [-18, 204, 0],
    [72, 204, 0],
    [72, 294, 0],
    [-18, 384, 0]
  ];

  let index = 0;
  let animationStart = null;
  let from = orientations[index];
  let to = orientations[(index + 1) % orientations.length];

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function tick(timestamp) {
    if (animationStart === null) {
      animationStart = timestamp;
    }

    const elapsed = timestamp - animationStart;
    const duration = 1150;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    const x = from[0] + (to[0] - from[0]) * eased;
    const y = from[1] + (to[1] - from[1]) * eased;
    const z = from[2] + (to[2] - from[2]) * eased;

    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`;

    if (progress < 1) {
      requestAnimationFrame(tick);
      return;
    }

    index = (index + 1) % orientations.length;
    from = orientations[index];
    to = orientations[(index + 1) % orientations.length];
    animationStart = null;

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
/* Gaussian-process sample animation */

(() => {
  "use strict";

  const reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const paths =
    Array.from(
      document.querySelectorAll("[data-gp-line]")
    );

  if (!paths.length) return;

  const n = 64;

  const width = 1200;
  const height = 176;

  const center = 84;

  const amplitude = 23;

  const ell = 0.12;

  const sqrt3 = Math.sqrt(3);

  function normal() {
    let u = 0;
    let v = 0;

    while (!u) u = Math.random();
    while (!v) v = Math.random();

    return (
      Math.sqrt(-2 * Math.log(u)) *
      Math.cos(2 * Math.PI * v)
    );
  }

  function matern32(a, b) {
    const r =
      Math.abs(a - b);

    const q =
      sqrt3 * r / ell;

    return (
      (1 + q) *
      Math.exp(-q)
    );
  }

  const K =
    Array.from(
      { length: n },
      (_, i) =>
        Array.from(
          { length: n },
          (_, j) =>
            matern32(
              i / (n - 1),
              j / (n - 1)
            ) +
            (i === j ? 1e-7 : 0)
        )
    );

  const L =
    Array.from(
      { length: n },
      () => Array(n).fill(0)
    );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let sum = K[i][j];

      for (let k = 0; k < j; k++) {
        sum -=
          L[i][k] *
          L[j][k];
      }

      L[i][j] =
        i === j
          ? Math.sqrt(
              Math.max(sum, 1e-10)
            )
          : sum / L[j][j];
    }
  }

  function sample() {
    const z =
      Array.from(
        { length: n },
        normal
      );

    const y =
      Array(n).fill(0);

    for (let i = 0; i < n; i++) {
      for (let k = 0; k <= i; k++) {
        y[i] +=
          L[i][k] *
          z[k];
      }
    }

    const mean =
      y.reduce(
        (a, b) => a + b,
        0
      ) / n;

    const variance =
      y.reduce(
        (a, b) =>
          a +
          (b - mean) ** 2,
        0
      ) / n;

    const sd =
      Math.sqrt(variance) || 1;

    return y.map(
      v =>
        (v - mean) / sd
    );
  }

  function smoothPath(
    values,
    lineIndex
  ) {
    const offset =
      (lineIndex - 2) * 5.5;

    const pts =
      values.map(
        (v, i) => [
          (i / (n - 1)) * width,
          center +
            offset -
            v * amplitude
        ]
      );

    let d =
      `M ${pts[0][0].toFixed(2)} ` +
      `${pts[0][1].toFixed(2)}`;

    for (
      let i = 0;
      i < pts.length - 1;
      i++
    ) {
      const p0 =
        pts[
          Math.max(0, i - 1)
        ];

      const p1 =
        pts[i];

      const p2 =
        pts[i + 1];

      const p3 =
        pts[
          Math.min(
            pts.length - 1,
            i + 2
          )
        ];

      const c1x =
        p1[0] +
        (p2[0] - p0[0]) / 6;

      const c1y =
        p1[1] +
        (p2[1] - p0[1]) / 6;

      const c2x =
        p2[0] -
        (p3[0] - p1[0]) / 6;

      const c2y =
        p2[1] -
        (p3[1] - p1[1]) / 6;

      d +=
        ` C ${c1x.toFixed(2)} ` +
        `${c1y.toFixed(2)}, ` +
        `${c2x.toFixed(2)} ` +
        `${c2y.toFixed(2)}, ` +
        `${p2[0].toFixed(2)} ` +
        `${p2[1].toFixed(2)}`;
    }

    return d;
  }

  let current =
    paths.map(() => sample());

  let target =
    paths.map(() => sample());

  let started =
    performance.now();

  const duration = 9000;

  function drawFrame(now) {
    const raw =
      Math.min(
        1,
        (now - started) /
          duration
      );

    const t =
      raw *
      raw *
      (3 - 2 * raw);

    paths.forEach(
      (path, lineIndex) => {
        const values =
          current[lineIndex].map(
            (v, i) =>
              v +
              (
                target[lineIndex][i] -
                v
              ) *
              t
          );

        path.setAttribute(
          "d",
          smoothPath(
            values,
            lineIndex
          )
        );
      }
    );

    if (raw >= 1) {
      current = target;

      target =
        paths.map(
          () => sample()
        );

      started = now;
    }

    requestAnimationFrame(
      drawFrame
    );
  }

  paths.forEach(
    (path, i) =>
      path.setAttribute(
        "d",
        smoothPath(
          current[i],
          i
        )
      )
  );

  if (!reduceMotion) {
    requestAnimationFrame(
      drawFrame
    );
  }
})();