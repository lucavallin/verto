import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ScrollToTopProps = {
  handleOnClick: () => void;
};

const ScrollToTop = ({ handleOnClick }: ScrollToTopProps) => {
  return (
    <div className="z-50">
      <button
        onClick={handleOnClick}
        className="fixed bottom-4 right-4 flex size-[64px] items-center justify-center rounded-full border border-primary bg-transparent hover:bg-primary hover:text-black md:bottom-7 md:right-4"
      >
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTop;
