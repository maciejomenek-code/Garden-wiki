(() => {
  const root = document.getElementById("garden-calendar");
  if (!root) return;

  const crops = {
    "klajtonia": { name: "Klajtonia", href: "../crops/klajtonia/" },
    "portulaka-warzywna": { name: "Portulaka warzywna", href: "../crops/portulaka-warzywna/" },
    "roszponka": { name: "Roszponka", href: "../crops/roszponka/" },
    "pietruszka-naciowa": { name: "Pietruszka naciowa", href: "../crops/pietruszka-naciowa/" },
    "kolendra": { name: "Kolendra", href: "../crops/kolendra/" },
    "zellarosa": { name: "Zellarosa", href: "../crops/zellarosa/" },
    "krolowa-majowych": { name: "Królowa Majowych", href: "../crops/krolowa-majowych/" }
  };

  const containers = {
    "planter_85x15_01": {
      name: "Planter 85×15 #1",
      href: "../containers/planter-85x15-01/",
      modules: ["A", "B", "C", "D", "E"]
    },
    "planter_85x15_02": {
      name: "Planter 85×15 #2",
      href: "../containers/planter-85x15-02/",
      modules: ["F", "G", "H", "I", "J"]
    }
  };

  // Recurring rotation boundaries. The outgoing crop's final harvest is
  // derived from the incoming crop's documented start week.
  const transitions = [
    { week: 11, module: "E", container: "planter_85x15_01", outgoing: "roszponka", incoming: "zellarosa" },
    { week: 11, module: "I", container: "planter_85x15_02", outgoing: "roszponka", incoming: "krolowa-majowych" },

    { week: 12, module: "F", container: "planter_85x15_02", outgoing: "klajtonia", incoming: "pietruszka-naciowa" },
    { week: 12, module: "G", container: "planter_85x15_02", outgoing: "klajtonia", incoming: "pietruszka-naciowa" },
    { week: 12, module: "H", container: "planter_85x15_02", outgoing: "roszponka", incoming: "kolendra" },

    { week: 20, module: "A", container: "planter_85x15_01", outgoing: "klajtonia", incoming: "portulaka-warzywna" },
    { week: 20, module: "B", container: "planter_85x15_01", outgoing: "klajtonia", incoming: "portulaka-warzywna" },
    { week: 20, module: "C", container: "planter_85x15_01", outgoing: "roszponka", incoming: "portulaka-warzywna" },
    { week: 20, module: "D", container: "planter_85x15_01", outgoing: "klajtonia", incoming: "portulaka-warzywna" },
    { week: 20, module: "J", container: "planter_85x15_02", outgoing: "roszponka", incoming: "portulaka-warzywna" },

    { week: 24, module: "E", container: "planter_85x15_01", outgoing: "zellarosa", incoming: "portulaka-warzywna" },
    { week: 24, module: "I", container: "planter_85x15_02", outgoing: "krolowa-majowych", incoming: "portulaka-warzywna" },

    { week: 36, module: "C", container: "planter_85x15_01", outgoing: "portulaka-warzywna", incoming: "roszponka" },
    { week: 36, module: "E", container: "planter_85x15_01", outgoing: "portulaka-warzywna", incoming: "roszponka" },
    { week: 36, module: "H", container: "planter_85x15_02", outgoing: "kolendra", incoming: "roszponka" },
    { week: 36, module: "I", container: "planter_85x15_02", outgoing: "portulaka-warzywna", incoming: "roszponka" },
    { week: 36, module: "J", container: "planter_85x15_02", outgoing: "portulaka-warzywna", incoming: "roszponka" },

    { week: 38, module: "A", container: "planter_85x15_01", outgoing: "portulaka-warzywna", incoming: "klajtonia" },
    { week: 38, module: "B", container: "planter_85x15_01", outgoing: "portulaka-warzywna", incoming: "klajtonia" },
    { week: 38, module: "D", container: "planter_85x15_01", outgoing: "portulaka-warzywna", incoming: "klajtonia" },
    { week: 38, module: "F", container: "planter_85x15_02", outgoing: "pietruszka-naciowa", incoming: "klajtonia" },
    { week: 38, module: "G", container: "planter_85x15_02", outgoing: "pietruszka-naciowa", incoming: "klajtonia" }
  ];

  const horizonMonths = Number(root.dataset.horizonMonths || 18);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const horizonEnd = new Date(today);
  horizonEnd.setMonth(horizonEnd.getMonth() + horizonMonths);

  const state = { container: "all", module: "all" };

  function isoWeekStart(year, week) {
    const jan4 = new Date(Date.UTC(year, 0, 4));
    const jan4Day = jan4.getUTCDay() || 7;
    const monday = new Date(jan4);
    monday.setUTCDate(jan4.getUTCDate() - jan4Day + 1 + (week - 1) * 7);
    return new Date(monday.getUTCFullYear(), monday.getUTCMonth(), monday.getUTCDate());
  }

  function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  function formatRange(start, end) {
    const sameMonth = start.getMonth() === end.getMonth();
    const sameYear = start.getFullYear() === end.getFullYear();
    const day = new Intl.DateTimeFormat("en-GB", { day: "numeric" });
    const month = new Intl.DateTimeFormat("en-GB", { month: "short" });

    if (sameMonth && sameYear) {
      return day.format(start) + "–" + day.format(end) + " " + month.format(end) + " " + end.getFullYear();
    }

    const left = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(start);
    const right = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric" }).format(end);
    return left + "–" + right;
  }

  function buildEvents() {
    const events = [];

    for (let year = today.getFullYear(); year <= horizonEnd.getFullYear(); year += 1) {
      for (const transition of transitions) {
        const start = isoWeekStart(year, transition.week);
        const end = addDays(start, 6);

        if (end < today || start > horizonEnd) continue;
        events.push({ ...transition, year, start, end });
      }
    }

    return events.sort((a, b) => a.start - b.start || a.module.localeCompare(b.module));
  }

  const allEvents = buildEvents();

  function makeLink(href, label, className = "") {
    const a = document.createElement("a");
    a.href = href;
    a.textContent = label;
    if (className) a.className = className;
    return a;
  }

  function renderControls() {
    const controls = document.createElement("div");
    controls.className = "calendar-controls";

    const containerGroup = document.createElement("label");
    containerGroup.className = "calendar-select-label";
    containerGroup.append("Container ");

    const select = document.createElement("select");
    select.className = "calendar-select";
    select.innerHTML =
      '<option value="all">All planters</option>' +
      '<option value="planter_85x15_01">Planter 85×15 #1</option>' +
      '<option value="planter_85x15_02">Planter 85×15 #2</option>';
    select.value = state.container;

    select.addEventListener("change", () => {
      state.container = select.value;

      if (state.module !== "all") {
        const entry = Object.entries(containers).find(([, c]) => c.modules.includes(state.module));
        const moduleContainer = entry ? entry[0] : null;

        if (state.container !== "all" && moduleContainer !== state.container) {
          state.module = "all";
        }
      }

      render();
    });

    containerGroup.append(select);
    controls.append(containerGroup);

    const hint = document.createElement("span");
    hint.className = "calendar-horizon";
    hint.textContent = "Upcoming " + horizonMonths + " months";
    controls.append(hint);

    return controls;
  }

  function renderModulePicker() {
    const wrapper = document.createElement("div");
    wrapper.className = "module-picker";

    const all = document.createElement("button");
    all.type = "button";
    all.className = "module-button module-button-all";
    all.textContent = "All modules";
    all.dataset.active = state.module === "all" ? "true" : "false";
    all.addEventListener("click", () => {
      state.module = "all";
      render();
    });
    wrapper.append(all);

    for (const [containerId, container] of Object.entries(containers)) {
      if (state.container !== "all" && state.container !== containerId) continue;

      const group = document.createElement("div");
      group.className = "module-planter";
      group.append(makeLink(container.href, container.name, "module-planter-title"));

      const strip = document.createElement("div");
      strip.className = "module-strip";

      for (const module of container.modules) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "module-button";
        button.textContent = module;
        button.title = "Show calendar for module " + module;
        button.dataset.active = state.module === module ? "true" : "false";

        button.addEventListener("click", () => {
          state.module = state.module === module ? "all" : module;
          state.container = containerId;
          render();
        });

        strip.append(button);
      }

      group.append(strip);
      wrapper.append(group);
    }

    return wrapper;
  }

  function renderNextSummary(events) {
    const summary = document.createElement("div");
    summary.className = "next-calendar-action";

    if (!events.length) {
      summary.textContent = "No scheduled transitions in the selected range.";
      return summary;
    }

    const firstStart = events[0].start.getTime();
    const nextWeekEvents = events.filter(event => event.start.getTime() === firstStart);
    const modules = nextWeekEvents.map(event => event.module).join(", ");
    const incoming = [...new Set(nextWeekEvents.map(event => crops[event.incoming].name))].join(" / ");
    const week = String(nextWeekEvents[0].week).padStart(2, "0");

    const strong = document.createElement("strong");
    strong.textContent = "Next: ";
    summary.append(strong);
    summary.append(
      "ww" + week + " · " +
      formatRange(nextWeekEvents[0].start, nextWeekEvents[0].end) +
      " · modules " + modules +
      " · plant " + incoming
    );

    return summary;
  }

  function renderEvent(event) {
    const details = document.createElement("details");
    details.className = "calendar-event";

    const summary = document.createElement("summary");
    summary.className = "calendar-event-summary";

    const week = document.createElement("span");
    week.className = "calendar-week";
    week.textContent = "ww" + String(event.week).padStart(2, "0");

    const module = document.createElement("span");
    module.className = "calendar-module";
    module.textContent = "Module " + event.module;

    const transition = document.createElement("span");
    transition.className = "calendar-transition";

    const harvestTag = document.createElement("span");
    harvestTag.className = "calendar-action calendar-action-harvest";
    harvestTag.textContent = "Final harvest";

    const plantTag = document.createElement("span");
    plantTag.className = "calendar-action calendar-action-plant";
    plantTag.textContent = "Plant";

    const arrow = document.createElement("span");
    arrow.className = "calendar-arrow";
    arrow.textContent = "→";

    transition.append(
      harvestTag,
      " " + crops[event.outgoing].name + " ",
      arrow,
      " ",
      plantTag,
      " " + crops[event.incoming].name
    );

    const planter = document.createElement("span");
    planter.className = "calendar-planter";
    planter.textContent = containers[event.container].name;

    summary.append(planter, module, week, transition);
    details.append(summary);

    const body = document.createElement("div");
    body.className = "calendar-event-body";

    const date = document.createElement("p");
    date.className = "calendar-event-date";
    date.textContent =
      formatRange(event.start, event.end) +
      ". Complete the final harvest/clearing before sowing the incoming crop during this ISO week.";
    body.append(date);

    const links = document.createElement("div");
    links.className = "calendar-event-links";
    links.append(
      makeLink(crops[event.outgoing].href, "Outgoing crop: " + crops[event.outgoing].name),
      makeLink(crops[event.incoming].href, "Planting guide: " + crops[event.incoming].name),
      makeLink(
        containers[event.container].href,
        "Where: " + containers[event.container].name + ", module " + event.module
      ),
      makeLink("../planning/shallow-planters-6cm/", "Full rotation plan")
    );
    body.append(links);
    details.append(body);

    return details;
  }

  function renderTimeline(events) {
    const timeline = document.createElement("div");
    timeline.className = "calendar-timeline";

    if (!events.length) {
      const empty = document.createElement("p");
      empty.className = "calendar-empty";
      empty.textContent = "No events match the selected filters.";
      timeline.append(empty);
      return timeline;
    }

    let currentKey = "";
    let group = null;

    for (const event of events) {
      const key = event.start.getFullYear() + "-" + event.start.getMonth();

      if (key !== currentKey) {
        currentKey = key;
        group = document.createElement("section");
        group.className = "calendar-month";

        const heading = document.createElement("h2");
        heading.className = "calendar-month-heading";
        heading.textContent = new Intl.DateTimeFormat(
          "en-GB",
          { month: "long", year: "numeric" }
        ).format(event.start);

        group.append(heading);
        timeline.append(group);
      }

      group.append(renderEvent(event));
    }

    return timeline;
  }

  function render() {
    root.replaceChildren();

    const filtered = allEvents.filter(event => {
      if (state.container !== "all" && event.container !== state.container) return false;
      if (state.module !== "all" && event.module !== state.module) return false;
      return true;
    });

    root.append(renderControls());
    root.append(renderModulePicker());
    root.append(renderNextSummary(filtered));
    root.append(renderTimeline(filtered));
  }

  render();
})();
