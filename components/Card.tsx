export function Card({ link, description }: {
  link: string;
  description: string;
}) {
  return (
    <div>
      <a
        href={link}
        class="block border-gray-300 rounded bg-blue-200 w-40 h-40"
      >
        {description}
      </a>
    </div>
  );
}
