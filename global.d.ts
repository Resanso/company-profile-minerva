export {};

declare module "*.glb";
declare module "*.png";

declare module "meshline" {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

// Temporary fallback typings for `three` when @types/three isn't installed.
// This prevents TS7016 errors in environments where the proper types
// are unavailable. For full typings, install `@types/three` or rely
// on the built-in types from newer `three` releases.
declare module "three" {
  const THREE: any;
  export = THREE;
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

-src / vite - env.d.ts;
/// <reference types="vite/client" />
declare module "*.glb";
declare module "*.png";
