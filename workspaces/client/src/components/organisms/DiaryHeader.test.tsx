import { render, waitFor } from "@testing-library/react";
import { wrap } from "souvlaki";
import { withApollo } from "souvlaki-apollo";
import { withDiaryEntryContext } from "../../testWrappers/withDiaryEntryContext";
import { withLocale } from "../../testWrappers/withLocale";
import { withRoute } from "../../testWrappers/withRoute";
import { buildMockClient } from "../../util/buildMockClient";
import DiaryHeader from "./DiaryHeader";

describe("DiaryHeader", () => {
  it("shows the date italicised if the entry has unsaved changes", async () => {
    const diaryHeader = render(<DiaryHeader />, {
      wrapper: wrap(
        withApollo(buildMockClient()),
        withLocale("en-AU"),
        withRoute(),
        withDiaryEntryContext({ isDirty: true })
      ),
    });

    await waitFor(() =>
      expect(diaryHeader.container.querySelector(".italic")).toBeInTheDocument()
    );
  });

  it(`doesn't show the date italicised if the entry has no unsaved changes`, async () => {
    const diaryHeader = render(<DiaryHeader />, {
      wrapper: wrap(
        withApollo(buildMockClient()),
        withLocale("en-AU"),
        withRoute(),
        withDiaryEntryContext({ isDirty: false })
      ),
    });

    await waitFor(() =>
      expect(
        diaryHeader.container.querySelector(".italic")
      ).not.toBeInTheDocument()
    );
  });
});
