import PartnerCard from "./partner-card";

const partners = [
  {
    heading: "Vivekananda Ashrama",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ante elit, vitae ornare tellus eleifend eget. Donec non ligula libero. Maecenas eu rutrum ex. Nullam eu molestie ex, sed mattis lorem. Nam scelerisque condimentum odio, ultrices ultrices est varius in. Praesent sed varius turpis, ac elementum nibh. Etiam laoreet velit quis velit porttitor volutpat. Aenean tempus gravida accumsan.",
    image: {
      src: "/images/our-partners/va-background.png",
      alt: "va-background",
    },
  },
  {
    heading: "Rumah Tangsi",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies ante elit, vitae ornare tellus eleifend eget. Donec non ligula libero. Maecenas eu rutrum ex. Nullam eu molestie ex, sed mattis lorem. Nam scelerisque condimentum odio, ultrices ultrices est varius in. Praesent sed varius turpis, ac elementum nibh. Etiam laoreet velit quis velit porttitor volutpat. Aenean tempus gravida accumsan.",
    image: {
      src: "/images/our-partners/rt-background.png",
      alt: "rt-background",
    },
  },
];

export default function Section() {
  return (
    <div className="grid h-full grid-cols-12 gap-5 px-10 pb-10 pt-28">
      {partners.map((partner, index) => (
        <div key={index} className="relative col-span-6 h-full text-center">
          <PartnerCard
            heading={partner.heading}
            paragraph={partner.paragraph}
            image={partner.image}
          />
        </div>
      ))}
    </div>
  );
}
