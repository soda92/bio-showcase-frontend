import { useEffect, useState } from "preact/hooks";

interface Primer {
  PENALTY: number;
  SEQUENCE: string;
  GC_PERCENT: number;
}

interface PrimerResult {
  PRIMER_LEFT: Primer[];
  PRIMER_RIGHT: Primer[];
  PRIMER_INTERNAL: Primer[];
}

interface FormResult {
  // Define the structure of your results from the other server
  data?: PrimerResult;
  error?: string;
}

export default function MyFormPage({ backendUrl }: { backendUrl: string }) {
  const [formParams, setFormParams] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<FormResult>({});

  useEffect(() => {
    const doFetch = async () => {
      if (Object.keys(formParams).length === 0) return; // Don't fetch if no params

      const queryString = new URLSearchParams(formParams).toString();
      const targetUrl = `${backendUrl}/primer/api/design/?${queryString}`; // Adjust the URL

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
    <div class="mx-auto my-1 border-2 rounded">
      <form onSubmit={handleSubmit}>
        <input type="text" name="sequence" placeholder="Parameter 1" />
        <input type="number" name="seq_start" placeholder="0" />
        <input type="number" name="seq_end" placeholder="0" />
        <br />
        <div class="mx-3 my-3 border-red-200 border-2 align-middle justify-evenly flex flex-wrap">
          <button type="button" onClick={FillDemoData}>Fill demo data</button>
          <button type="button">Clear</button>
          <button type="submit">Submit</button>
        </div>
      </form>
      {result.data && (
        <div>
          <h2>Left Primers</h2>
          <table>
            <thead>
              <tr>
                <th>Sequence</th>
                <th>GC Percent</th>
              </tr>
            </thead>
            <tbody>
              {result.data.PRIMER_LEFT.map((primer, index) => (
                <tr key={index}>
                  <td>{primer.SEQUENCE}</td>
                  <td>{primer.GC_PERCENT.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Right Primers</h2>
          <table>
            <thead>
              <tr>
                <th>Sequence</th>
                <th>GC Percent</th>
              </tr>
            </thead>
            <tbody>
              {result.data.PRIMER_RIGHT.map((primer, index) => (
                <tr key={index}>
                  <td>{primer.SEQUENCE}</td>
                  <td>{primer.GC_PERCENT.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Internal Primers</h2>
          <table>
            <thead>
              <tr>
                <th>Sequence</th>
                <th>GC Percent</th>
              </tr>
            </thead>
            <tbody>
              {result.data.PRIMER_INTERNAL.map((primer, index) => (
                <tr key={index}>
                  <td>{primer.SEQUENCE}</td>
                  <td>{primer.GC_PERCENT.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {result.error && <p className="error">Error: {result.error}</p>}
    </div>
  );
}

function FillDemoData() {
  const sequence = document.getElementsByName("sequence")[0];
  if (sequence instanceof HTMLInputElement) {
    sequence.value =
      "GCTTGCATGCCTGCAGGTCGACTCTAGAGGATCCCCCTACATTTTAGCATCAGTGAGTACAGCATGCTTACTGGAAGAGAGGGTCATGCAACAGATTAGGAGGTAAGTTTGCAAAGGCAGGCTAAGGAGGAGACGCACTGAATGCCATGGTAAGAACTCTGGACATAAAAATATTGGAAGTTGTTGAGCAAGTNAAAAAAATGTTTGGAAGTGTTACTTTAGCAATGGCAAGAATGATAGTATGGAATAGATTGGCAGAATGAAGGCAAAATGATTAGACATATTGCATTAAGGTAAAAAATGATAACTGAAGAATTATGTGCCACACTTATTAATAAGAAAGAATATGTGAACCTTGCAGATGTTTCCCTCTAGTAG";
  }
  const seq_start = document.getElementsByName("seq_start")[0];
  if (seq_start instanceof HTMLInputElement) {
    seq_start.value = "36";
  }
  const seq_end = document.getElementsByName("seq_end")[0];
  if (seq_end instanceof HTMLInputElement) {
    seq_end.value = "342";
  }
}
