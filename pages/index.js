import Section1 from "../components/home/section1";
import NavigationBar from "../components/main-website/navigation-bar";
import Section2 from "../components/home/section2";
import { useEffect, useRef, useState } from "react";

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

export default function Home() {
  const ref1 = useRef();
  const ref2 = useRef();
  const isVisible = useIsVisible(ref1);

  function handleClick() {
    if (ref2.current) ref2.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <div className="relative">
        <NavigationBar heading="Home" darkMode={isVisible} />
        <Section1 ref={ref1} handleClick={handleClick} />
        <Section2 ref={ref2} />
      </div>
    </>
  );
}
