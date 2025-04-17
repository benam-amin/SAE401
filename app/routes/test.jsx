import { useFetcher } from "@remix-run/react";
export default function MyButton() {
  console.log("✅ MyButton est démonté");

  const fetcher = useFetcher();

  const handleClick = () => {
    console.log("🧠 Clic détecté côté client");

    fetcher.submit(
      { message: "Hello from client!" },
      {
        method: "post",
        action: "/api/hello",
      }
    );
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      Cliquer pour envoyer un message
    </button>
  );
}

