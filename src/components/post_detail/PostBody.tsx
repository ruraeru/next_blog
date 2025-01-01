import { Post } from "@/config/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import { MdxComponents } from "../mdx";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from 'rehype-pretty-code';


interface Props {
    post: Post;
}

export const PostBody = ({ post }: Props) => {
    return (
        <MDXRemote
            source={post.content}
            options={{
                mdxOptions: {
                    remarkPlugins: [
                        remarkGfm,
                    ],
                    rehypePlugins: [
                        [
                            rehypePrettyCode,
                            {
                                theme: { dark: 'github-dark-dimmed', light: 'github-light' },
                            },
                        ],
                        // rehypeSlug,
                    ],
                },
            }}
            components={MdxComponents}
        />
    )
}