// @ts-ignore
import * as workerEntry from "../dist/server/assets/worker-entry-DfGDEsSQ.js";

export const config = { runtime: "nodejs" };

export default async function (req: Request) {
  const handler = workerEntry.default ?? workerEntry;
  return handler(req);
}
