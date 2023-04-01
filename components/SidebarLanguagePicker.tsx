import { CountableTag } from "../types";
import { SidebarPickerItemLink } from "./SidebarPickerItemLink";

type SidebarLanguagePickerProps = {
  activeTagId: string | string[] | undefined;
  languages: CountableTag[];
  pageName: string;
};

const Header = () => (
  <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate">Browse by language</h3>
);

export const SidebarLanguagePicker = ({
  activeTagId,
  languages,
  pageName
}: SidebarLanguagePickerProps) => {
  return (
    <div className="pt-6">
      <Header />
      <div>
        {languages.map((language) => {
          return (
            <SidebarPickerItemLink
              className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                pageName == "language" && language.id === activeTagId
                  ? "active-pill"
                  : "border-slate hover:text-juniper hover:border-juniper"
              }`}
              href={`/language/${language.id}`}
              key={language.id}
              text={language.display}
              totalOccurrences={language.count}
            />
          );
        })}
      </div>
    </div>
  );
};
