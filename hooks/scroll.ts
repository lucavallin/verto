import { useEffect, useState } from "react";

interface Props {
  forMobileHeight?: number;
  forDesktopHeight: number;
}

function useScrollReached({ forMobileHeight, forDesktopHeight }: Props) {
  const [scrollHeightReached, setScrollHeightReached] = useState(false);
  const [showUpArrow, setShowUpArrow] = useState(false);
  useEffect(() => {
    const scrollTarget = document.getElementById("repositories-list");
    const isMobile = forMobileHeight ? window.innerWidth <= forMobileHeight : false;
    if (isMobile) {
      scrollTarget?.scrollIntoView({ behavior: "smooth" });
    }

    const handleScroll = () => {
      setScrollHeightReached(window.scrollY >= forDesktopHeight);
      setShowUpArrow(window.scrollY > forDesktopHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrollHeightReached, showUpArrow };
}

export { useScrollReached };
