import Link from "next/link";

export default function PostItems({ posts }: { posts: any[] }) {
    return (
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
                <li
                    key={post.id}
                    className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                    <Link href={`/details/${post.slug}`} className="block p-4 h-full">
                        <h2 className="text-lg font-bold text-blue-700 mb-2 hover:underline">
                            {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                            {post.body}
                        </p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
