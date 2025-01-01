/* eslint-disable @typescript-eslint/no-explicit-any */
import { MDXComponents } from "mdx/types";
import { ExternalLink } from "./Link";
import { Image } from "./Image";

export const MdxComponents: MDXComponents = {
    a: ExternalLink as any,
    img: Image as any,
}