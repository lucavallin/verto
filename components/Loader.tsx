import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Loader() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faCircleNotch} spin />
      </div>
    </div>
  );
}

export { Loader };
