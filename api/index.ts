// @ts-ignore
import * as workerEntry from "../dist/server/assets/worker-entry-DfGDEsSQ.js";

export const config = { runtime: "nodejs" };

export default async function (req: Request) {
  const keys = Object.keys(workerEntry);
  return new Response(JSON.stringify(keys), { status: 200 });
}
