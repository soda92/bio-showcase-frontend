export function Card({ link, description }: {
  link: string;
  description: string;
}) {
  return (
    <div class="my-2 mx-2 flex w-40 h-40 items-center bg-blue-200 rounded">
      <a
        href={link}
        class="block border-gray-300 align-middle mx-auto self-end my-4"
      >
        {description}
      </a>
    </div>
  );
}
