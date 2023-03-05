declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "react-github-login";
declare module "@react-oauth/google";

interface Window {
  gapi: string;
}
