import { define } from "../utils.ts";
import { Header } from "../components/Header.tsx";
import { Card } from "../components/Card.tsx";

export default define.page(function Home() {
  return (
    <div>
      <Header />
      <div class="mx-10 flex flex-wrap">
        <Card link="/primer/" description="PCR primer design" />
        <Card link="/primer/" description="PCR primer design" />
      </div>
    </div>
  );
});
