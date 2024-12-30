import Image from 'next/image';
import Link from 'next/link';

import { Post } from '@/config/types';

interface Props {
    post: Post;
}

const PostCard = ({ post }: Props) => {
    return (
        <Link href={post.url}>
            <li className='flex h-full flex-col gap-3 overflow-hidden rounded-md border shadow-md transition hover:shadow-xl 
            dark:border-slate-700 dark:hover:border-white'>
                <div className='relative aspect-video w-full rounded-t-md border-b'>
                    <Image
                        src={post.thumbnail}
                        alt={`thumbnail for ${post.title}`}
                        sizes='(max-width: 1000px) 50vw, 450px'
                        fill
                        priority
                        className='object-cover'
                    />
                </div>
                <div className='flex flex-1 flex-col justify-between p-4 pt-1'>
                    <div>
                        <div className='text-sm font-medium text-yellow-600 lg:text-base'>
                            {post.categoryPublicName}
                        </div>
                        <h2 className='mb-3 mt-1 text-lg font-bold sm:text-xl md:text-lg'>{post.title}</h2>
                    </div>
                </div>
            </li>
        </Link>
    );
};

export default PostCard;