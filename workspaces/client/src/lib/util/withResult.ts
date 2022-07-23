import { type ResultOrError } from "./types/either.types";

export function withResult<T>(
  resultOrError: ResultOrError<T>,
  callback: (result: T) => void
) {
  if ("result" in resultOrError) {
    callback(resultOrError.result);
  }
}
