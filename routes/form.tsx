import MyForm from "../islands/DemoForm.tsx";

export default function Page() {
  const backendUrl = Deno.env.get("BACKEND_URL") || "http://127.0.0.1:9000";
  return <MyForm backendUrl={backendUrl} />;
}
