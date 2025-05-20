import MyFormPage from "../islands/PrimerDesign.tsx";

export default function Page() {
  const backendUrl = Deno.env.get("BACKEND_URL") || "http://127.0.0.1:9000";
  return <MyFormPage backendUrl={backendUrl} />;
}
