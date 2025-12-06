// src/env.d.ts
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
/// <reference types="@sanity/astro/module" />

// SOLUCIÓN MANUAL: Esto le dice a TypeScript qué es "sanity:client"
declare module "sanity:client" {
  import { type SanityClient } from "@sanity/client";
  export const sanityClient: SanityClient;
}