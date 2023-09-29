type RepositoryIssueNumberIndicatorProps = {
  isIssueOpen: boolean;
  numberOfIssues: number;
};

export const RepositoryIssueNumberIndicator = ({
  isIssueOpen,
  numberOfIssues
}: RepositoryIssueNumberIndicatorProps) => {
  return (
    <span
      className={`hidden md:inline text-sm border px-3 py-1 ml-2 rounded-full font-semibold ${
        isIssueOpen ? "text-dark-400 bg-primary border-transparent" : "text-light-200"
      }`}
    >
      {numberOfIssues}
      {numberOfIssues >= 10 ? "+" : ""} issue
      {numberOfIssues > 1 ? "s" : ""}
    </span>
  );
};
