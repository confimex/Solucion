import handler from "../dist/server/assets/worker-entry-DfGDEsSQ.js";
export const config = { runtime: "edge" };
export default async function (req: Request) { return handler.fetch(req); }
