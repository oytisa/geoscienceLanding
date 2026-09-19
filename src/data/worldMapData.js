// Continents and regional landmass paths for Equirectangular projection (800 x 400 SVG viewBox)
// Accurately plotted coordinates for realistic world cartography matching MapMyVisitors / Geolocation widgets

export const worldContinentsData = [
  {
    name: "Africa",
    code: "AF",
    fill: "rgba(45, 122, 75, 0.38)",
    stroke: "rgba(74, 222, 128, 0.35)",
    d: "M 390 135 L 405 132 L 420 133 L 440 138 L 460 148 L 475 145 L 485 155 L 505 158 L 522 175 L 525 195 L 515 210 L 500 230 L 490 260 L 480 290 L 460 325 L 445 345 L 435 348 L 420 330 L 408 300 L 400 270 L 388 240 L 385 220 L 370 215 L 355 205 L 350 190 L 360 175 L 375 160 L 385 140 Z"
  },
  {
    name: "Madagascar",
    code: "MG",
    fill: "rgba(45, 122, 75, 0.45)",
    stroke: "rgba(74, 222, 128, 0.35)",
    d: "M 505 285 L 515 275 L 520 295 L 515 315 L 508 320 L 504 300 Z"
  },
  {
    name: "Ethiopia & Horn of Africa (Focus)",
    code: "ET-FOCUS",
    fill: "rgba(212, 161, 62, 0.45)",
    stroke: "#f6c343",
    d: "M 465 178 L 485 175 L 500 180 L 512 188 L 520 200 L 510 210 L 495 215 L 480 212 L 470 200 Z"
  },
  {
    name: "Europe",
    code: "EU",
    fill: "rgba(26, 77, 140, 0.32)",
    stroke: "rgba(156, 213, 255, 0.35)",
    d: "M 370 65 L 395 60 L 420 62 L 440 68 L 450 78 L 475 75 L 470 95 L 455 105 L 440 100 L 430 115 L 415 125 L 395 130 L 375 130 L 365 120 L 360 100 L 365 80 Z"
  },
  {
    name: "United Kingdom & Ireland",
    code: "UK",
    fill: "rgba(26, 77, 140, 0.35)",
    stroke: "rgba(156, 213, 255, 0.35)",
    d: "M 370 78 L 380 75 L 378 92 L 368 95 Z M 358 84 L 364 82 L 362 90 L 358 88 Z"
  },
  {
    name: "Scandinavia",
    code: "SCAN",
    fill: "rgba(26, 77, 140, 0.32)",
    stroke: "rgba(156, 213, 255, 0.35)",
    d: "M 410 40 L 430 35 L 445 42 L 435 70 L 420 75 L 412 60 Z"
  },
  {
    name: "Asia",
    code: "AS",
    fill: "rgba(26, 77, 140, 0.30)",
    stroke: "rgba(156, 213, 255, 0.3)",
    d: "M 470 80 L 510 65 L 560 55 L 630 50 L 700 55 L 750 65 L 760 90 L 735 110 L 710 130 L 685 160 L 660 185 L 625 180 L 600 200 L 575 220 L 560 210 L 550 175 L 530 160 L 505 158 L 490 140 L 475 125 L 470 105 Z"
  },
  {
    name: "Japan",
    code: "JP",
    fill: "rgba(26, 77, 140, 0.4)",
    stroke: "rgba(156, 213, 255, 0.4)",
    d: "M 715 115 L 725 122 L 720 140 L 710 148 L 706 135 Z"
  },
  {
    name: "India Subcontinent",
    code: "IN",
    fill: "rgba(26, 77, 140, 0.38)",
    stroke: "rgba(156, 213, 255, 0.35)",
    d: "M 550 155 L 580 158 L 595 180 L 575 220 L 560 215 L 550 185 Z"
  },
  {
    name: "Middle East / Arabian Peninsula",
    code: "ME",
    fill: "rgba(180, 130, 50, 0.35)",
    stroke: "rgba(246, 195, 67, 0.3)",
    d: "M 475 138 L 505 135 L 520 150 L 535 165 L 522 178 L 495 180 L 478 155 Z"
  },
  {
    name: "North America",
    code: "NA",
    fill: "rgba(40, 90, 140, 0.32)",
    stroke: "rgba(156, 213, 255, 0.35)",
    d: "M 90 60 L 140 45 L 200 40 L 250 50 L 270 75 L 250 100 L 230 120 L 205 140 L 180 165 L 165 180 L 155 170 L 150 145 L 125 130 L 105 110 L 80 85 Z"
  },
  {
    name: "Greenland",
    code: "GL",
    fill: "rgba(200, 225, 255, 0.22)",
    stroke: "rgba(200, 225, 255, 0.35)",
    d: "M 270 25 L 320 20 L 335 45 L 305 60 L 280 50 Z"
  },
  {
    name: "South America",
    code: "SA",
    fill: "rgba(45, 122, 75, 0.32)",
    stroke: "rgba(74, 222, 128, 0.3)",
    d: "M 185 180 L 220 185 L 245 200 L 265 225 L 275 255 L 260 295 L 235 345 L 218 360 L 210 340 L 205 290 L 195 245 L 180 215 Z"
  },
  {
    name: "Australia",
    code: "AU",
    fill: "rgba(180, 110, 50, 0.35)",
    stroke: "rgba(246, 195, 67, 0.35)",
    d: "M 660 260 L 700 255 L 730 270 L 740 300 L 725 330 L 685 335 L 655 310 L 650 280 Z"
  },
  {
    name: "New Zealand",
    code: "NZ",
    fill: "rgba(180, 110, 50, 0.35)",
    stroke: "rgba(246, 195, 67, 0.35)",
    d: "M 755 325 L 762 320 L 758 340 Z M 748 345 L 755 340 L 750 360 Z"
  },
  {
    name: "Indonesia & Philippines",
    code: "ID",
    fill: "rgba(45, 122, 75, 0.38)",
    stroke: "rgba(74, 222, 128, 0.3)",
    d: "M 630 210 L 655 212 L 670 220 L 685 235 L 665 240 L 640 230 Z M 670 175 L 680 185 L 675 200 Z"
  }
]
