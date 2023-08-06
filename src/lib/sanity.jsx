/* eslint-disable no-undef */
import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: import.meta.env.VITE_PROJECT_ID_SANITY,
  dataset: import.meta.env.VITE_DATASET_SANITY,
  apiVersion: "2023-03-25", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}

export default client;
