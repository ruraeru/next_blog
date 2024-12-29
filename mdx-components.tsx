import { MDXComponents } from "mdx/types";
import Image, { ImageProps } from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({ children }) => (
            <h1 className="text-red-700 text-3xl" >{children}</h1>
        ),
        img: (props) => (
            <Image
                width={300}
                height={300}
                sizes="100vw"
                {...(props as ImageProps)}
            />
        ),
        ...components
    }
}