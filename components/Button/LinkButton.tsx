type LinkButtonProps = {
  href: string;
  secondary?: boolean;
  children: React.ReactNode;
};

export const LinkButton = ({ href, secondary, children }: LinkButtonProps) => {
  return (
    <div className="pt-4">
      <a
        className={`block transition-all font-bold text-center px-1 py-3 transition-all uppercase rounded-md border ${
          secondary
            ? "border-primary hover:border-primary hover:text-primary"
            : "bg-primary hover:bg-primary_light text-dark-400"
        }`}
        href={href}
        target="_blank"
      >
        {children}
      </a>
    </div>
  );
};
