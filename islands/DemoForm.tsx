import { useEffect, useState } from "preact/hooks";

interface FormResult {
  // Define the structure of your results from the other server
  data?: any; // Replace 'any' with a more specific type
  error?: string;
}

export default function MyFormPage() {
  const [formParams, setFormParams] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<FormResult>({});

  useEffect(() => {
    const doFetch = async () => {
      if (Object.keys(formParams).length === 0) return; // Don't fetch if no params

      const queryString = new URLSearchParams(formParams).toString();
      const targetUrl = `/other-server-endpoint?${queryString}`; // Adjust the URL

      try {
        const response = await fetch(targetUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setResult({ data: jsonData });
      // deno-lint-ignore no-explicit-any
      } catch (error: any) {
        setResult({ error: error.message });
      }
    };

    doFetch();
  }, [formParams]);

  const handleSubmit = (event: Event) => {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData(event.target as HTMLFormElement);
    const params: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      params[key] = value.toString();
    });
    setFormParams(params);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="param1" placeholder="Parameter 1" />
        <input type="text" name="param2" placeholder="Parameter 2" />
        <button type="submit">Submit</button>
      </form>

      {result.data && (
        <div>
          <h2>Results</h2>
          <pre>{JSON.stringify(result.data, null, 2)}</pre>
        </div>
      )}

      {result.error && <p className="error">Error: {result.error}</p>}
    </div>
  );
}
