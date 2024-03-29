import { LocaleContext } from "app/context/locale/LocaleContext";
import { createHelper } from "souvlaki";

export const withLocale = createHelper(
  (locale: string): React.FC<React.PropsWithChildren> =>
    ({ children }) =>
      <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
);
