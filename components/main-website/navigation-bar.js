import {
  getNextHeading,
  getPreviousHeading,
} from "../../constants/main/headings";
import { useRouter } from "next/router";

export default function NavigationBar({ darkMode = false, heading }) {
  const router = useRouter();

  const color = darkMode ? "white" : "primary-300";

  function navigatePreviousPage() {
    router.push(getPreviousHeading(heading).link);
  }

  function navigateNextPage() {
    router.push(getNextHeading(heading).link);
  }

  return (
    <div
      className={`fixed top-6 z-50 mx-6 flex rounded-full border-2 border-${color} p-3 text-${color}`}
      style={{ width: "calc(100% - 2 * 1.5rem)" }}
    >
      <div className="relative flex w-full">
        <span className="absolute left-4">Logo</span>
        <span className="flex w-full justify-center gap-12">
          <span onClick={navigatePreviousPage}>{"<"}</span>
          <span className="min-w-[6rem] text-center">{heading}</span>
          <span onClick={navigateNextPage}>{">"}</span>
        </span>
        <span className="absolute right-4">Menu</span>
      </div>
    </div>
  );
}
