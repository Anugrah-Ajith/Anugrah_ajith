// Type declarations for Vite environment variables and image imports

declare module "*.png" {
  const src: string;
  export default src;
}

declare interface ImportMetaEnv {
  readonly VITE_CONTACT_ENDPOINT?: string;
  // add other VITE_ variables here as needed
}

declare interface ImportMeta {
  readonly env: ImportMetaEnv;
}
