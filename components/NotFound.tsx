import {} from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className=" flex min-h-screen flex-col items-center  justify-center space-y-10 bg-dark-400 text-center text-light-300 antialiased">
      <h3 className="text-3xl font-bold text-primary lg:text-5xl">404😅</h3>

      <h3 className="text-xl lg:text-3xl">Whooops! You are in the wrong place.</h3>
      <p className="text-secondary">the page you are looking for does not exist</p>
      <Link
        href="/"
        className="flex w-1/2 md:w-1/4 lg:w-1/5 items-center justify-center rounded-md border border-primary  py-3 text-center font-bold uppercase transition-all hover:border-primary hover:text-primary"
      >
        <FontAwesomeIcon icon={faHome} className="mx-2" />
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
