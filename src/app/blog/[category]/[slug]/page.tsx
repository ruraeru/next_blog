export default async function DetailPostPage({ params }: { params: Promise<{ category: string, slug: string }> }) {

    const { category, slug } = await params;
    return (
        <div>
            <h1>{category}</h1>
            <p>{slug}</p>
        </div>
    )
}