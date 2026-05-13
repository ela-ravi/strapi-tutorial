import { Fragment } from "react";

import {loaders} from "@/data/loaders";
import { validateApiResponse } from "@/lib/error-handler";

import { HeroSection, IHeroSectionProps } from "@/components/custom/HeroSection";
import { FeaturesSection, IFeaturesSectionProps } from "@/components/custom/FeaturesSection";

  // Union type of all possible block components
export type TBlocks =
  | (IHeroSectionProps & { __component: "layout.hero" })
  | (IFeaturesSectionProps & { __component: "layout.features" });

// Version 1
// const homePageQueryString = qs.stringify({
//   populate: {
//     blocks: {
//       on: {
//         "layout.hero": {
//           populate: {
//             image: {
//               // populate: true
//               fields: ["url", "alternativeText"]
//             },
//             link: {
//               populate: true
//             }  
//           }
//         }
//       }
//     }
//   }
// })


export function blockRenderer(block: TBlocks) {
  switch (block.__component) {
    case "layout.hero":
      return <HeroSection data={block} />;
    case "layout.features":
      return <FeaturesSection data={block} />;
  }
}

// async function getStrapiData(path: string) {
//   const baseUrl = getStrapiURL();
//   console.log(baseUrl, path);
//   const url = new URL(path, baseUrl);
//   console.log("url:", url);
//   url.search = homePageQueryString;
//   const response = await fetch(url.href, {cache: "no-store"}); // no-store to avoid caching the data
//   const json = await response.json();
//   console.log("getStrapiData:", json);
//   return json.data;
// }

export default async function Home() {
  const homePageData = await loaders.getHomePageData();
  const data = validateApiResponse(homePageData, "home page")
  const { blocks } = data
  
  // let responseData;
  // try {
  //   responseData = await getStrapiData("/api/home-page");
  //   console.log("blocks:", responseData);
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return null;
  // }
  // const blocks = (responseData?.blocks ?? []) as HomePageBlock[];

  return (
    <main>
      {blocks.map((block: any) => (
        <Fragment key={block.id}>{blockRenderer(block)}</Fragment>
      ))}
    </main>
  );
}
