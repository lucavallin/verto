import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ScrollToTopButtonProps = {
  handleOnClick: () => void;
};

const ScrollToTopButton = ({ handleOnClick }: ScrollToTopButtonProps) => {
  return (
    <div>
      <button
        onClick={handleOnClick}
        className="fixed bottom-4 right-4 flex h-[64px] w-[64px] items-center justify-center rounded-full border border-pink bg-transparent hover:bg-pink md:bottom-7 md:right-4"
      >
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
