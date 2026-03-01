import "react";

declare module "react" {
  interface HTMLAttributes<T> {
    "xui-modal"?: string;
    "xui-anime"?: string;
    "xui-anime-reverse"?: string;
    "xui-anime-duration"?: string;
    "xui-icon"?: string;
    "xui-placed"?: string;
  }
}
