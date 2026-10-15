# Balcony

The diagram below is the working layout of the balcony. Container **sizes are proportional to their confirmed dimensions**, while their exact positions should be treated as approximate unless separately measured.

Container names identify the physical objects, not their positions. Moving a container does not change its ID.

<div class="balcony-map-wrapper">
<svg class="balcony-map" viewBox="0 0 820 470" role="img" aria-labelledby="balcony-title balcony-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="balcony-title">Interactive balcony garden plan</title>
  <desc id="balcony-desc">A 470 by 230 centimetre balcony. West is at the top, the house is on the east edge at the bottom, south is left and north is right. Each garden container is clickable.</desc>

  <!-- Orientation -->
  <g class="orientation" aria-hidden="true">
    <text x="42" y="33">W</text>
    <text x="42" y="439">E</text>
    <text x="10" y="226">S</text>
    <text x="772" y="226">N</text>
    <line x1="44" y1="42" x2="44" y2="70"/>
    <line x1="44" y1="428" x2="44" y2="400"/>
    <line x1="20" y1="231" x2="48" y2="231"/>
    <line x1="760" y1="231" x2="732" y2="231"/>
  </g>

  <!-- Balcony floor: 470 × 230 cm, scale 1.4 px/cm -->
  <rect class="balcony-floor" x="80" y="60" width="658" height="322" rx="3"/>
  <text class="dimension-label" x="409" y="52" text-anchor="middle">470 cm</text>
  <text class="dimension-label" x="63" y="221" text-anchor="middle" transform="rotate(-90 63 221)">230 cm</text>

  <!-- West / outer edge -->
  <line class="outer-edge" x1="80" y1="60" x2="738" y2="60"/>
  <text class="edge-label" x="409" y="82" text-anchor="middle">outer edge · west</text>

  <!-- House façade / east edge -->
  <line class="house-edge" x1="80" y1="382" x2="738" y2="382"/>
  <rect class="house-zone" x="80" y="382" width="658" height="35"/>
  <text class="edge-label" x="409" y="408" text-anchor="middle">house · east</text>

  <!-- Façade sections: 150 cm + 80 cm door + 240 cm -->
  <line class="section-mark" x1="290" y1="382" x2="290" y2="417"/>
  <line class="section-mark" x1="402" y1="382" x2="402" y2="417"/>
  <text class="section-label" x="185" y="435" text-anchor="middle">150 cm</text>
  <text class="section-label" x="346" y="435" text-anchor="middle">80 cm door</text>
  <text class="section-label" x="570" y="435" text-anchor="middle">240 cm</text>

  <!-- Window widths are exact; their offsets inside the wall sections are schematic. -->
  <line class="window" x1="94" y1="382" x2="276" y2="382"/>
  <text class="window-label" x="185" y="373" text-anchor="middle">130 cm window</text>

  <line class="window" x1="472" y1="382" x2="668" y2="382"/>
  <text class="window-label" x="570" y="373" text-anchor="middle">140 cm window</text>

  <!-- Door opening and schematic swing -->
  <line class="door" x1="290" y1="382" x2="402" y2="382"/>
  <path class="door-swing" d="M 290 382 A 112 112 0 0 1 369 303"/>
  <line class="door-leaf" x1="290" y1="382" x2="369" y2="303"/>

  <!-- 60 × 40 cm trellis planter -->
  <a class="container-link" href="containers/trellis-planter-60x40/" aria-label="Open trellis_planter_60x40 documentation">
    <g class="container">
      <title>trellis_planter_60x40 — 60 × 40 cm, approximately 28 L</title>
      <rect class="container-shape trellis-planter" x="92" y="275" width="84" height="56" rx="4"/>
      <line class="trellis-line" x1="99" y1="282" x2="99" y2="324"/>
      <line class="trellis-line" x1="113" y1="282" x2="113" y2="324"/>
      <line class="trellis-line" x1="127" y1="282" x2="127" y2="324"/>
      <line class="trellis-line" x1="141" y1="282" x2="141" y2="324"/>
      <line class="trellis-line" x1="155" y1="282" x2="155" y2="324"/>
      <line class="trellis-line" x1="169" y1="282" x2="169" y2="324"/>
      <text class="container-text" x="134" y="346" text-anchor="middle">trellis 60×40</text>
    </g>
  </a>

  <!-- 85 × 15 cm planters -->
  <a class="container-link" href="containers/planter-85x15-01/" aria-label="Open planter_85x15_01 documentation">
    <g class="container">
      <title>planter_85x15_01 — 85 × 15 cm</title>
      <rect class="container-shape" x="112" y="349" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="171.5" y="364" text-anchor="middle">85×15 · 01</text>
    </g>
  </a>

  <a class="container-link" href="containers/planter-85x15-02/" aria-label="Open planter_85x15_02 documentation">
    <g class="container">
      <title>planter_85x15_02 — 85 × 15 cm</title>
      <rect class="container-shape" x="492" y="349" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="551.5" y="364" text-anchor="middle">85×15 · 02</text>
    </g>
  </a>

  <!-- Four Ø24 cm pots -->
  <a class="container-link" href="containers/pot-24-01/" aria-label="Open pot_24_01 documentation">
    <g class="container">
      <title>pot_24_01 — 24 cm diameter</title>
      <circle class="container-shape" cx="245" cy="95" r="16.8"/>
      <text class="pot-label" x="245" y="124" text-anchor="middle">24 · 01</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-02/" aria-label="Open pot_24_02 documentation">
    <g class="container">
      <title>pot_24_02 — 24 cm diameter</title>
      <circle class="container-shape" cx="325" cy="95" r="16.8"/>
      <text class="pot-label" x="325" y="124" text-anchor="middle">24 · 02</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-03/" aria-label="Open pot_24_03 documentation">
    <g class="container">
      <title>pot_24_03 — 24 cm diameter</title>
      <circle class="container-shape" cx="405" cy="95" r="16.8"/>
      <text class="pot-label" x="405" y="124" text-anchor="middle">24 · 03</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-24-04/" aria-label="Open pot_24_04 documentation">
    <g class="container">
      <title>pot_24_04 — 24 cm diameter</title>
      <circle class="container-shape" cx="485" cy="95" r="16.8"/>
      <text class="pot-label" x="485" y="124" text-anchor="middle">24 · 04</text>
    </g>
  </a>

  <!-- Three Ø19 cm pots -->
  <a class="container-link" href="containers/pot-19-01/" aria-label="Open pot_19_01 documentation">
    <g class="container">
      <title>pot_19_01 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="267" cy="337" r="13.3"/>
      <text class="pot-label" x="267" y="318" text-anchor="middle">19 · 01</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-02/" aria-label="Open pot_19_02 documentation">
    <g class="container">
      <title>pot_19_02 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="636" cy="337" r="13.3"/>
      <text class="pot-label" x="636" y="318" text-anchor="middle">19 · 02</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-03/" aria-label="Open pot_19_03 documentation">
    <g class="container">
      <title>pot_19_03 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="678" cy="337" r="13.3"/>
      <text class="pot-label" x="678" y="318" text-anchor="middle">19 · 03</text>
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

See [Containers](containers/) for the complete physical inventory.
