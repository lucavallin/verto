import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const ScrollToTopButton = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  // Function to handle the scroll event and determine when to show the "Up Arrow" button.
  // The button becomes visible when the user scrolls to a minimum of 700px vertically.
  const handleScroll = () => setShowUpArrow(window.scrollY > 700);

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <button
        onClick={scrollToTop}
        className={`${
          showUpArrow ? "fixed bottom-4 right-4 md:bottom-8 md:right-10" : "hidden"
        } flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-transparent hover:bg-primary`}
      >
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
