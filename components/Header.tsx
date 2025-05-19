export function Header() {
  return (
    <header
      class="h-[110px] sm:!h-[144px] w-full bg-cover bg-no-repeat relative"
    >
      <div class="rainfall w-full h-full absolute" />
      <nav class="w-11/12 h-24 max-w-5xl mx-auto flex items-center justify-start relative">
        <a href="/">
          <img
            src="/favicon.ico"
            alt="Deno Logo"
            class="h-14 w-14"
          />
        </a>

        <h1>Bioinformatics Tools</h1>
      </nav>
    </header>
  );
}
