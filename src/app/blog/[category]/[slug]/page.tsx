import { PostBody } from "@/components/post_detail/PostBody";
import { getPostDetail, getPostPaths, parsePostAbstract } from "@/lib/post";

type Props = { params: Promise<{ category: string; slug: string }> };

// export async function DetailPostPage({ params }: Props) {
//     const { category, slug } = await params;
//     const post = await getPostDetail(category, slug);

//     const title = `${post.title} | ruraeru`;
//     const imageURL = `${baseDomain}${post.thumbnail}`;

//     return {
//         title,
//         description: post.desc,

//         openGraph: {
//             title,
//             description: post.desc,
//             type: 'article',
//             publishedTime: post.date.toISOString(),
//             url: `${baseDomain}${post.url}`,
//             images: [imageURL],
//         },
//         twitter: {
//             title,
//             description: post.desc,
//             images: [imageURL]
//         }
//     }
// }

export function generateStaticParams() {
    const postPaths: string[] = getPostPaths();
    const paramList = postPaths
        .map((path) => parsePostAbstract(path))
        .map((item) => ({ category: item.categoryPath, slug: item.slug }));
    return paramList;
}

export default async function PostDetail({ params }: Props) {
    const { category, slug } = await params;
    const post = await getPostDetail(category, slug);
    // const toc = parseToc(post.content);
    return (
        <div>
            <article>
                <PostBody post={post} />
            </article>
        </div>
    )
}
