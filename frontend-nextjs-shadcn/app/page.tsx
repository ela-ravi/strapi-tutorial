import qs from "qs";
import { apiDomain } from "./constants";
import { HeroSection } from "@/components/custom/HeroSection";

const homePageQueryString = qs.stringify({
  populate: {
    blocks: {
      on: {
        "layout.hero": {
          populate: {
            image: {
              // populate: true
              fields: ["url", "alternativeText"]
            },
            link: {
              populate: true
            }  
          }
        }
      }
    }
  }
})

async function getStrapiData(path: string) {
  const baseUrl = apiDomain;
  console.log(baseUrl, path);
  const url = new URL(path, baseUrl);
  console.log("url:", url);
  url.search = homePageQueryString;
  const response = await fetch(url.href, {cache: "no-store"}); // no-store to avoid caching the data
  const json = await response.json();
  console.log(json);
  return json.data;
}

export default async function Home() {
  const {title, description, blocks} = await getStrapiData("/api/home-page");
  return (
    <main>
      <HeroSection data={blocks[0]} />
    </main>
  );
}
