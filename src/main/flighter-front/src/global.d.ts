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
