import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center  justify-center space-y-10 bg-dark-400 text-light-300 antialiased ">
      <h3 className="text-3xl font-bold text-primary lg:text-5xl">404😅</h3>

      <h3 className="text-xl lg:text-3xl">Look Like you@apos;re lost</h3>
      <p className="text-secondary">the page you are looking for not available</p>
      <Link href="/" className="text-white border border-primary p-4 hover:bg-primary">
        Go back to home
      </Link>
    </div>
  );
};

export default NotFoundPage;
