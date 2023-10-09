import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
const ScrollToTopButton = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    // Check the scroll position to determine when to show the "Up Arrow" button
    if (window.scrollY > 700 ) {
      setShowUpArrow(true);
    } else {
      setShowUpArrow(false);
    }
  };

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
    <div className="fixed bottom-4 right-1">
      {showUpArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 flex h-14   w-14  items-center justify-center rounded-full border border-primary bg-transparent  "
        >
          <FontAwesomeIcon icon={faArrowUp} size="xl"/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
