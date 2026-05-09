// import {Button} from "@/components/ui/button";

async function getStrapiData(path: string) {
  const baseUrl = "http://localhost:1337";
  const response = await fetch(`${baseUrl}/${path}`);
  const json = await response.json();
  console.log(json);
  return json.data;
}

export default async function Home() {
  const data = await getStrapiData("api/home-page");
  return (
    <main>
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p className="text-xl mt-4 text-gray-500">{data.description}</p>
    </main>
  );
}
