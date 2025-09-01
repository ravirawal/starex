// src/vite-asset.d.ts
declare module '*.worker?url' {
  const url: string;
  export default url;
}
