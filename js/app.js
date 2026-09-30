/* Next Three Hours: filter the seed events by time window, age, walking distance, cost, and drop-in. */
(function () {
  const HOME = { lat: 40.7077, lng: -73.9440, label: "Montrose Ave & Graham Ave" };
  const MIN_PER_KM = 13;   // stroller pace on a street grid
  const $ = (id) => document.getElementById(id);
  const state = { when: "now", age: "both", walk: 20, cost: "free", dropin: true, indoor: false, train: false };

  /* ---------- helpers ---------- */
  function km(a, b) {
    const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
    const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * Math.PI / 180) * Math.cos(b.lat * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
    return 2 * R * Math.asin(Math.sqrt(x));
  }
  function walkMin(v) { return v.walkOverride || Math.round(km(HOME, v) * MIN_PER_KM); }
  function fmtTime(d) { return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }).replace(":00", ""); }
  function fmtDay(d) { return d.toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" }); }
  function dayKey(d) { return d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate(); }
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
  function mapsUrl(v) { return "https://www.google.com/maps/dir/?api=1&travelmode=walking&origin=" + encodeURIComponent(HOME.label + ", Brooklyn, NY") + "&destination=" + encodeURIComponent(v.addr + ", Brooklyn, NY"); }

  /* ---------- age tagging ---------- */
  // Returns which bands an event suits: baby (0-1), toddler (1-3). Library "Birth to Five" suits both
  // unless the text narrows it.
  function ageBands(ev) {
    if (ev[5] === "Infant") return { baby: true, toddler: false };
    if (ev[5] === "Toddler") return { baby: false, toddler: true };
    const text = (ev[1] + " " + ev[6] + " " + ev[9]).toLowerCase();
    if (/not yet walking|0-18 months|pre-walkers|babies and books|babies & books/.test(text)) return { baby: true, toddler: /toddler/.test(text) };
    if (/16-32 months|toddler|duplo|yoga/.test(text)) return { baby: false, toddler: true };
    if (/ages? 5 and up|5 years and up|kindergarten/.test(text)) return { baby: false, toddler: false };
    return { baby: true, toddler: true };
  }

  /* ---------- paid weekly slots -> dated rows for the next 14 days ---------- */
  function expandPaid(now) {
    const out = [];
    (window.PAID || []).forEach(p => {
      const v = window.VENUES[p.venue] || {};
      for (let d = 0; d < 14; d++) {
        const day = new Date(now.getFullYear(), now.getMonth(), now.getDate() + d);
        if (p.until && day > new Date(p.until + "T23:59:59")) return;
        p.slots.forEach(sl => {
          if (sl[0] !== day.getDay()) return;
          const [h, m] = sl[1].split(":").map(Number);
          const start = new Date(day); start.setHours(h, m, 0, 0);
          const end = new Date(start.getTime() + p.minutes * 60000);
          const ev = ["paid", p.title + " at " + p.venue, start.toISOString(), end.toISOString(), p.venue, p.ages, "", 0, 0, p.blurb];
          out.push({ ev, v, start, end, walk: v.lat ? walkMin(v) : 999, bands: p.bands || { baby: true, toddler: true }, paid: p });
        });
      }
    });
    return out;
  }

  /* ---------- time windows ---------- */
  function windowFor(when, now) {
    const start = new Date(now), end = new Date(now);
    const dayStart = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
    if (when === "now") { end.setHours(end.getHours() + 3); return { from: new Date(now.getTime() - 20 * 60000), to: end, label: "starting in the next three hours" }; }
    if (when === "today") { const e = dayStart(now); e.setDate(e.getDate() + 1); return { from: new Date(now.getTime() - 20 * 60000), to: e, label: "for the rest of today" }; }
    if (when === "tomorrow") { const s = dayStart(now); s.setDate(s.getDate() + 1); const e = new Date(s); e.setHours(13); return { from: s, to: e, label: "tomorrow morning, before 1 pm" }; }
    if (when === "weekend") {
      const s = dayStart(now); const dow = s.getDay(); // 0 Sun .. 6 Sat
      const toSat = dow === 0 ? -1 : (6 - dow); s.setDate(s.getDate() + toSat);
      const e = new Date(s); e.setDate(e.getDate() + 2);
      return { from: new Date(Math.max(s, now.getTime() - 20 * 60000)), to: e, label: "this weekend" };
    }
    const e = dayStart(now); e.setDate(e.getDate() + 7);
    return { from: new Date(now.getTime() - 20 * 60000), to: e, label: "in the next seven days" };
  }

  /* ---------- render ---------- */
  function render() {
    const now = new Date();
    const w = windowFor(state.when, now);
    const base = window.EVENTS.concat(state.train ? (window.EVENTS_NYPL || []) : []);
    const rows = base.map(ev => {
      const v = window.VENUES[ev[4]] || {};
      const travel = v.transit ? v.transit : (v.lat ? walkMin(v) : 999);
      return { ev, v, start: new Date(ev[2]), end: new Date(ev[3]), walk: travel, byTrain: !!v.transit, bands: ageBands(ev), paid: null };
    }).concat(expandPaid(now)).filter(r => {
      if (r.byTrain && r.walk > Math.max(state.walk, 45)) return false;
      if (state.cost === "free" && r.paid) return false;
      if (state.indoor && r.v.indoor === false) return false;
      // keep an event visible until it ends, so a late arrival is still an option
      if (r.end < now || r.start > w.to) return false;
      if (state.when !== "now" && state.when !== "today" && r.start < w.from) return false;
      if (!r.byTrain && r.walk > state.walk) return false;
      if (state.age === "baby" && !r.bands.baby) return false;
      if (state.age === "toddler" && !r.bands.toddler) return false;
      if (state.age === "both" && !r.bands.baby && !r.bands.toddler) return false;
      if (state.dropin && r.ev[7]) return false;
      return true; // all seed events are free; paid filter becomes real when paid classes are added
    }).sort((a, b) => {
      const la = a.start < now, lb = b.start < now;
      if (la !== lb) return (window.LATE_POSITION === "bottom") === la ? 1 : -1;
      return a.start - b.start || a.walk - b.walk;
    });

    const out = [];
    let lastDay = "";
    rows.forEach(r => {
      const k = dayKey(r.start);
      if (k !== lastDay) { out.push("<div class='day-head'>" + fmtDay(r.start) + "</div>"); lastDay = k; }
      const minsAway = Math.round((r.start - now) / 60000);
      const leaveBy = new Date(r.start.getTime() - r.walk * 60000);
      const soon = minsAway > 0 && minsAway <= r.walk + 15;
      const past = r.start < now;
      const pills = [r.paid ? "<span class='pill paid'>" + esc(r.paid.price) + "</span>" : "<span class='pill free'>Free</span>", (r.byTrain ? "<span class='pill'>L train, about " + r.walk + " min</span>" : "<span class='pill'>" + r.walk + " min walk</span>")];
      if (r.paid && !r.paid.verified) pills.push("<span class='pill reg'>Confirm with venue</span>");
      if (r.ev[7]) pills.push("<span class='pill reg'>Sign-up required</span>"); else pills.push("<span class='pill'>Drop-in</span>");
      if (r.ev[8]) pills.push("<span class='pill cancel'>Listed as canceled</span>");
      if (soon) pills.push("<span class='pill soon'>" + (leaveBy < now ? "Leave now, starts in " + minsAway + " min" : "Leave by " + fmtTime(leaveBy)) + "</span>");
      if (past) pills.push("<span class='pill late'>Join late, ends " + fmtTime(r.end) + "</span>");
      out.push("<article class='card ev" + (past ? " past" : "") + "'>" +
        "<div class='time'>" + fmtTime(r.start) + "<small>to " + fmtTime(r.end) + "</small></div>" +
        "<div><h3>" + esc(r.ev[1]) + "</h3>" +
        "<div class='where'>" + esc(r.ev[4]) + (r.v.addr ? ", " + esc(r.v.addr) : "") + "</div>" +
        "<p class='blurb'>" + esc(r.ev[9]) + "</p>" +
        "<div class='pills'>" + pills.join("") + "</div>" +
        "<div class='go'><a href='" + esc((r.paid && r.paid.book) || r.v.url || "#") + "' target='_blank' rel='noopener'>" + (r.paid ? "Book" : "Branch page") + "</a> · <a href='" + mapsUrl(r.v) + "' target='_blank' rel='noopener'>Walking directions</a></div>" +
        "</div></article>");
    });
    if (!rows.length) out.push("<div class='card empty'>Nothing scheduled " + w.label + " within a " + state.walk + "-minute walk" + (state.dropin ? " that is drop-in" : "") + ". Try a longer walk, a wider window, or the playgrounds below.</div>");
    $("results").innerHTML = out.join("");
    $("status").textContent = rows.length + " thing" + (rows.length === 1 ? "" : "s") + " " + w.label + " · " + (state.age === "both" ? "0 to 3" : state.age === "baby" ? "0 to 1" : "1 to 3") + " · within " + state.walk + " min of " + HOME.label + (state.train ? ", plus Manhattan by L train" : "");

    // Always-open playgrounds within range
    const always = window.ALWAYS.map(a => ({ a, v: window.VENUES[a.venue], walk: walkMin(window.VENUES[a.venue]) })).filter(x => x.walk <= state.walk).sort((p, q) => p.walk - q.walk);
    const showParks = !state.indoor;
    $("always").innerHTML = (showParks && always.length) ? "<h2>Always open: playgrounds within " + state.walk + " minutes</h2>" + always.map(x =>
      "<article class='card ev'><div><h3>" + esc(x.a.venue) + " <span class='pill'>" + x.walk + " min walk</span></h3><div class='where'>" + esc(x.v.addr) + "</div><p class='blurb'>" + esc(x.a.note) + "</p><div class='go'><a href='" + x.v.url + "' target='_blank' rel='noopener'>Park page</a> · <a href='" + mapsUrl(x.v) + "' target='_blank' rel='noopener'>Walking directions</a></div></div></article>").join("") : "";

    // Stay-home ideas: shown first on indoor days or when nothing is on, otherwise collapsed at the bottom
    const nothingOn = rows.length === 0;
    const open = state.indoor || nothingOn;
    $("athome").innerHTML = "<details" + (open ? " open" : "") + "><summary><h2>Staying in: " + window.AT_HOME.length + " things to do at home</h2></summary>" +
      window.AT_HOME.map(a => "<article class='card ev'><div><h3>" + esc(a.title) + " <span class='pill'>" + esc(a.ages) + "</span> <span class='pill'>" + a.mins + " min</span></h3><p class='blurb'>" + esc(a.how) + "</p><div class='go'><a href='https://www.youtube.com/results?search_query=" + encodeURIComponent(a.yt) + "' target='_blank' rel='noopener'>Videos for this</a></div></div></article>").join("") + "</details>";
    $("unlisted").innerHTML = "<h2>Classes nearby, times on their booking page</h2>" + window.KNOWN_UNLISTED.map(u => { const v = u.venue && window.VENUES[u.venue]; const wm = v ? walkMin(v) : null;
      return "<article class='card ev'><div><h3>" + esc(u.name) + (wm ? " <span class='pill'>" + wm + " min walk</span>" : "") + " <span class='pill paid'>Paid</span></h3>" + (v ? "<div class='where'>" + esc(v.addr) + "</div>" : "") + "<p class='blurb'>" + esc(u.what) + "</p><div class='go'><a href='" + esc(u.url) + "' target='_blank' rel='noopener'>Their site</a>" + (u.book ? " · <a href='" + esc(u.book) + "' target='_blank' rel='noopener'>Schedule and booking</a>" : "") + (v ? " · <a href='" + mapsUrl(v) + "' target='_blank' rel='noopener'>Walking directions</a>" : "") + "</div></div></article>"; }).join("");
    $("far").innerHTML = "<details" + (state.when === "weekend" ? " open" : "") + "><summary><h2>Worth the train</h2></summary>" +
      window.FAR.map(f => "<article class='card ev'><div><h3>" + esc(f.name) + (f.confirmed ? " <span class='pill free'>Confirmed</span>" : " <span class='pill reg'>Unconfirmed</span>") + "</h3><div class='where'>" + esc(f.where) + "</div><p class='blurb'>" + esc(f.when) + ". " + esc(f.cost) + ".</p><div class='go'><a href='" + esc(f.url) + "' target='_blank' rel='noopener'>Their page</a></div></div></article>").join("") + "</details>";
    track("view", state.when + "|" + state.age + "|" + state.walk + "|" + (state.indoor ? "indoor|" : "") + rows.length);
  }

  /* ---------- tiny local event log (analytics hook for later) ---------- */
  function track(name, detail) {
    try { const log = JSON.parse(localStorage.getItem("n3h_events") || "[]"); log.push({ name, detail, at: new Date().toISOString() }); localStorage.setItem("n3h_events", JSON.stringify(log.slice(-300))); } catch (e) { }
  }

  /* ---------- wiring ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    $("checked-on").textContent = new Date(window.CHECKED_ON + "T12:00:00").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
    const hour = new Date().getHours();
    if (hour >= 18) state.when = "tomorrow";           // evening: plan tomorrow
    if (new Date().getDay() === 5 && hour >= 15) state.when = "weekend";
    document.querySelectorAll(".when").forEach(b => {
      b.setAttribute("aria-selected", b.dataset.when === state.when);
      b.addEventListener("click", () => { state.when = b.dataset.when; document.querySelectorAll(".when").forEach(x => x.setAttribute("aria-selected", x === b)); render(); track("when", state.when); });
    });
    $("f-age").addEventListener("change", e => { state.age = e.target.value; render(); });
    $("f-walk").addEventListener("change", e => { state.walk = +e.target.value; render(); });
    $("f-cost").addEventListener("change", e => { state.cost = e.target.value; render(); });
    $("f-dropin").addEventListener("change", e => { state.dropin = e.target.checked; render(); });
    $("f-indoor").addEventListener("change", e => { state.indoor = e.target.checked; render(); track("indoor", state.indoor); });
    $("f-train").addEventListener("change", e => { state.train = e.target.checked; render(); track("train", state.train); });
    render();
    setInterval(render, 60000); // keep "next 3 hours" honest as time passes
  });
})();
