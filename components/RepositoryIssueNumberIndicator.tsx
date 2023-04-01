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
        isIssueOpen ? "text-ink-400 bg-juniper border-transparent" : "text-vanilla-200"
      }`}
    >
      {numberOfIssues}
      {numberOfIssues >= 10 ? "+" : ""} issue
      {numberOfIssues > 1 ? "s" : ""}
    </span>
  );
};
