import { Post, CreatePostPayload } from "@/types";

class CoreClient {
  private baseUrl?: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl;
  }

  async getPosts(): Promise<Post[]> {
    const url = "https://json.xstack.ir/api/v1/posts";
    const res = await fetch(url);
    const json = await res.json();
    return json.data;
  }

  async getSinglePost({ slug }: { slug: string }): Promise<Post> {
    const url = `https://json.xstack.ir/api/v1/post/${slug}`;
    const res = await fetch(url);
    const json = await res.json();
    return json[0];
  }

  async createPost(payload: CreatePostPayload): Promise<Post> {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    return data;
  }
}

export const coreClient = new CoreClient();
