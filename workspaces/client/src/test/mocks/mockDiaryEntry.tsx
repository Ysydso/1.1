import { buildDiaryEntry, DiaryEntry } from "@diary/shared/types/diaryEntry";
import { DiaryDate } from "lib/util/DiaryDate";
import { rest } from "msw";
import { diaryEntryUri } from "test/mocks/diaryEntryUriTemplate";
import { server } from "test/mocks/server";
import { vi } from "vitest";

export const mockGetDiaryEntry = (
  diaryEntry: Partial<DiaryEntry> = {},
  date?: string
) => {
  const spy = vi.fn();
  server.use(
    rest.get(
      diaryEntryUri(date),
      spy.mockImplementation((_, res, ctx) =>
        res(
          ctx.status(200),
          ctx.json({
            diaryEntry: buildDiaryEntry({
              date: date ?? new DiaryDate().getKey(),
              ...diaryEntry,
            }),
          })
        )
      )
    )
  );
  return spy;
};
