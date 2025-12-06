import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  // Quitamos el 'if (!source) return undefined' para que TS sepa
  // que siempre devolvemos un objeto "builder" al que se le pueden poner medidas.
  return builder.image(source);
}