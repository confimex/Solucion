// @ts-ignore
import * as handler from "../dist/server/assets/worker-entry-DfGDEsSQ.js";
export const config = { runtime: "nodejs" };
export default async function (req: Request) {
  const h = handler.default ?? handler;
  return h.fetch(req);
}
