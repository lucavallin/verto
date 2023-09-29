import { CountableTag } from "../../types";
import { SectionTitle } from "../SectionTitle";
import { PickerItem } from "./PickerItem";

type LanguagePickerProps = {
  activeTagId: string | string[] | undefined;
  languages: CountableTag[];
  onLanguagePage: boolean;
};

export const LanguagePicker = ({ activeTagId, languages, onLanguagePage }: LanguagePickerProps) => {
  return (
    <div className="pt-6">
      <SectionTitle text="Browse by Language" />
      <div>
        {languages.map((language) => {
          return (
            <PickerItem
              className={`group mx-1 border px-2 py-1 inline-block rounded-sm my-1 text-sm ${
                onLanguagePage && language.id === activeTagId
                  ? "active-pill"
                  : "border-secondary transition-all hover:text-primary transition-all hover:border-primary"
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
