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
        className="fixed bottom-4 right-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary bg-transparent hover:bg-primary md:bottom-8 md:right-10"
      >
        <FontAwesomeIcon icon={faArrowUp} size="xl" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
