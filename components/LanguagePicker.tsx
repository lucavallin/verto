import { CountableTag } from "../types";
import { MenuItemHeader } from "./MenuItemHeader";
import { PickerItemLink } from "./PickerItemLink";

type LanguagePickerProps = {
  activeTagId: string | string[] | undefined;
  languages: CountableTag[];
  pageName: string;
};

export const LanguagePicker = ({ activeTagId, languages, pageName }: LanguagePickerProps) => {
  return (
    <div className="pt-6">
      <MenuItemHeader text="Browse by Language" />
      <div>
        {languages.map((language) => {
          return (
            <PickerItemLink
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
