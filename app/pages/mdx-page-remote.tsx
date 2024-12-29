import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface Props {
    mdxSource: MDXRemoteSerializeResult
}

export default function RemoteMdxPage({ mdxSource }: Props) {
    return <MDXRemote {...mdxSource} />
}
export async function getStaticProps() {
    //로컬 파일 불러오자ㅣㅣ
}