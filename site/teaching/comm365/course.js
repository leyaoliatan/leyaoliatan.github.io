(() => {
  const D = window.COMM365;
  const DAY = 86400000;
  const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const parse = (s) => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
  const iso = (dt) => [dt.getFullYear(), String(dt.getMonth() + 1).padStart(2, "0"), String(dt.getDate()).padStart(2, "0")].join("-");
  const addDays = (s, n) => iso(new Date(parse(s).getTime() + n * DAY + 3600000));
  const short = (s) => { const d = parse(s); return `${MONTHS[d.getMonth()].slice(0, 3)} ${d.getDate()}`; };
  const withDay = (s) => `${WEEKDAYS[parse(s).getDay()]}, ${short(s)}`;
  const inRange = (s, a, b) => s >= a && s <= b;

  const termStart = D.range.start;
  const weekOf = (s) => Math.floor((parse(s) - parse(termStart) + 3600000) / (7 * DAY)) + 1;

  function day(s) {
    return {
      date: s,
      lecture: D.lectures.find((l) => l.date === s) || null,
      deadlines: D.deadlines.filter((x) => x.date === s),
      off: D.noClass.find((x) => inRange(s, x.start, x.end)) || null,
      special: D.special.find((x) => inRange(s, x.start, x.end)) || null
    };
  }

  // Fill for a calendar cell.
  function dayClasses(info) {
    const c = [];
    if (info.off) c.push("is-off");
    else if (info.lecture) c.push(info.lecture.type === "presentation" ? "is-present" : info.lecture.type === "lecture" ? "is-class" : "is-special");
    if (info.deadlines.some((x) => x.kind !== "survey")) c.push("has-due");
    else if (info.deadlines.length) c.push("has-survey");
    return c;
  }

  function dayLabel(info) {
    const parts = [];
    if (info.lecture) parts.push(lectureName(info.lecture));
    if (info.off) parts.push(info.off.title);
    if (info.special) parts.push(info.special.title);
    info.deadlines.forEach((x) => parts.push(`Due: ${x.title}${x.time ? ` (${x.time})` : ""}`));
    return parts.join("; ");
  }

  const shownReadings = (l) => (l.n && l.n <= D.readingsShownThrough ? l.readings : []);

  const lectureName = (l) => (l.n ? `Lecture ${l.n}: ${l.title}` : l.title);

  function weeks() {
    const last = weekOf(D.lectures[D.lectures.length - 1].date);
    const out = [];
    for (let w = 1; w <= last; w += 1) {
      const mon = addDays(termStart, (w - 1) * 7);
      const sun = addDays(mon, 6);
      out.push({
        week: w,
        start: mon,
        end: sun,
        lectures: D.lectures.filter((l) => inRange(l.date, mon, sun)),
        deadlines: D.deadlines.filter((x) => inRange(x.date, mon, w === last ? "9999-12-31" : sun)),
        off: D.noClass.filter((x) => x.start <= sun && x.end >= mon && parse(x.start).getDay() !== 5)
      });
    }
    return out;
  }

  const readingsHtml = (list) => list.length
    ? `<ol class="c365-readings">${list.map((r) => `<li>${r.ref} <a href="${r.url}" target="_blank" rel="noopener noreferrer">Link</a></li>`).join("")}</ol>`
    : `<p class="c365-muted">TBA</p>`;

  const legendHtml = () => `
    <ul class="c365-legend type-caption" role="list">
      <li><span class="c365-swatch is-class"></span>Class</li>
      <li><span class="c365-swatch is-present"></span>Presentations</li>
      <li><span class="c365-swatch is-special"></span>TBA</li>
      <li><span class="c365-swatch is-off"></span>No class</li>
      <li><span class="c365-dot"></span>Deadline</li>
      <li><span class="c365-dot c365-dot--light"></span>Progress survey</li>
    </ul>`;

  function dayDetail(s) {
    const info = day(s);
    const rows = [];
    if (info.lecture) rows.push(`<li>${lectureName(info.lecture)}</li>`);
    if (info.off) rows.push(`<li>${info.off.title}</li>`);
    if (info.special) rows.push(`<li>${info.special.title}</li>`);
    info.deadlines.forEach((x) => rows.push(`<li><strong>Due:</strong> ${x.title}${x.time ? ` (${x.time})` : ""}</li>`));
    return `<p class="type-entry">${withDay(s)}</p><ul>${rows.join("")}</ul>`;
  }

  window.C365 = { D, parse, iso, addDays, short, withDay, weekOf, day, dayClasses, dayLabel, weeks, shownReadings, lectureName, readingsHtml, legendHtml, dayDetail };
})();
