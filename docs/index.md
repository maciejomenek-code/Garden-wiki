# Balcony

The diagram below is the working layout of the balcony. Container **sizes are proportional to their confirmed dimensions**, while their exact positions should be treated as approximate unless separately measured.

Container names identify the physical objects, not their positions. Moving a container does not change its ID.

<div class="balcony-map-wrapper">
<svg class="balcony-map" viewBox="0 0 820 500" role="img" aria-labelledby="balcony-title balcony-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="balcony-title">Interactive balcony garden plan</title>
  <desc id="balcony-desc">A 470 by 230 centimetre balcony. West is at the top, the house is on the east edge at the bottom, south is left and north is right. Each garden container is clickable.</desc>

  <!-- Balcony floor: 470 × 230 cm, scale 1.4 px/cm -->
  <rect class="balcony-floor" x="80" y="60" width="658" height="322" rx="3"/>
  <text class="dimension-label" x="409" y="45" text-anchor="middle">470 cm</text>
  <text class="dimension-label" x="59" y="221" text-anchor="middle" transform="rotate(-90 59 221)">230 cm</text>

  <!-- Orientation integrated with the plan edges -->
  <text class="orientation-label" x="409" y="82" text-anchor="middle">W · outer edge</text>
  <text class="orientation-label" x="409" y="412" text-anchor="middle">E · house</text>
  <text class="orientation-label" x="67" y="225" text-anchor="end">S</text>
  <text class="orientation-label" x="751" y="225">N</text>

  <!-- West / outer edge -->
  <line class="outer-edge" x1="80" y1="60" x2="738" y2="60"/>

  <!-- House façade / east edge -->
  <rect class="house-zone" x="80" y="382" width="658" height="72"/>
  <line class="house-edge" x1="80" y1="382" x2="738" y2="382"/>

  <!-- Façade sections: 150 cm + 80 cm door + 240 cm -->
  <line class="section-mark" x1="290" y1="382" x2="290" y2="454"/>
  <line class="section-mark" x1="402" y1="382" x2="402" y2="454"/>
  <text class="section-label" x="185" y="446" text-anchor="middle">150 cm</text>
  <text class="section-label" x="346" y="446" text-anchor="middle">80 cm door</text>
  <text class="section-label" x="570" y="446" text-anchor="middle">240 cm</text>

  <!-- Window widths are exact; their offsets inside the wall sections are schematic. -->
  <line class="window" x1="94" y1="382" x2="276" y2="382"/>
  <text class="window-label" x="185" y="401" text-anchor="middle">130 cm window</text>

  <line class="window" x1="472" y1="382" x2="668" y2="382"/>
  <text class="window-label" x="570" y="401" text-anchor="middle">140 cm window</text>

  <!-- Door opening and schematic swing -->
  <line class="door" x1="290" y1="382" x2="402" y2="382"/>
  <path class="door-swing" d="M 290 382 A 112 112 0 0 1 369 303"/>
  <line class="door-leaf" x1="290" y1="382" x2="369" y2="303"/>

  <!-- 60 × 40 cm trellis planter -->
  <a class="container-link" href="containers/trellis-planter-60x40/" aria-label="Open trellis_planter_60x40 documentation">
    <g class="container">
      <title>trellis_planter_60x40 — 60 × 40 cm, approximately 28 L</title>
      <rect class="container-shape trellis-planter" x="92" y="270" width="84" height="56" rx="4"/>
      <line class="trellis-line" x1="99" y1="277" x2="99" y2="319"/>
      <line class="trellis-line" x1="113" y1="277" x2="113" y2="319"/>
      <line class="trellis-line" x1="127" y1="277" x2="127" y2="319"/>
      <line class="trellis-line" x1="141" y1="277" x2="141" y2="319"/>
      <line class="trellis-line" x1="155" y1="277" x2="155" y2="319"/>
      <line class="trellis-line" x1="169" y1="277" x2="169" y2="319"/>
      <text class="container-text" x="134" y="298" text-anchor="middle">trellis</text>
      <text class="container-text compact" x="134" y="313" text-anchor="middle">60×40</text>
    </g>
  </a>

  <!-- 85 × 15 cm planters -->
  <a class="container-link" href="containers/planter-85x15-01/" aria-label="Open planter_85x15_01 documentation">
    <g class="container">
      <title>planter_85x15_01 — 85 × 15 cm</title>
      <rect class="container-shape" x="112" y="342" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="171.5" y="356.5" text-anchor="middle">85×15 #1</text>
    </g>
  </a>

  <a class="container-link" href="containers/planter-85x15-02/" aria-label="Open planter_85x15_02 documentation">
    <g class="container">
      <title>planter_85x15_02 — 85 × 15 cm</title>
      <rect class="container-shape" x="492" y="342" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="551.5" y="356.5" text-anchor="middle">85×15 #2</text>
    </g>
  </a>

  <!-- Four Ø24 cm pots -->
  <a class="container-link" href="containers/pot-24-01/" aria-label="Open pot_24_01 documentation">
    <g class="container">
      <title>pot_24_01 — 24 cm diameter</title>
      <circle class="container-shape" cx="245" cy="108" r="16.8"/>
      <text class="pot-label" x="245" y="137" text-anchor="middle">Ø24 #1</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-02/" aria-label="Open pot_24_02 documentation">
    <g class="container">
      <title>pot_24_02 — 24 cm diameter</title>
      <circle class="container-shape" cx="325" cy="108" r="16.8"/>
      <text class="pot-label" x="325" y="137" text-anchor="middle">Ø24 #2</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-03/" aria-label="Open pot_24_03 documentation">
    <g class="container">
      <title>pot_24_03 — 24 cm diameter</title>
      <circle class="container-shape" cx="405" cy="108" r="16.8"/>
      <text class="pot-label" x="405" y="137" text-anchor="middle">Ø24 #3</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-04/" aria-label="Open pot_24_04 documentation">
    <g class="container">
      <title>pot_24_04 — 24 cm diameter</title>
      <circle class="container-shape" cx="485" cy="108" r="16.8"/>
      <text class="pot-label" x="485" y="137" text-anchor="middle">Ø24 #4</text>
    </g>
  </a>

  <!-- Three Ø19 cm pots -->
  <a class="container-link" href="containers/pot-19-01/" aria-label="Open pot_19_01 documentation">
    <g class="container">
      <title>pot_19_01 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="267" cy="329" r="13.3"/>
      <text class="pot-label" x="267" y="308" text-anchor="middle">Ø19 #1</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-02/" aria-label="Open pot_19_02 documentation">
    <g class="container">
      <title>pot_19_02 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="636" cy="329" r="13.3"/>
      <text class="pot-label" x="636" y="308" text-anchor="middle">Ø19 #2</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-03/" aria-label="Open pot_19_03 documentation">
    <g class="container">
      <title>pot_19_03 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="678" cy="329" r="13.3"/>
      <text class="pot-label" x="678" y="308" text-anchor="middle">Ø19 #3</text>
    </g>
  </a>
</svg>
</div>

## Layout notes

- Balcony dimensions: **470 × 230 cm**.
- House side: **east**.
- Outer edge: **west**.
- From south to north along the house: **150 cm section → 80 cm door → 240 cm section**.
- Window widths: **130 cm** and **140 cm**.
- Window offsets inside those sections are schematic because those offsets have not been measured.
- Container positions are intentionally easy to change; their IDs remain stable when moved.

See [Containers](containers/index.md) for the complete physical inventory.
