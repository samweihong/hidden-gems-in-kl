import {
  getNextHeading,
  getPreviousHeading,
  HEADINGS,
} from "../../constants/main/headings";
import { useRouter } from "next/router";
import MenuItem from "./menu-item";
import { useState } from "react";
import Link from "next/link";

export default function NavigationBar({ darkMode = false, heading }) {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const color = darkMode ? "white" : "primary-300";

  function navigatePreviousPage() {
    router.push(getPreviousHeading(heading).link);
  }

  function navigateNextPage() {
    router.push(getNextHeading(heading).link);
  }

  return (
    <>
      <div
        className={`fixed top-6 z-50 mx-6 flex rounded-full border-2 border-${color} p-3 text-${color}`}
        style={{ width: "calc(100% - 2 * 1.5rem)" }}
      >
        <div className="relative flex w-full">
          <Link href="/">
            <span className="absolute left-4">Logo</span>
          </Link>
          <span className="flex w-full justify-center gap-12">
            <span onClick={navigatePreviousPage}>{"<"}</span>
            <span className="min-w-[7rem] text-center font-sans font-bold">
              {heading}
            </span>
            <span onClick={navigateNextPage}>{">"}</span>
          </span>
          <span
            className="absolute right-4"
            onClick={() => setIsMenuOpen(true)}
          >
            Menu
          </span>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed right-0 z-50 h-screen w-1/4 bg-primary-300">
          <div className="flex flex-col gap-10 p-14 text-end">
            <p
              className="cursor-pointer font-sans text-xl font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              X
            </p>
            {HEADINGS.map((heading, index) => (
              <MenuItem key={index} title={heading.title} link={heading.link} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
