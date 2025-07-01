import { coreClient } from "@/services/core.service";

export default async function PostDetails({ slug }: { slug: string }) {
  const post = await coreClient.getSinglePost({ slug });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <section className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          عنوان پست:
        </h1>
        <p className="text-lg text-gray-700 mb-4">{post.title}</p>

        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          توضیحات پست:
        </h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{post.body}</p>

        <div className="mb-6">
          <p className="text-sm text-gray-500">
            نویسنده:{" "}
            <span className="font-medium text-gray-700">{post.user.name}</span>
          </p>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">نظرات:</h3>
          <ul className="space-y-4">
            {post.comments.map((item) => (
              <li
                key={item.id}
                className="bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-700 shadow-sm"
              >
                {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
