import { GraphQLClient } from "graphql-request";
import { GITHUB_GRAPHQL_API, GH_PUBLIC_TOKEN } from "@/lib/config";

async function middleware(request) {
  return {
    ...request,
    next: { revalidate: 60 },
  };
}

export const github = new GraphQLClient(GITHUB_GRAPHQL_API, {
  headers: {
    accept: "application/vnd.github.v3+json",
    authorization: `token ${GH_PUBLIC_TOKEN}`,
  },
  // @ts-ignore
  requestMiddleware: middleware,
  fetch,
});
