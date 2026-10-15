# Balcony

The diagram below is the working layout of the balcony. Container **sizes are proportional to their confirmed dimensions**, while their exact positions should be treated as approximate unless separately measured.

Container names identify the physical objects, not their positions. Moving a container does not change its ID.

<div class="balcony-map-wrapper">
<svg class="balcony-map" viewBox="0 0 820 535" role="img" aria-labelledby="balcony-title balcony-desc" xmlns="http://www.w3.org/2000/svg">
  <title id="balcony-title">Interactive balcony garden plan</title>
  <desc id="balcony-desc">A 470 by 230 centimetre balcony. West is at the top, the house is on the east edge at the bottom, south is left and north is right. The window sills project 23 centimetres into the balcony. Each garden container is clickable.</desc>

  <!-- Balcony floor: 470 × 230 cm, scale 1.4 px/cm -->
  <rect class="balcony-floor" x="80" y="60" width="658" height="322" rx="3"/>
  <text class="dimension-label" x="409" y="45" text-anchor="middle">470 cm</text>
  <text class="dimension-label" x="59" y="221" text-anchor="middle" transform="rotate(-90 59 221)">230 cm</text>

  <!-- Orientation -->
  <text class="orientation-label" x="409" y="82" text-anchor="middle">W · outer edge</text>
  <text class="orientation-label" x="67" y="225" text-anchor="end">S</text>
  <text class="orientation-label" x="751" y="225">N</text>

  <!-- West / outer edge -->
  <line class="outer-edge" x1="80" y1="60" x2="738" y2="60"/>

  <!-- House façade / east edge -->
  <rect class="house-zone" x="80" y="382" width="658" height="130"/>
  <line class="house-edge" x1="80" y1="382" x2="738" y2="382"/>

  <!-- Window sills: 23 cm deep = 32.2 px at the map scale -->
  <rect class="sill" x="94" y="349.8" width="182" height="32.2"/>
  <rect class="sill" x="472" y="349.8" width="196" height="32.2"/>
  <line class="sill-depth-mark" x1="85" y1="349.8" x2="85" y2="382"/>
  <line class="sill-depth-cap" x1="81" y1="349.8" x2="89" y2="349.8"/>
  <line class="sill-depth-cap" x1="81" y1="382" x2="89" y2="382"/>
  <text class="sill-depth-label" x="76" y="366" text-anchor="middle" transform="rotate(-90 76 366)">23 cm sill</text>

  <!-- Façade sections: 150 cm + 80 cm door + 240 cm -->
  <line class="section-mark" x1="290" y1="382" x2="290" y2="512"/>
  <line class="section-mark" x1="402" y1="382" x2="402" y2="512"/>
  <text class="section-label" x="185" y="505" text-anchor="middle">150 cm</text>
  <text class="section-label" x="346" y="505" text-anchor="middle">80 cm door</text>
  <text class="section-label" x="570" y="505" text-anchor="middle">240 cm</text>
  <text class="orientation-label" x="409" y="527" text-anchor="middle">E · house</text>

  <!-- Windows. Widths are exact; offsets inside wall sections are schematic. -->
  <line class="window" x1="94" y1="382" x2="276" y2="382"/>
  <text class="window-label" x="185" y="407" text-anchor="middle">130 cm window</text>

  <line class="window" x1="472" y1="382" x2="668" y2="382"/>
  <text class="window-label" x="570" y="407" text-anchor="middle">140 cm window</text>

  <!-- Door opens inward, into the house -->
  <line class="door" x1="290" y1="382" x2="402" y2="382"/>
  <path class="door-swing" d="M 402 382 A 112 112 0 0 1 290 494"/>
  <line class="door-leaf" x1="290" y1="382" x2="290" y2="494"/>

  <!-- 60 × 40 cm trellis planter; 60 cm dimension is vertical on the plan -->
  <a class="container-link" href="containers/trellis-planter-60x40/" aria-label="Open trellis_planter_60x40 documentation">
    <g class="container">
      <title>trellis_planter_60x40 — 60 × 40 cm, approximately 28 L</title>
      <rect class="container-shape trellis-planter" x="92" y="240" width="56" height="84" rx="4"/>
      <line class="trellis-line" x1="99" y1="251" x2="141" y2="251"/>
      <line class="trellis-line" x1="99" y1="265" x2="141" y2="265"/>
      <line class="trellis-line" x1="99" y1="279" x2="141" y2="279"/>
      <line class="trellis-line" x1="99" y1="293" x2="141" y2="293"/>
      <line class="trellis-line" x1="99" y1="307" x2="141" y2="307"/>
      <text class="container-text" x="120" y="276" text-anchor="middle">trellis</text>
      <text class="container-text compact" x="120" y="291" text-anchor="middle">60×40</text>
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

  <!-- Containers sitting directly on the south window sill -->
  <a class="container-link" href="containers/planter-85x15-01/" aria-label="Open planter_85x15_01 documentation">
    <g class="container">
      <title>planter_85x15_01 — 85 × 15 cm</title>
      <rect class="container-shape" x="102" y="355.4" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="161.5" y="370" text-anchor="middle">85×15 #1</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-01/" aria-label="Open pot_19_01 documentation">
    <g class="container">
      <title>pot_19_01 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="251" cy="365.9" r="13.3"/>
      <text class="small-pot-number" x="251" y="369" text-anchor="middle">#1</text>
    </g>
  </a>

  <!-- Containers sitting directly on the north window sill -->
  <a class="container-link" href="containers/planter-85x15-02/" aria-label="Open planter_85x15_02 documentation">
    <g class="container">
      <title>planter_85x15_02 — 85 × 15 cm</title>
      <rect class="container-shape" x="480" y="355.4" width="119" height="21" rx="3"/>
      <text class="container-text compact" x="539.5" y="370" text-anchor="middle">85×15 #2</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-02/" aria-label="Open pot_19_02 documentation">
    <g class="container">
      <title>pot_19_02 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="620" cy="365.9" r="13.3"/>
      <text class="small-pot-number" x="620" y="369" text-anchor="middle">#2</text>
    </g>
  </a>
  <a class="container-link" href="containers/pot-19-03/" aria-label="Open pot_19_03 documentation">
    <g class="container">
      <title>pot_19_03 — 19 cm diameter</title>
      <circle class="container-shape small-pot" cx="648" cy="365.9" r="13.3"/>
      <text class="small-pot-number" x="648" y="369" text-anchor="middle">#3</text>
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
- Both window sills project **23 cm into the balcony**.
- The long planters and Ø19 cm pots shown at the house wall sit **on the window sills**.
- The balcony door swings **inward into the house**.
- Window offsets inside their wall sections are schematic because those offsets have not been measured.
- Container positions are intentionally easy to change; their IDs remain stable when moved.

See [Containers](containers/index.md) for the complete physical inventory.
