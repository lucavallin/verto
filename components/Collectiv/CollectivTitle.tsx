type CollectivTitleProps = {
  text: string;
};

export const CollectivTitle = ({ text }: CollectivTitleProps) => (
  <a
    href="https://chat.collectivai.com/"
    className="mb-2 text-sm font-bold uppercase tracking-wider text-[#F8F8F8] "
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>
);
