import { useEffect, useState } from "preact/hooks";
import { PollsIsland } from "../islands/PollsIsland.tsx";

export default function Polls() {
  const backendUrl = Deno.env.get("BACKEND_URL") || "http://127.0.0.1:9000";
  return <PollsIsland backendUrl={backendUrl} />;
}
