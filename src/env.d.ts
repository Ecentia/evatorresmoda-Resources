// src/env.d.ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />
// El compilador de TypeScript ahora debe encontrar los tipos a través de la línea de arriba.

declare module "sanity:client" {
  import { type SanityClient } from "@sanity/client";
  export const sanityClient: SanityClient;
}