type RepositoryIssueNumberIndicatorProps = {
  numberOfIssues: number;
};

export const RepositoryIssueNumberIndicator = ({
  numberOfIssues
}: RepositoryIssueNumberIndicatorProps) => {
  return (
    <span className="ml-2 hidden h-fit min-w-fit rounded-full border border-transparent bg-yellow p-2 text-sm font-semibold text-black md:inline">
      {numberOfIssues}
      {numberOfIssues >= 10 ? "+" : ""} issue
      {numberOfIssues > 1 ? "s" : ""}
    </span>
  );
};
