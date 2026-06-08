// src/vite-env.d.ts
/// <reference types="vite/client" />

declare module '@fontsource/*';
declare module '*.scss';
declare module '*.pdf' {
  const src: string;
  export default src;
}