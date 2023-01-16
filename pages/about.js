import NavigationBar from "../components/main-website/navigation-bar";
import Section from "../components/about/section";

const about = [
  {
    heading: "Introduction",
    paragraph:
      "Malaysia has a rich history and culture, which are reflected in its races, food, and buildings. As a result of modernization, skyscrapers have shadowed other lesser-known architectures. Many architectural entities have a long and deep seeded history which tells a unique and beautiful story of the country. Furthermore, despite some heritage buildings getting the awareness that is needed, there are many others that lack sufficient spotlighting of their background. Therefore, the essence of our project is for these heritage buildings to get the visibility and support that they deserve.",
    image: {
      src: "/images/about/introduction.png",
      alt: "introduction",
      width: 603,
      height: 506,
    },
  },
  {
    heading: "Problem",
    paragraph:
      "Historical architecture in Malaysia is frequently disregarded by our citizens because of the world's extreme digitalization. People prefer going to cafes and art exhibitions because of their social media trend values; in fact, anything viral on the internet will do well in the outside world. Modern Malaysian communities are more focused on advancing technology and passing fads than on appreciating the historical structures that Malaysia, and Kuala Lumpur in particular, have to offer. Undoubtedly, the need to preserve architectural heritage has become more important in today's society.",
    image: {
      src: "/images/about/problem.png",
      alt: "problem",
      width: 569,
      height: 565,
    },
  },
  {
    heading: "Solution",
    paragraph:
      "Our goal is to digitise their histories to make them more widely accessible to society while also restoring the charm of our beautiful heritage. Instead of boring visitors with lengthy paragraphs about Vivekananda Ashrama’s and Rumah Tangsi's historical backgrounds, we intend to create an interactive website that will engage and amuse them. Local and foreign tourists will be drawn to these structures as a result, increasing both the number of people who visit them and public awareness of the need to restore each individual structure.",
    image: {
      src: "/images/about/solution.png",
      alt: "solution",
      width: 598,
      height: 585,
    },
  },
];
export default function About() {
  return (
    <div className="bg-secondary-100">
      <NavigationBar heading="About" />
      {about.map((info, index) => (
        <Section
          key={index}
          heading={info.heading}
          paragraph={info.paragraph}
          image={info.image}
          flip={index % 2 === 1}
        />
      ))}
    </div>
  );
}
