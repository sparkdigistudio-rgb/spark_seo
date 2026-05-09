const navLinks = [
  { label: "Portfolio", href: "#performance" },
  { label: "Packages", href: "#packages" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

const performanceImages = [
  { id: "p1", src: "/performance1.png" },
  { id: "p2", src: "/performance2.png" },
  { id: "p3", src: "/performance3.png" },
  { id: "p4", src: "/performance4.png" },
];

const performanceImgPositions = [
  {
    id: "p1",
    left: 5,
    bottom: 65,
  },
  {
    id: "p2",
    right: 10,
    bottom: 60,
  },
  {
    id: "p3",
    right: 8, // was -5 — clamped to keep within viewport
    bottom: 45,
  },
  {
    id: "p4",
    right: 5,
    bottom: 0,
  },
];

export { navLinks, performanceImages, performanceImgPositions };
