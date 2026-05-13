import qs from "qs";
import type { TStrapiResponse, THomePage, TGlobal } from "@/types";

import { api } from "@/data/data-api";
import { getStrapiURL } from "@/lib/utils";
import { unstable_noStore } from "next/cache"

const baseUrl = getStrapiURL();

async function getHomePageData(): Promise<TStrapiResponse<THomePage>> {
  const query = qs.stringify({
    populate: {
      blocks: {
        on: {
          "layout.hero": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              link: {
                populate: true,
              },
            },
          },
          "layout.features": {
            populate: {
              features: {
                populate: true,
              },
            },
          },
        },
      },
    },
  });

  const url = new URL("/api/home-page", baseUrl);
  url.search = query;
  return api.get<THomePage>(url.href);
}

async function getGlobalPageData(): Promise<TStrapiResponse<TGlobal>> {

    // unstable_noStore(); // This prevents cache for the requests that goes through this function. ()

    const path = "/api/global-page";
    const url = new URL(path, baseUrl);
    url.search = qs.stringify({
        populate: {
            header: {
                populate: "*"
            },
            footer: {
                populate: "*"
            }
        }
    })
    return api.get<TGlobal>(url.href);
}

export const loaders = {
  getHomePageData,
  getGlobalPageData
};