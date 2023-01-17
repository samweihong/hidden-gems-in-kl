export const HEADINGS = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Our Partners", link: "/our-partners" },
  { title: "Gallery", link: "/gallery" },
  { title: "Our Purpose", link: "/our-purpose" },
  { title: "Event", link: "/event" },
  { title: "Our Team", link: "/our-team" },
];

export function getPreviousHeading(heading) {
  const index = HEADINGS.findIndex((e) => e.title === heading);
  const prev = (index + HEADINGS.length - 1) % HEADINGS.length;
  return HEADINGS[prev];
}

export function getNextHeading(heading) {
  const index = HEADINGS.findIndex((e) => e.title === heading);
  const prev = (index + 1) % HEADINGS.length;
  return HEADINGS[prev];
}
