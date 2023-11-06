import { usePathname } from "next/navigation";

export const usePathPrefix = () => {
  const currentPage = usePathname();
  const pageType = currentPage.split("/")[1];
  return pageType;
};
