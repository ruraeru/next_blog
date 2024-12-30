import { getAllPostCount, getCategoryDetailList, getSortedPostList } from '@/lib/post';
import PostCard from './PostCard';

interface PostListProps {
    category?: string;
}

const PostListPage = async ({ category }: PostListProps) => {
    const postList = await getSortedPostList(category);
    // const categoryList = await getCategoryDetailList();
    // const allPostCount = await getAllPostCount();
    return (
        <section className='mx-auto mt-12 w-full max-w-[950px] px-4'>
            <section>
                <ul className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12'>
                    {postList.map((post) => (
                        <PostCard key={post.url + post.date} post={post} />
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default PostListPage;